Ext.define('Arche2.store.Usuarios', {
    extend: 'Ext.data.Store',
    model: 'Arche2.model.Usuario',
    autoLoad: true,
    pageSize: 35,
    autoLoad: {start: 0, limit: 35},
    
    proxy: {
    	headers: { 'Content-Type': 'application/json;charset=utf-8', 'Accept': 'application/json'},
        type: 'ajax',
        paramsAsJson: true,
        
        api: {
            create: 'rest/usuario/create',
            read: 'rest/usuario/all',
            update: 'rest/usuario/update',
            destroy: 'rest/usuario/delete',
        },
        reader: {
            type: 'json',
            root: 'usuarios',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }
});