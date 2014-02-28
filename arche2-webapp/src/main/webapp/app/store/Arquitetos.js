Ext.define('Arche2.store.Arquitetos', {
    extend: 'Ext.data.Store',
    model: 'Arche2.model.Arquiteto',
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
                create: 'rest/arquiteto/create',
                read: 'rest/arquiteto/all',
                update: 'rest/arquiteto/update',
                destroy: 'rest/arquiteto/delete',
            },
            reader: {
                type: 'json',
                root: 'arquitetos',
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
                
                console.log(name, Ext.String.format("{0} arquiteto: {1} id {2}", name, record.get('nome'), record.get('id')));
            }
        }
    });