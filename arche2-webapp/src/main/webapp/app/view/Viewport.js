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
                autoHeight: true,
                border: false,
                margins: '10 10 10 10',
                items: [{
                	html: MESSAGES['arche2.name'] + '<h3>' + MESSAGES['arche2.welcome'] + MESSAGES['arche2.default.username'] + (!isAdmin? '' : ' (admin)') + '</h3>'
                }]
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
                width: '70%',
                resizable: true,
               	collapsed: true,
               	hidden: !isAdmin,
                items: [{
                   	xtype: 'geraltabpanel'
                  }]
            },{
                region: 'south',
                html: MESSAGES['arche2.about'],
                minHeight: 15,
                margins: '1 10 1 10'
                
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
	            			xtype: 'problemaform',
	            			overflowY: 'auto'
	            		},{
	            			xtype: 'solucaoform',
	            			overflowY: 'auto'
	            		}]
                	},{
                		region: 'south',
                		xtype: 'sugestaogrid',
                		id: 'sugestaogrid',
                		resizable: true,
                		collapsed: true,
                		height: 200,
                    }]
            }]
        });
 
        me.callParent(arguments);
    }
});