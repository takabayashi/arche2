Ext.define('Arche2.model.Caracteristica', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        useNull: true
    }, 'nome'],
    validations: [{
        type: 'length',
        field: 'nome',
        min: 1
    }]
});