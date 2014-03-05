var arquitetoRowEditing = Ext.create('Ext.grid.plugin.RowEditing',{
	listeners:{
		canceledit: function( editor, context, eOpts ){
			if(!context.record.data.id){
				context.grid.store.remove(context.record);
			}
		}
	}
});

Ext.define('Arche2.view.arquiteto.Grid' ,{
	extend: 'Ext.grid.Panel',
	alias : 'widget.arquitetogrid',
   	requires: ['Ext.toolbar.Paging'],
   	store: 'Arquitetos',
    frame: false,
    plugins: [arquitetoRowEditing],
    
    columns: [{
        text: 'Nome do Arquiteto',
        flex: 1,
        sortable: true,
        dataIndex: 'nome',
        field: {
            xtype: 'textfield'
        }
    },{
        text: 'Email',
        width: 200,
        sortable: true,
        dataIndex: 'email',
        field: {
            xtype: 'textfield'
        }
    },{
        text: 'username',
        width: 200,
        sortable: true,
        dataIndex: 'username',
        field: {
            xtype: 'textfield'
        }
    }],
    
    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: 'Adicionar',
            iconCls: 'icon-add',
            action: 'adicionar'
        }, '-', {
            text: 'Excluir',
            iconCls: 'icon-delete',
            action: 'deletar'
        }]
    }]
});