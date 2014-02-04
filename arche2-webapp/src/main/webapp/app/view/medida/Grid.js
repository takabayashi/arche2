var medidaRowEditing = Ext.create('Ext.grid.plugin.RowEditing');

Ext.define('Arche2.view.medida.Grid' ,{
	extend: 'Ext.grid.Panel',
	alias : 'widget.medidagrid',
   	requires: ['Ext.toolbar.Paging'],
   	iconCls: 'icon-grid',
   	title : 'Medidas',
	store: 'Medidas',

    width: 400,
    height: 200,
    frame: false,
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
        width: 120,
        sortable: true,
        dataIndex: 'entidade',
        field: {
            xtype: 'combo'
        }
    },{
        header: 'Método',
        width: 120,
        sortable: true,
        dataIndex: 'metodo',
        field: {
            xtype: 'combo'
        }
    },{
        text: 'Valor',
        width: 40,
        sortable: true,
        dataIndex: 'valor',
        field: {
            xtype: 'textfield'
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