Ext.define('Arche2.view.Viewport', {
    extend: 'Ext.Viewport',
    layout: 'fit',
 
    requires: [
        'ExtMVC.view.medida.Grid',
        'ExtMVC.view.medida.Formulario'
    ],
 
    initComponent: function() {
        var me = this;
 
        Ext.apply(me, {
            items: [
                {
                    xtype: 'medidagrid'
                }
            ]
        });
 
        me.callParent(arguments);
    }
});