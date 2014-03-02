var funcaoRowEditing = Ext.create('Ext.grid.plugin.RowEditing',{
	listeners:{
		canceledit: function( editor, context, eOpts ){
			if(!context.record.data.id){
				context.grid.store.remove(context.record);
			}
		}
	}
});

Ext.define('Arche2.view.funcao.Grid' ,{
	extend: 'Ext.grid.Panel',
	alias : 'widget.funcaogrid',
   	requires: ['Ext.toolbar.Paging'],
   	store: 'Funcoes',
    frame: false,
    plugins: [funcaoRowEditing],
    
    columns: [{
        text: 'Nome da Função de Medição',
        flex: 1,
        sortable: true,
        dataIndex: 'nome',
        field: {
            xtype: 'textfield'
        }
    },{
        text: 'Algoritmo',
        flex: 1,
        sortable: true,
        dataIndex: 'algoritmo',
        field: {
            xtype: 'textfield'
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