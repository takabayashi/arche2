var caracteristicaRowEditing = Ext.create('Ext.grid.plugin.RowEditing');

Ext.define('Arche2.view.caracteristica.Grid' ,{
	extend: 'Ext.grid.Panel',
	alias : 'widget.caracteristicagrid',
   	requires: ['Ext.toolbar.Paging'],
   	store: 'Caracteristicas',
    frame: false,
    plugins: [caracteristicaRowEditing],
    
    columns: [{
        text: 'Nome',
        flex: 1,
        sortable: true,
        dataIndex: 'nome',
        field: {
            xtype: 'textfield'
        }
    }],
    
    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: 'Adcionar',
            iconCls: 'icon-add',
            action: 'add'
        }, '-', {
            text: 'Excluir',
            iconCls: 'icon-delete',
            action: 'delete'
        }]
    }]
});