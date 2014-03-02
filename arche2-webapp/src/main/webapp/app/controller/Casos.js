Ext.define('Arche2.controller.Casos', {
    extend: 'Ext.app.Controller',
 
    stores: ['Casos'],
 
    models: ['Caso'],
 
    views: ['caso.FormularioProblema', 
            'caso.FormularioSolucao',
            'caso.SugestaoGrid'],
 
    refs: [{
            ref: 'solucaoForm',
            selector: 'form#solucaoform'
        },{
            ref: 'problemaForm',
            selector: 'form#problemaform'
        },{
            ref: 'sugestaoGrid',
            selector: 'grid#sugestaogrid'
        }],
 
    init: function() {
        this.control({
            'solucaoform button[action=addNovoCaso]': {
                click: this.addNovoCaso
            },
            'solucaoform button[action=deleteCaso]': {
                click: this.deleteCaso
            },
            'problemaform button[action=sugerirSolucao]': {
                click: this.sugerirSolucao
            },
            'problemaform button[action=limpar]':{
            	click: this.limparFormularioProblema
            },
            'solucaoform button[action=limpar]':{
            	click: this.limparFormularioSolucao
            },
            'solucaoform button[action=cancelar]':{
            	click: this.cancelarFormularioSolucao
            },
            'problemaform button[action=startNovoCaso]':{
            	click: this.startNovoCaso
            },
            'sugestaogrid dataview': {
                itemdblclick: this.abrirSugestao
            }
        });
    },
 
    addNovoCaso: function(button) {
    	if(Ext.getCmp('medidagrid').getStore().data.items.length > 0){
	    	var decisao = {};
	    	decisao.tipo = Ext.getCmp('tipo').getValue();
	    	decisao.resumo = Ext.getCmp('resumoDecisao').getValue();
	    	decisao.estado = Ext.getCmp('estado').getValue();
	    	decisao.racional = Ext.getCmp('racional').getValue();
	    	decisao.risco = Ext.getCmp('risco').getValue();
	    	decisao.escopo = Ext.getCmp('escopo').getValue();
	    	decisao.custo = Ext.getCmp('custo').getValue();
	    	
	    	//prepara o historico
	    	var acao = Ext.getCmp('historico').getValue() == "" ? "Decisão Inicial":"Decisão Adaptada";
	    	
	    	decisao.historico = " - " + getMessage("arche2.default.username") + " - "+ acao +"\n" + Ext.getCmp('historico').getValue();
	    	
	    	this.updateRNF();
	            	
	    	var novoCaso = {};
	    	novoCaso.rnf = window.rnf;
	    	novoCaso.decisao = decisao;
	    	
	    	console.log(JSON.stringify(novoCaso));
	    	
	    	var that = this;
	    	
	    	Ext.Ajax.request({
	    	    url: 'rest/caso/create',
	    	    headers: { 'Content-Type': 'application/json;charset=utf-8', 'Accept': 'application/json'},
	    	    jsonData: JSON.stringify(novoCaso),
	            method: 'POST',
	            
	    	    success: function(response, opts) {
	    	    	Ext.Msg.alert('Sucesso', 'Novo Caso registrado com sucesso!!!');
	    	    	
	    	    	that.cancelarFormularioSolucao(button);
	    	    	
	    	    	//atualiza a lista de casos similares
			    	that.buscarCasosSimilares();
	    	    },
	    	    failure: function(response, opts) {
	    	        console.log('server-side failure with status code ' + response.status);
	    	        Ext.Msg.alert('Erro', 'Olhe o log, pois lagum erro ocorreu!!!');
	    	    }
	    	});
    	}
    },
    
    sugerirSolucao: function(button){
    	if(Ext.getCmp('medidagrid').getStore().data.items.length > 0){
    		
            this.updateRNF();
            
    		//busca os casos similares e caso nao encontre nenhum, permite o cadastro de 
    		this.buscarCasosSimilares();
            
        }
    },
    
    limparFormularioProblema: function(button){
    	Ext.getCmp('problemaform').getForm().reset();
        
        var comboSubcaracteristica = Ext.getCmp('subcaracteristica');
        comboSubcaracteristica.setDisabled(true);
        
        //reseta o grid
        var medidasGrid = Ext.getCmp('medidagrid');
        medidasGrid.getStore().removeAll();
        medidasGrid.getStore().sync();
        
        //reseta o resumo
        Ext.getCmp('resumo').update(getMessage('arche2.default.resumo'));
    },
    
    limparFormularioSolucao: function(button){
    	Ext.getCmp('solucaoform').getForm().reset();
    },
    
    cancelarFormularioSolucao: function(button){
    	this.limparFormularioSolucao(button);

    	//desbloqueia o proximo formulario
        Ext.getCmp('wizardPanel').getLayout().setActiveItem('problemaform');

    },
    
    startNovoCaso : function(button){
    	if(Ext.getCmp('medidagrid').getStore().data.items.length > 0){
			//atualiza o texto da decisão
	        Ext.getCmp('resumoFormDecisao').update(Ext.getCmp('resumo'));
	        
	        //desbloqueia o proximo formulario
	        Ext.getCmp('wizardPanel').getLayout().setActiveItem('solucaoform');
	        
	    	//desabilita botao de exclusao
	    	Ext.getCmp('deleteCasoButton').disable();
	        
    	}else{
    		Ext.Msg.alert('Medidas', 'Ao menos uma medida deve ser informada');
    	}
    },
    
    buscarCasosSimilares : function(){
    	var novoProblema = {};
    	novoProblema = window.rnf;
    	
    	Ext.Ajax.request({
    	    url: 'rest/caso/similares',
    	    headers: { 'Content-Type': 'application/json;charset=utf-8', 'Accept': 'application/json'},
    	    jsonData: JSON.stringify(novoProblema),
            method: 'POST',
            
    	    success: function(response, opts) {
    	    	console.log('casos similares carregados...');
                var sugestoes = JSON.parse(response.responseText);
                
                if(sugestoes.length == 0){
                	//nao encontrou nenhum caso similar
                	Ext.Msg.alert('Nada', 'Nenhum caso com similaridade significatica foi encontrado!!!');
                	
                	//fecha o painel de sugestoes encontradas
    				Ext.getCmp('sugestaogrid').collapse();

    			}else{
    				//casos foram encontrados, portanto mostra na grid de casos similares
    				var sugestaoStore = Ext.getCmp('sugestaogrid').getStore();
    				
    				sugestaoStore.removeAll();
    				window.listaSugestoes = {};
    				
    				for(var i=0; i<sugestoes.length; i++){
    					
    					var sugestao = Ext.create('Arche2.model.Sugestao', {
    						casoId: sugestoes[i].caso.id,
    						casoResumo: sugestoes[i].caso.decisao.resumo,
    						similaridade: sugestoes[i].similaridade,
    						casoDataCadastro: sugestoes[i].caso.dataCadastro,
    					});
    					
    					//guarda as sugestoes em memória para acessar facilmente
    					window.listaSugestoes[sugestoes[i].caso.id] = sugestoes[i].caso;
    					
    					sugestaoStore.add(sugestao);
    				}
    				
    				//abre o painel de sugestoes encontradas
    				Ext.getCmp('sugestaogrid').expand();
    			}

    	    },
    	    failure: function(response, opts) {
    	        console.log('server-side failure with status code ' + response.status);
    	        Ext.Msg.alert('Erro', 'Olhe o log, pois lagum erro ocorreu!!!');
    	    }
    	});
    },
    
    abrirSugestao : function(grid, record){
    	//abre o formulario da solucao com os dados preenchidos
    	Ext.getCmp('wizardPanel').getLayout().setActiveItem('solucaoform');
        
    	var decisao = window.listaSugestoes[record.data.casoId].decisao;
    	
    	Ext.getCmp('idCaso').setValue(record.data.casoId);
    	Ext.getCmp('tipo').setValue(decisao.tipo);
    	Ext.getCmp('resumoDecisao').setValue(decisao.resumo);
    	Ext.getCmp('estado').setValue(decisao.estado);
    	Ext.getCmp('racional').setValue(decisao.racional);
    	Ext.getCmp('risco').setValue(decisao.risco);
    	Ext.getCmp('escopo').setValue(decisao.escopo);
    	Ext.getCmp('custo').setValue(decisao.custo);
    	Ext.getCmp('historico').setValue(decisao.historico);
    	
    	//prepara o text descritivo
    	var rnf = window.listaSugestoes[record.data.casoId].rnf;

    	var htmlTexto = getMessage('arche2.template.resumo', [rnf.nome, rnf.subcaracteristica, rnf.tipoMedida]);
		
		htmlTexto += "<p>";
		
		for(var i=0; i<rnf.medidas.length; i++){
			
			if(i>0 && i<rnf.medidas.length){
				htmlTexto += " " + rnf.funcao.nome + " ";
			}
			
			htmlTexto += getMessage('arche2.template.resumo.medidas', [(i+1), rnf.medidas[i].entidade, rnf.medidas[i].metodo, rnf.medidas[i].valor]);
		}
		
		htmlTexto += "</p>";
		
    	Ext.getCmp('resumoFormDecisao').update(htmlTexto);
    	
    	//habilita botao de exclusao
    	Ext.getCmp('deleteCasoButton').enable();
    },
    
    updateRNF : function(){
    	var medidas = Ext.getCmp('medidagrid').getStore().data.items;
		var caracteristica = Ext.getCmp('caracteristica').getValue();
        var subcaracteristica = Ext.getCmp('subcaracteristica').getValue();
        var funcao = Ext.getCmp('funcao').getValue();
        var tipoMedida = Ext.getCmp('tipoMedida').getValue();
        
    	var rnf = {};
        rnf.nome = caracteristica;
        rnf.subcaracteristica = rnf.subcaracteristica = {}, rnf.subcaracteristica = subcaracteristica;
        rnf.funcao = {}, rnf.funcao.nome = funcao;
        rnf.tipoMedida = tipoMedida;
        
        //rnf.resumo = Ext.getCmp('resumo').html;
        
        var lista = [];
		for(var i=0; i<medidas.length; i++){
			lista.push({valor: medidas[i].data.valor, entidade: medidas[i].data.entidade, metodo: medidas[i].data.metodo});
		}
		rnf.medidas = lista;
        
		window.rnf = rnf;
    },
    
    deleteCaso : function(){
    	if(!isAdmin){
    		Ext.Msg.show({
    			title:':-(',
    			msg: 'Essa versão da aplicação não exclui casos...',
    			buttons: Ext.Msg.CANCEL,
    			icon: Ext.Msg.ERROR
    		});
    		
    		return false;
    	}
    	
    	var that = this;
    	
		Ext.Msg.show({
			title:'Atenção',
			msg: 'Vc realmente deseja excluir o caso selecionado?',
			buttons: Ext.Msg.OKCANCEL,
			icon: Ext.Msg.QUESTION,
    	    fn: function(bt){
    	    	if(bt == 'ok'){
	    	    	Ext.Ajax.request({
	    	    		url: 'rest/caso/delete',
					    headers: { 'Content-Type': 'application/json;charset=utf-8', 'Accept': 'application/json'},
					    jsonData: Ext.getCmp('idCaso').getValue(),
					    method: 'POST',
					    
					    success: function(response, opts) {
					    	console.log('Caso excluido com sucesso!!!');
					    	
					    	//atualiza a lista de casos similares
					    	that.buscarCasosSimilares();
					    },
			    	    failure: function(response, opts) {
			    	        console.log('server-side failure with status code ' + response.status);
			    	        Ext.Msg.alert('Erro', 'Olhe o log, pois lagum erro ocorreu!!!');
			    	    }
					}); 
    	    	}
    	     }
	     });
    }
});