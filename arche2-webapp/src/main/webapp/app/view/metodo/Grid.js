var metodoRowEditing = Ext.create('Ext.grid.plugin.RowEditing',{
	listeners:{
		canceledit: function( editor, context, eOpts ){
			if(!context.record.data.id){
				context.grid.store.remove(context.record);
			}
		}
	}
});

Ext.define('Arche2.view.metodo.Grid' ,{
	extend: 'Ext.grid.Panel',
	alias : 'widget.metodogrid',
   	requires: ['Ext.toolbar.Paging'],
   	store: 'Metodos',
    frame: false,
    plugins: [metodoRowEditing],
    
    columns: [{
        text: 'Nome',
        flex: 1,
        sortable: true,
        dataIndex: 'nome',
        field: {
            xtype: 'textfield'
        }
    },{
        text: 'Algoritmo',
        flex: 1,
        sortable: false,
        dataIndex: 'algoritmo',
        field: {
            xtype: 'textareafield'
        }
    }],
    
    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: 'Adicionar',
            iconCls: 'icon-add',
            action: 'add'
        }, '-', {
            text: 'Excluir',
            iconCls: 'icon-delete',
            action: 'delete'
        }]
    }]
});