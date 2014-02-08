Ext.define('Arche2.store.Casos', {
    extend: 'Ext.data.Store',
    model: 'Arche2.model.Caso',
    proxy: {
    	headers: { 'Content-Type': 'application/json;charset=utf-8', 'Accept': 'application/json'},
        type: 'ajax',
        paramsAsJson: true,
        
        api: {
            create: 'rest/caso/create',
            all: 'rest/caso/all',
            update: 'rest/caso/update',
            destroy: 'rest/caso/delete',
        },
        reader: {
            type: 'json',
            root: 'casos',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    },
    listeners: {
        write: function(store, operation){
            Ext.Msg.alert("Caso", "Salvo com sucesso!!!!");
        }
    }
    });