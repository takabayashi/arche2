Ext.define('Arche2.store.TipoMedidas', {
    extend: 'Ext.data.Store',
    model: 'Arche2.model.TipoMedida',
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
            create: 'rest/tipomedida/create',
            read: 'rest/tipomedida/all',
            update: 'rest/tipomedida/update',
            destroy: 'rest/tipomedida/delete',
        },
        reader: {
            type: 'json',
            root: 'tipoMedidas',
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
            
            console.log(name, Ext.String.format("{0} tipomedida: {1} id {2}", name, record.get('nome'), record.get('id')));
        }
    }
});