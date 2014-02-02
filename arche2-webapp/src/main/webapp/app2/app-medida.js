Ext.require(['Ext.data.*', 'Ext.grid.*','Ext.toolbar.Paging']);

Ext.define('Medida', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        useNull: true
    }, 'nome', 'entidade', 'metodo', 'valor'],
    validations: [{
        type: 'length',
        field: 'nome',
        min: 1
    }, {
        type: 'length',
        field: 'entidade',
        min: 1
    }, {
        type: 'length',
        field: 'metodo',
        min: 1
    },{
        type: 'length',
        field: 'valor',
        min: 1
    }]
});

Ext.onReady(function(){

    var store = Ext.create('Ext.data.Store', {
        autoLoad: true,
        autoSync: true,
        model: 'Medida',
        proxy: {
        	headers: { 'Content-Type': 'application/json;charset=utf-8', 'Accept': 'application/json'},
            type: 'ajax',
            paramsAsJson: true,
            
            api: {
                create: 'rest/medida/create',
                read: 'rest/medida/all',
                update: 'rest/medida/update',
                destroy: 'rest/medida/delete',
            },
            reader: {
                type: 'json',
                root: 'medidas',
                successProperty: 'success'
            },
            writer: {
                type: 'json',
                writeAllFields: true
            }
        },
        listeners: {
            write: function(store, operation){
            	var record = operation.records[0], name = Ext.String.capitalize(operation.action);
                
                Ext.Msg.alert(name, Ext.String.format("{0} medida: {1}", name, record.get('nome')));
                
            }
        }
    });
    
    var rowEditing = Ext.create('Ext.grid.plugin.RowEditing');
    
    var grid = Ext.create('Ext.grid.Panel', {
        renderTo: 'medidaPanel',
        plugins: [rowEditing],
        width: 500,
        height: 200,
        frame: false,
        title: 'Medidas de Comparação',
        store: store,
        iconCls: 'icon-grid',
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
            width: 80,
            sortable: true,
            dataIndex: 'entidade',
            field: {
                xtype: 'textfield'
            }
        }, {
            header: 'Método',
            width: 120,
            sortable: true,
            dataIndex: 'metodo',
            field: {
                xtype: 'textfield'
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
                handler: function(){
                    store.insert(0, new Medida());
                    rowEditing.startEdit(0, 0);
                }
            }, '-', {
                text: 'Excluir',
                iconCls: 'icon-delete',
                handler: function(){
                    var selection = grid.getView().getSelectionModel().getSelection()[0];
                    if (selection) {
                        store.remove(selection);
                    }
                }
            }]
        }]
    });
});