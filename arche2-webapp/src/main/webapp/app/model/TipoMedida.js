Ext.define('Arche2.model.TipoMedida', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        useNull: true
    }, 'nome', 'pai', 'subcaracteristica']
});