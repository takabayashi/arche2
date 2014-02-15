var entidadeRowEditing = Ext.create('Ext.grid.plugin.RowEditing');

Ext.define('Arche2.view.entidade.Grid' ,{
	extend: 'Ext.grid.Panel',
	alias : 'widget.entidadegrid',
   	requires: ['Ext.toolbar.Paging'],
   	store: 'Entidades',
    plugins: [entidadeRowEditing],
    
    columns: [{
        text: 'Entidade Pai',
        flex: 1,
        sortable: true,
        dataIndex: 'pai',
        field: {
            xtype: 'combo',
            store: Ext.create('Arche2.store.Entidades'), 
            queryMode: 'remote',
            typeAhead:true,
            forceSelection: true,
            displayField: 'nome',
            valueField: 'nome'
        }
    },{
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
            action: 'adicionar'
        }, '-', {
            text: 'Excluir',
            iconCls: 'icon-delete',
            action: 'deletar'
        }]
    }]
});