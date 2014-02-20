var tipoMedidaRowEditing = Ext.create('Ext.grid.plugin.RowEditing',{
	listeners:{
		canceledit: function( editor, context, eOpts ){
			if(!context.record.data.id){
				context.grid.store.remove(context.record);
			}
		}
	}
});

Ext.define('Arche2.view.tipomedida.Grid' ,{
	extend: 'Ext.grid.Panel',
	alias : 'widget.tipomedidagrid',
   	requires: ['Ext.toolbar.Paging'],
   	store: 'TipoMedidas',
    frame: false,
    plugins: [tipoMedidaRowEditing],
    
    columns: [{
        text: 'Medida Pai',
        flex: 1,
        sortable: true,
        dataIndex: 'pai',
        field: {
            xtype: 'combo',
            store: Ext.create('Arche2.store.TipoMedidas'), 
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