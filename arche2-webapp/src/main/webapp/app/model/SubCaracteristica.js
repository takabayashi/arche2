Ext.define('Arche2.model.SubCaracteristica', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        useNull: true
    }, 'nome', 'caracteristica'],
    validations: [{
        type: 'length',
        field: 'nome',
        min: 1
    }]
});