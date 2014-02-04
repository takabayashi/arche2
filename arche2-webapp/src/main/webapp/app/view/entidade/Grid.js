var entidadeRowEditing = Ext.create('Ext.grid.plugin.RowEditing');

Ext.define('Arche2.view.entidade.Grid' ,{
	extend: 'Ext.grid.Panel',
	alias : 'widget.entidadegrid',
   	requires: ['Ext.toolbar.Paging'],
   	iconCls: 'icon-grid',
   	title : 'Entidades de Medida',
	store: 'Entidades',

    width: 400,
    height: 200,
    frame: false,
    plugins: [entidadeRowEditing],
    
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