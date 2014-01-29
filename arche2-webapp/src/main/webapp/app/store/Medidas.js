Ext.define('Arche2.store.Medidas', {
    extend: 'Ext.data.Store',
    model: 'Arche2.model.Medida',
    autoLoad: true,
    pageSize: 35,
    autoLoad: {start: 0, limit: 35},
 
    proxy: {
        type: 'ajax',
        api: {
            create: 'rest/medida/create',
            read: 'rest/medida/all',
            update: 'rest/medida/update',
            destroy: 'rest/medida/delete',
        },
        reader: {
            type: 'json',
            root: 'medidas',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'medidas'
        }
    }
});