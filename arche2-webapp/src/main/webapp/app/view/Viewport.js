Ext.define('Arche2.view.Viewport', {
    extend: 'Ext.Viewport',
    layout: 'border',
    renderTo: Ext.getBody(),
 
    requires: [
        'Arche2.view.usuario.Grid',
        'Arche2.view.usuario.Formulario',
        'Arche2.view.medida.Grid',
        'Arche2.view.entidade.Grid',
        'Arche2.view.metodo.Grid',
        'Arche2.view.caracteristica.Grid',
        'Arche2.view.subcaracteristica.Grid'
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
                items: []
            }, {
                region: 'south',
                html: '<p>Desenvolvido por Daniel Martins Takabayashi para o Instituto de Pesquisas Tecnológicas de São Paulo - IPT (05/2014)</p>',
                minHeight: 40
            }, {
                region: 'center',
                xtype: 'tabpanel', 
                activeTab: 0,      
                items: [{
                    title: 'Medidas',
                    items: [{
                    	xtype: 'medidagrid',
                    	itemId: 'medidagrid'
                    }]
                },{
                    title: 'Entidades de medidas',
                    items: [{
                    	xtype: 'entidadegrid',
                    	itemId: 'entidadegrid'
                    }]
                },{
                    title: 'Métodos de medidas',
                    items: [{
                    	xtype: 'metodogrid',
                    	itemId: 'metodogrid'
                    }]
                },{
                    title: 'Caracteristicas',
                    items: [{
                    	xtype: 'caracteristicagrid',
                    	itemId: 'caracteristicagrid'
                    }]
                },{
                    title: 'SubCaracteristicas',
                    items: [{
                    	xtype: 'subcaracteristicagrid',
                    	itemId: 'subcaracteristicagrid'
                    }]
                }]
            }]
        });
 
        me.callParent(arguments);
    }
});