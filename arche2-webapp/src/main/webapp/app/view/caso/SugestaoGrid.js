Ext.define('Arche2.view.caso.SugestaoGrid' ,{
	extend: 'Ext.grid.Panel',
	alias : 'widget.sugestaogrid',
   	requires: ['Ext.toolbar.Paging'],
   	store: 'Sugestoes',
   	title: 'Sugestões de Soluções que podem ser utilizadas',
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
        text: 'Similaridade',
        width: 100,
        sortable: true,
        dataIndex: 'similaridade',
        field: {
            xtype: 'textfield'
        }
    },{
        text: 'Tipo de solução',
        width: 200,
        sortable: true,
        dataIndex: 'tipoSolucao',
        field: {
            xtype: 'textfield'
        }
    },{
        text: 'Estado da solução',
        width: 150,
        sortable: true,
        dataIndex: 'estadoSolucao',
        field: {
            xtype: 'textfield'
        }
    },{
        text: 'Resumo da Solução',
        flex: 1,
        sortable: true,
        dataIndex: 'casoResumo',
        field: {
            xtype: 'textfield'
        }
    },{
        text: 'Data de Cadastro',
        width: 100,
        sortable: true,
        dataIndex: 'casoDataCadastro',
        field: {
            xtype: 'textfield'
        }
    }]
});