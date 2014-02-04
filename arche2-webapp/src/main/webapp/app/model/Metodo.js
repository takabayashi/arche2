Ext.define('Arche2.model.Metodo', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        useNull: true
    }, 'nome', 'algoritmo'],
    validations: [{
        type: 'length',
        field: 'nome',
        min: 1
    },{
        type: 'length',
        field: 'algoritmo',
        min: 1
    }]
});