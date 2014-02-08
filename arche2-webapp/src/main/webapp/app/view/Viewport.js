Ext.define('Arche2.view.Viewport', {
    extend: 'Ext.Viewport',
    layout: 'border',
    renderTo: Ext.getBody(),
 
    requires: [
        'Arche2.view.geral.TabPanel',
        'Arche2.view.caso.SugestaoGrid',
        'Arche2.view.caso.FormularioProblema',
        'Arche2.view.caso.FormularioSolucao'
    ],
 
    initComponent: function() {
        var me = this;
 
        Ext.apply(me, {
        	items: [{
                region: 'north',
                html: '<h1>Arche 2 - Architect Expert</h1>',
                autoHeight: true,
                border: false,
                margins: '10 10 10 10'
            }, {
                region: 'west',
                collapsible: true,
                title: 'Requisitos Não Funcionais',
                width: '20%',
                resizable: true,
                collapsed: true,
                items: []
            }, {
                region: 'east',
                collapsible: true,
                title: 'Cadastros de Apoio',
                width: '50%',
                resizable: true,
               	collapsed: true,
                items: [{
                   	xtype: 'geraltabpanel'
                  }]
            },{
                region: 'south',
                html: '<p>Desenvolvido por Daniel Martins Takabayashi para o Instituto de Pesquisas Tecnológicas de São Paulo - IPT (05/2014)</p>',
                minHeight: 40
            }, {
                region: 'center',
                xtype: 'panel',
                autoHeight: true,
                autoWidth: true,
                layout: {
                	type: 'border'
                },
                items:[{
                	xtype: 'panel',
                	region: 'center',
                	layout: 'card',
                	id: 'wizardPanel',
                	
                	items: [{
	            			xtype: 'problemaform'
	            		},{
	            			xtype: 'solucaoform'
	            		}]
                	},{
                		region: 'south',
                		xtype: 'sugestaogrid',
                		id: 'sugestaogrid',
                		height: 150,
                    }]
            }]
        });
 
        me.callParent(arguments);
    }
});