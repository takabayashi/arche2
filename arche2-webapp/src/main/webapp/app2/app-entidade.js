Ext.require(['Ext.data.*', 'Ext.grid.*']);

Ext.define('Entidade', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        useNull: true
    }, 'nome'],
    validations: [{
        type: 'length',
        field: 'nome',
        min: 1
    }]
});

Ext.onReady(function(){

    var store = Ext.create('Ext.data.Store', {
        autoLoad: true,
        autoSync: true,
        model: 'Entidade',
        proxy: {
        	headers: { 'Content-Type': 'application/json;charset=utf-8', 'Accept': 'application/json'},
            type: 'ajax',
            paramsAsJson: true,
            
            api: {
                create: 'rest/entidade/create',
                read: 'rest/entidade/all',
                update: 'rest/entidade/update',
                destroy: 'rest/entidade/delete',
            },
            reader: {
                type: 'json',
                root: 'entidades',
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
                    
                Ext.Msg.alert(name, Ext.String.format("{0} entidade: {1}", name, record.get('nome')));
            }
        }
    });
    
    var rowEditing = Ext.create('Ext.grid.plugin.RowEditing');
    
    var grid = Ext.create('Ext.grid.Panel', {
        renderTo: 'entidadePanel',
        plugins: [rowEditing],
        width: 400,
        height: 200,
        frame: false,
        title: 'Entidades de Medida',
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
        }],
        dockedItems: [{
            xtype: 'toolbar',
            items: [{
                text: 'Adcionar',
                iconCls: 'icon-add',
                handler: function(){
                    store.insert(0, new Entidade());
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