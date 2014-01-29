Ext.define('Arche2.view.medida.Grid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.medidagrid',
 
    requires: ['Ext.toolbar.Paging'],
 
    iconCls: 'icon-grid',
 
    title : 'Medidas',
    store: 'Medidas',
 
    columns: [{
        header: "NOME",
        width: 170,
        flex:1,
        dataIndex: 'name'
    },{
        header: "ENTIDADE",
        width: 160,
        flex:1,
        dataIndex: 'entidade'
    },{
        header: "VALOR",
        width: 170,
        flex:1,
        dataIndex: 'valor'
    }],
 
    initComponent: function() {
    	this.dockedItems = [{
    		xtype: 'toolbar',
            items: [{
                iconCls: 'icon-save',
                text: 'Adicionar',
                action: 'add'
            },{
                iconCls: 'icon-delete',
                text: 'Excluir',
                action: 'delete'
            }]
    	},{
    		xtype: 'pagingtoolbar',
            dock:'top',
            store: 'Medidas',
            displayInfo: true,
            displayMsg: 'Mostrando Medidas {0} - {1} de {2}',
            emptyMsg: "Nenhuma medida encontrada."
    	}];
    	
        this.callParent(arguments);
    }
});