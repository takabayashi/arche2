Ext.define('Arche2.view.sugestao.Grid' ,{
	extend: 'Ext.grid.Panel',
	alias : 'widget.sugestaogrid',
   	requires: ['Ext.toolbar.Paging'],
   	store: 'Sugestoes',
   	title: 'Sugestões Similares Encontradas',
   	stateful: true,
    frame: false,
    collapsible: true,
    
    columns: [{
        text: 'Decisao',
        flex: 1,
        sortable: true,
        dataIndex: 'decisao',
        field: {
            xtype: 'textfield'
        }
    },{
        text: 'Similaridade',
        width: 100,
        sortable: true,
        dataIndex: 'similaridade',
        field: {
            xtype: 'textfield'
        }
    }]
});