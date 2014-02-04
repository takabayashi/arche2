Ext.define('Arche2.store.SubCaracteristicas', {
    extend: 'Ext.data.Store',
    model: 'Arche2.model.SubCaracteristica',
    autoLoad: true,
    autoSync: true,
    pageSize: 35,
    autoLoad: {start: 0, limit: 35},
        proxy: {
        	headers: { 'Content-Type': 'application/json;charset=utf-8', 'Accept': 'application/json'},
            type: 'ajax',
            paramsAsJson: true,
            
            api: {
                create: 'rest/subcaracteristica/create',
                read: 'rest/subcaracteristica/all',
                update: 'rest/subcaracteristica/update',
                destroy: 'rest/subcaracteristica/delete',
            },
            reader: {
                type: 'json',
                root: 'subCaracteristicas',
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
                
                Ext.Msg.alert(name, Ext.String.format("{0} subcaracteristica: {1} id {2}", name, record.get('nome'), record.get('id')));
            }
        }
    });