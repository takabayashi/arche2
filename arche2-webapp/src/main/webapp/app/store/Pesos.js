Ext.define('Arche2.store.Pesos', {
    extend: 'Ext.data.Store',
    model: 'Arche2.model.Peso',
    autoLoad: true,
    autoSync: true,
    sorters: {
		property : 'nome',
        direction: 'ASC'
	},
        proxy: {
        	headers: { 'Content-Type': 'application/json;charset=utf-8', 'Accept': 'application/json'},
            type: 'ajax',
            paramsAsJson: true,
            
            api: {
                create: 'rest/peso/create',
                read: 'rest/peso/all',
                update: 'rest/peso/update',
                destroy: 'rest/peso/delete',
            },
            reader: {
                type: 'json',
                root: 'pesos',
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
                
                console.log(name, Ext.String.format("{0} peso: {1} id {2}", name, record.get('nome'), record.get('id')));
            }
        }
    });