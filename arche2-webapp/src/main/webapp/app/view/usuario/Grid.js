Ext.define('Arche2.view.usuario.Grid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.usuariogrid',
 
    requires: ['Ext.toolbar.Paging'],
 
    iconCls: 'icon-grid',
 
    title : 'Usuarios',
    store: 'Usuarios',
 
    columns: [{
        header: "NOME",
        width: 170,
        flex:1,
        dataIndex: 'nome'
    },{
        header: "sobrenome",
        width: 160,
        flex:1,
        dataIndex: 'sobrenome'
    },{
        header: "EMAIL",
        width: 170,
        flex:1,
        dataIndex: 'email'
    }],
 
    initComponent: function() {
 
        this.dockedItems = [{
            xtype: 'toolbar',
            items: [{
                iconCls: 'icon-save',
                itemId: 'add',
                text: 'Adicionar',
                action: 'add'
            },{
                iconCls: 'icon-delete',
                text: 'Excluir',
                action: 'delete'
            }]
        },
        {
            xtype: 'pagingtoolbar',
            dock:'top',
            store: 'Usuarios',
            displayInfo: true,
            displayMsg: 'Mostrando Usuarios {0} - {1} de {2}',
            emptyMsg: "Nenhum usuario encontrado."
        }];
 
        this.callParent(arguments);
    }
});