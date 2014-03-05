Ext.define('Arche2.view.caso.FormularioProblema', {
    extend: 'Ext.form.Panel',
    alias : 'widget.problemaform',
    requires: [
               'Arche2.store.Caracteristicas',
               'Arche2.store.SubCaracteristicas',
               'Arche2.view.medida.Grid'
               ],
    bodyPadding: 50,
    url: '',
    title: 'Requisitos Não Funcionais Mensuráveis (Problema)', 
    layout: 'anchor',
    id: 'problemaform',
    
    defaults: {
        anchor: '100%'
    },

    items: [{
    	xtype: 'combo',
    	fieldLabel: 'Característica:',
    	name: 'caracteristica',
    	id: 'caracteristica',
    	displayField: 'nome',
    	valueField: 'nome',
        store: Ext.create('Arche2.store.Caracteristicas'),
        queryMode: 'local',
        typeAhead:true,
        forceSelection: true,
        allowBlank: false,
        emptyText: 'Requisito não Funcional...',
        listeners:{
            scope: this,
            'select': function(combo, records, eOpts){
            	//obtem a referencia ao combo de subcaracteristicas
            	var comboSubcaracteristica = Ext.getCmp('subcaracteristica');
            	comboSubcaracteristica.setDisabled(false);
            	comboSubcaracteristica.setValue('');
            	
            	var subCaracteristicasStore = Ext.getStore('SubCaracteristicas');
            	var lista = [];
            	
            	//altera o combo de subcaracteristicas quando uma nova caracteristica é selecionada
            	subCaracteristicasStore.on('load',function (store, records, successful, eOpts ){
            		store.each(function(field){
            			if(field.data.caracteristica == combo.getValue()){
            				lista.push([field.data.nome, 'nome']);
            			}
            		});
            		
            		comboSubcaracteristica.store.loadData(lista);
            	});
            	
            	subCaracteristicasStore.load();
            	
            	//atualiza o texto do resumo
            	Ext.getCmp('resumo').update(_app.getController("Casos").prepareResumoFromMedidasGrid(Ext.getCmp('medidagrid').store.data.items));
            }
       }
        
    },{
    	xtype: 'combo',
    	fieldLabel: 'Sub-Característica:',
    	name: 'subcaracteristica',
    	id: 'subcaracteristica',
    	displayField: 'nome',
    	valueField: 'nome',
    	queryMode: 'local',
        typeAhead:true,
        forceSelection: true,
        allowBlank: false,
        disabled: true,
        emptyText: 'Subcaracteristicas...',
        store: [],
        margin: '10 0 10 0 0',
        listeners:{
            scope: this,
            'select': function(combo, records, eOpts){
            	//obtem a referencia ao combo de tipoMedida
            	var comboTipoMedida = Ext.getCmp('tipoMedida');
            	comboTipoMedida.setDisabled(false);
            	comboTipoMedida.setValue('');
            	
            	var comboTipoMedidaStore = Ext.getStore('TipoMedidas');
            	var lista = [];
            	
            	//altera o combo de tipodemedida quando uma nova subcaracteristica é selecionada
            	comboTipoMedidaStore.on('load',function (store, records, successful, eOpts ){
            		store.each(function(field){
            			if(field.data.subcaracteristica == combo.getValue() && field.data.pai != null && field.data.pai.length > 1){
            				lista.push([field.data.nome, 'nome']);
            			}
            		});
            		
            		comboTipoMedida.store.loadData(lista);
            	});
            	
            	comboTipoMedidaStore.load();
            	
            	//atualiza o texto do resumo
            	Ext.getCmp('resumo').update(_app.getController("Casos").prepareResumoFromMedidasGrid(Ext.getCmp('medidagrid').store.data.items));
            }
       }
    },{
    	xtype: 'combo',
    	fieldLabel: 'Tipo da Medida',
    	name: 'tipoMedida',
    	id: 'tipoMedida',
    	displayField: 'nome' ,
    	valueField: 'nome',
        queryMode: 'local',
        store: [],
        typeAhead:true,
        forceSelection: true,
        allowBlank: false,
        disabled: true,
        emptyText: 'Tipo de Medidas...',
        margin: '10 0 10 0 0',
        listeners:{
            scope: this,
            'select': function(combo, records, eOpts){
            	Ext.getCmp('medidagrid').setDisabled(false);
            	
            	//atualiza o texto do resumo
            	Ext.getCmp('resumo').update(_app.getController("Casos").prepareResumoFromMedidasGrid(Ext.getCmp('medidagrid').store.data.items));
            }
        }
    	
    }, {
    	xtype: 'combo',
    	fieldLabel: 'Função da Medida',
    	name: 'funcao',
    	id: 'funcao',
    	displayField: 'nome' ,
    	valueField: 'algoritmo',
        store: Ext.create('Arche2.store.Funcoes'),
        queryMode: 'local',
        typeAhead:true,
        forceSelection: true,
        allowBlank: false,
        emptyText: 'Função de Medição...',
        margin: '10 0 10 0 0',
        value: "e", //valor padrão para facilitar o preenchimento
        listeners:{
            scope: this,
            'select': function(combo, records, eOpts){
            	
            	//atualiza o texto do resumo
            	Ext.getCmp('resumo').update(_app.getController("Casos").prepareResumoFromMedidasGrid(Ext.getCmp('medidagrid').store.data.items));
            }
        }
    },{
        
    	xtype: 'medidagrid',
    	id: 'medidagrid',
    	title: 'Medidas',
    	disabled: true

    },{
        xtype: 'fieldset',
        title: 'Resumo',
        collapsible: true,
        id: 'resumo',
        margin: '10 0 10 0 0',
        html: getMessage('arche2.default.resumo')
    }],

    buttons: [{
        text: 'Limpar',
        action: 'limpar'
    }, {
        text: 'Obter Solução',
        formBind: true,
        disabled: true,
        action: 'sugerirSolucao',
        tooltip: MESSAGES['arche2.tooltip.sugerirsolucao']
    }, {
        text: 'Inserir Nova Solução',
        formBind: true,
        disabled: true,
        action: 'startNovoCaso',
        tooltip: MESSAGES['arche2.tooltip.inserirsolucao']
    }]
});