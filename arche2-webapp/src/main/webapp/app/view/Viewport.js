Ext.define('Arche2.view.Viewport', {
    extend: 'Ext.Viewport',
    layout: 'fit',
 
    requires: [
        'Arche2.view.usuario.Grid',
        'Arche2.view.usuario.Formulario',
        'Arche2.view.medida.Grid',
        'Arche2.view.entidade.Grid',
        'Arche2.view.metodo.Grid'
    ],
 
    initComponent: function() {
        var me = this;
 
        Ext.apply(me, {
            items: [
                {
                    xtype: 'entidadegrid'
                }
            ]
        });
 
        me.callParent(arguments);
    }
});