Ext.define('Arche2.model.Usuario', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        useNull: true
    }, 'nome', 'sobrenome', 'email']
});