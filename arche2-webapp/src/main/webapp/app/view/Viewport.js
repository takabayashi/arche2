Ext.define('Arche2.view.Viewport', {
    extend: 'Ext.Viewport',
    layout: 'border',
    renderTo: Ext.getBody(),
 
    requires: [
        'Arche2.view.geral.TabPanel',
        'Arche2.view.caso.SugestaoGrid',
        'Arche2.view.caso.FormularioProblema',
        'Arche2.view.caso.FormularioSolucao',
        'Arche2.view.geral.FormularioFeedBack'
    ],
 
    initComponent: function() {
        var me = this;
 
        Ext.apply(me, {
        	items: [{
                region: 'north',
                autoHeight: true,
                border: false,
                margins: '10 10 10 10',
                hidden: true,
                items: [{
                	html: MESSAGES['arche2.name'] + '<h3>' + MESSAGES['arche2.welcome'] + MESSAGES['arche2.default.username'] + (!x63? '' : ' (admin)') + '</h3>'
                }]
            }, {
                region: 'east',
                collapsible: true,
                title: 'Cadastros de Apoio',
                width: '70%',
                resizable: true,
               	collapsed: true,
               	hidden: !x63,
                items: [{
                   	xtype: 'geraltabpanel'
                  }]
            },{
                region: 'east',
                collapsible: true,
                title: 'Registro de Feedback',
                width: '50%',
                resizable: true,
                collapsed: true,
                id: "feedbackformPanel",
                items: [{
                	xtype: 'feedbackform'
                }]
            }, {
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