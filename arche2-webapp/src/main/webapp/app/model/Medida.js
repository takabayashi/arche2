Ext.define('Arche2.model.Medida', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        useNull: true
    }, 'tipo', 'entidade', 'metodo', 'valor'],
    validations: [{
        type: 'length',
        field: 'tipo',
        min: 1
    }, {
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