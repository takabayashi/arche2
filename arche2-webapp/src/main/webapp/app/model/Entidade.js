Ext.define('Arche2.model.Entidade', {
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