Ext.define('Arche2.view.Viewport', {
    extend: 'Ext.Viewport',
    layout: 'fit',
 
    requires: [
        'Arche2.view.usuario.Grid',
        'Arche2.view.usuario.Formulario'
    ],
 
    initComponent: function() {
        var me = this;
 
        Ext.apply(me, {
            items: [
                {
                    xtype: 'usuariogrid'
                }
            ]
        });
 
        me.callParent(arguments);
    }
});