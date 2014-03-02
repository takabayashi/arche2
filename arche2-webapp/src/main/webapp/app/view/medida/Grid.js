var medidaRowEditing = Ext.create('Ext.grid.plugin.RowEditing',{
	listeners:{
		canceledit: function( editor, context, eOpts ){
			if(!context.record.data.id){
				context.grid.store.remove(context.record);
			}
		}
	}
});

Ext.define('Arche2.view.medida.Grid' ,{
	extend: 'Ext.grid.Panel',
	alias : 'widget.medidagrid',
   	requires: ['Ext.toolbar.Paging'],
   	store: 'Medidas',
   	stateful: true,
    frame: false,
    height: 150,
    collapsible: true,
    plugins: [medidaRowEditing],
    
    columns: [{
        header: 'Entidade',
        flex: 1,
        sortable: true,
        dataIndex: 'entidade',
        field: {
            xtype: 'combo',
            store: Ext.create('Arche2.store.Entidades', {
            	filters: [function(record, id){
            		return (record.data.pai != null);
            	}]
            }),
            queryMode: 'local',
            typeAhead:true,
            forceSelection: true,
            displayField: 'nome',
            valueField: 'nome',
        	 listeners:{
                 scope: this,
                 'select': function(combo, records, eOpts){
                 	
                	var valor = Ext.getCmp('valor');
                	valor.setDisabled(false);
                	valor.setValue(records[0].data.limiteValorInferior);
                	valor.setMinValue(records[0].data.limiteValorInferior);
                 	valor.setMaxValue(records[0].data.limiteValorSuperior);
                 }
            }
        }
    },{
        header: 'Método',
        width: 150,
        sortable: true,
        dataIndex: 'metodo',
        field: {
            xtype: 'combo',
            store: Ext.create('Arche2.store.Metodos'),
            queryMode: 'local',
            typeAhead:true,
            forceSelection: true,
            displayField: 'nome',
            valueField: 'nome'
        }
    },{
        text: 'Valor',
        width: 70,
        sortable: true,
        dataIndex: 'valor',
        field: {
            xtype: 'numberfield',
            id: 'valor',
            minValue: 0,
            maxValue: 1000000000, 
            value: 0
            	
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