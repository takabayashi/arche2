var subCaracteristicaRowEditing = Ext.create('Ext.grid.plugin.RowEditing',{
	listeners:{
		canceledit: function( editor, context, eOpts ){
			if(!context.record.data.id){
				context.grid.store.remove(context.record);
			}
		}
	}
});

Ext.define('Arche2.view.subcaracteristica.Grid' ,{
	extend: 'Ext.grid.Panel',
	alias : 'widget.subcaracteristicagrid',
   	requires: ['Ext.toolbar.Paging'],
   	store: 'SubCaracteristicas',
    frame: false,
    plugins: [subCaracteristicaRowEditing],
    
    columns: [{
        text: 'Caracteristica',
        flex: 1,
        sortable: true,
        dataIndex: 'caracteristica',
        field: {
            xtype: 'combo',
            store: Ext.create('Arche2.store.Caracteristicas'),
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