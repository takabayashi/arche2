Ext.define('Arche2.model.Metodo', {
	extend: 'Ext.data.Model',

	fields: [
	    {name: 'id', type: 'long'},     
		{name: 'descricao', type: 'string' },
	],

	belongsTo: 'Medida'
});