Ext.define('Arche2.view.caso.SugestaoGrid' ,{
	extend: 'Ext.grid.Panel',
	alias : 'widget.sugestaogrid',
   	requires: ['Ext.toolbar.Paging'],
   	store: 'Sugestoes',
   	title: 'Sugestão de Casos Similares Encontrados',
   	stateful: true,
    frame: false,
    collapsible: true,
    
    columns: [{
        name : 'casoId',
        fieldLabel: 'casoId',
        hidden:true,
        field: {
            xtype: 'textfield'
        }
    },{
        text: 'Casos Similares',
        flex: 1,
        sortable: true,
        dataIndex: 'casoResumo',
        field: {
            xtype: 'textfield'
        }
    },{
        text: '% Similaridade',
        width: 100,
        sortable: true,
        dataIndex: 'similaridade',
        field: {
            xtype: 'textfield'
        }
    }]
});