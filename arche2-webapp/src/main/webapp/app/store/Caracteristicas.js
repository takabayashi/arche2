Ext.define('Arche2.store.Caracteristicas', {
    extend: 'Ext.data.Store',
    model: 'Arche2.model.Caracteristica',
    autoLoad: true,
    autoSync: true,
    pageSize: 10,
    autoLoad: {start: 0, limit: 10},
        proxy: {
        	headers: { 'Content-Type': 'application/json;charset=utf-8', 'Accept': 'application/json'},
            type: 'ajax',
            paramsAsJson: true,
            
            api: {
                create: 'rest/caracteristica/create',
                read: 'rest/caracteristica/all',
                update: 'rest/caracteristica/update',
                destroy: 'rest/caracteristica/delete',
            },
            reader: {
                type: 'json',
                root: 'caracteristicas',
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
                
                if(operation.action === 'create'){
                	var returnObj = JSON.parse(operation.response.responseText);
                    record.set('id', returnObj['id']);
                }
                
                Ext.Msg.alert(name, Ext.String.format("{0} caracteristica: {1} id {2}", name, record.get('nome'), record.get('id')));
            }
        }
    });