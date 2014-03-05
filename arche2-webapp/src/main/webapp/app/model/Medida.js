Ext.define('Arche2.model.Medida', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        useNull: true
    }, 'entidade', 'metodo', 'valor'],
    validations: [{
        type: 'length',
        field: 'entidade',
        min: 1
    }, {
        type: 'length',
        field: 'metodo',
        min: 1
    },{
        type: 'length',
        field: 'valor',
        min: 1
    }]
});