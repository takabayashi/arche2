Ext.define('Arche2.model.Caso', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        useNull: true
    }, 'dataCadastro', 'dataUltimaAlteracao'],

    hasOne: {model: 'Decisao', name: 'decisao'},
    hasOne: {model: 'RNF', name: 'rnf'}
});