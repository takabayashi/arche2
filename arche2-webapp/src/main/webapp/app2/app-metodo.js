Ext.require(['Ext.data.*', 'Ext.grid.*']);

Ext.define('Metodo', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        useNull: true
    }, 'nome', 'algoritmo'],
    validations: [{
        type: 'length',
        field: 'nome',
        min: 1
    },{
        type: 'length',
        field: 'algoritmo',
        min: 1
    }]
});

Ext.onReady(function(){

    var store = Ext.create('Ext.data.Store', {
        autoLoad: true,
        autoSync: true,
        model: 'Metodo',
        proxy: {
        	headers: { 'Content-Type': 'application/json;charset=utf-8', 'Accept': 'application/json'},
            type: 'ajax',
            paramsAsJson: true,
            
            api: {
                create: 'rest/metodo/create',
                read: 'rest/metodo/all',
                update: 'rest/metodo/update',
                destroy: 'rest/metodo/delete',
            },
            reader: {
                type: 'json',
                root: 'metodos',
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
                    
                Ext.Msg.alert(name, Ext.String.format("{0} metodo: {1}", name, record.get('nome')));
            }
        }
    });
    
    var rowEditing = Ext.create('Ext.grid.plugin.RowEditing');
    
    var grid = Ext.create('Ext.grid.Panel', {
        renderTo: 'metodoPanel',
        plugins: [rowEditing],
        width: 400,
        height: 200,
        frame: false,
        title: 'Metodos de Comparação',
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
        },{
            text: 'Algoritmo',
            flex: 1,
            sortable: false,
            dataIndex: 'algoritmo',
            field: {
                xtype: 'textareafield'
            }
        }],
        dockedItems: [{
            xtype: 'toolbar',
            items: [{
                text: 'Adcionar',
                iconCls: 'icon-add',
                handler: function(){
                    store.insert(0, new Metodo());
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