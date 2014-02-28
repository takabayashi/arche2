Ext.define('Arche2.store.Metodos', {
    extend: 'Ext.data.Store',
    model: 'Arche2.model.Metodo',
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
                
                if(operation.action === 'create'){
                	var returnObj = JSON.parse(operation.response.responseText);
                    record.set('id', returnObj['id']);
                }
                
                console.log(name, Ext.String.format("{0} metodo: {1} id {2}", name, record.get('nome'), record.get('id')));
            }
        }
    });