Ext.define('Arche2.view.geral.Formulario', {
    extend: 'Ext.form.Panel',
    alias : 'widget.geralform',
    requires: [
               'Arche2.store.Caracteristicas',
               'Arche2.store.SubCaracteristicas',
               'Arche2.view.medida.Grid'
               ],
    bodyPadding: 50,
    url: '',
    title: 'Requisitos não Funcionais Mensuraveis - Problema', 
    layout: 'anchor',
    
    defaults: {
        anchor: '100%'
    },

    items: [{
    	xtype: 'combo',
    	fieldLabel: 'Caracteristica:',
    	name: 'caracteristica',
    	id: 'caracteristica',
    	displayField: 'nome',
    	valueField: 'nome',
        store: Ext.create('Arche2.store.Caracteristicas'),
        queryMode: 'local',
        typeAhead:true,
        forceSelection: true,
        allowBlank: false,
        emptyText: 'Caracteristicas...',
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
            }
       }
        
    },{
    	xtype: 'combo',
    	fieldLabel: 'SubCaracteristica:',
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
        margin: '10 0 10 0 0'
    },{
        
    	xtype: 'medidagrid',
    	id: 'medidagrid',
    	title: 'Medidas'

    },{
    	xtype: 'combo',
    	fieldLabel: 'Função:',
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
        margin: '10 0 10 0 0'
        
    },{
        xtype: 'fieldset',
        title: 'Resumo',
        collapsible: true,
        id: 'resumo',
        html: getMessage('arche2.default.resumo')
    }],

    buttons: [{
        text: 'Limpar',
        handler: function() {
            this.up('form').getForm().reset();
            
            var comboSubcaracteristica = Ext.getCmp('subcaracteristica');
            comboSubcaracteristica.setDisabled(true);
            
            //reseta o grid
            var medidasGrid = Ext.getCmp('medidagrid');
            medidasGrid.getStore().removeAll();
            medidasGrid.getStore().sync();
            
            //reseta o resumo
            Ext.getCmp('resumo').update(getMessage('arche2.default.resumo'));
        }
    }, {
        text: 'Sugerir Solução',
        formBind: true,
        disabled: true,
        handler: function() {
        	
        	if(Ext.getCmp('medidagrid').getStore().data.items.length > 0){
        		var medidas = Ext.getCmp('medidagrid').getStore().data.items;
        		var caracteristica = Ext.getCmp('caracteristica').getValue();
                var subcaracteristica = Ext.getCmp('subcaracteristica').getValue();
                var funcao = Ext.getCmp('funcao').getValue();
        	}
        	
        	//tenta encontrar alguma solucao similar
        	
        	//nao encontra e cria um novo caso (Problema + Solução)
        	
        	
        }
    }, {
        text: 'Incluir Novo Problema',
        formBind: true,
        disabled: true,
        handler: function() {
        	
        	
        	
        }
    }]
});