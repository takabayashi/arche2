var medidaRowEditing = Ext.create('Ext.grid.plugin.RowEditing');

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
        text: 'Nome',
        flex: 1,
        sortable: true,
        dataIndex: 'nome',
        field: {
            xtype: 'textfield'
        }
    }, {
        header: 'Entidade',
        width: 150,
        sortable: true,
        dataIndex: 'entidade',
        field: {
            xtype: 'combo',
            store: Ext.create('Arche2.store.Entidades'),
            queryMode: 'local',
            typeAhead:true,
            forceSelection: true,
            displayField: 'nome',
            valueField: 'nome'
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
            xtype: 'numberfield'
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