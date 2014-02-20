var entidadeRowEditing = Ext.create('Ext.grid.plugin.RowEditing',{
	listeners:{
		canceledit: function( editor, context, eOpts ){
			if(!context.record.data.id){
				context.grid.store.remove(context.record);
			}
		}
	}
});

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
    },{
        text: 'Valor minimo',
        dataIndex: 'limiteValorInferior',
        field: {
            xtype: 'numberfield',
            value: 0,
            minValue: 0
        }
    },{
        text: 'Valor máximo',
        dataIndex: 'limiteValorSuperior',
        field: {
            xtype: 'numberfield',
            value: 100,
            minValue: 1
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