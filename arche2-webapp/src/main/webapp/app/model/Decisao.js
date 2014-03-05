Ext.define('Arche2.model.Decisao', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        useNull: true
    }, 'tipo', 'resumoDecisao', 'estado', 'racional', 'riscos', 'escopo', 'custo']
});