var pesoRowEditing = Ext.create('Ext.grid.plugin.RowEditing',{
	listeners:{
		canceledit: function( editor, context, eOpts ){
			if(!context.record.data.id){
				context.grid.store.remove(context.record);
			}
		}
	}
});

Ext.define('Arche2.view.peso.Grid' ,{
	extend: 'Ext.grid.Panel',
	alias : 'widget.pesogrid',
   	requires: ['Ext.toolbar.Paging'],
   	store: 'Pesos',
    frame: false,
    plugins: [pesoRowEditing],
    
    columns: [{
        text: 'Nome do Peso',
        flex: 1,
        sortable: true,
        dataIndex: 'nome',
        field: {
            xtype: 'textfield'
        }
    },{
        text: 'Valor',
        width: 100,
        sortable: true,
        dataIndex: 'valor',
        field: {
            xtype: 'numberfield'
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