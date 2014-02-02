Ext.define('Arche2.model.Medida', {
	extend: 'Ext.data.Model',

	fields: [
	    {name: 'id', type: 'long'},
		{name: 'nome', type: 'string'},
		{name: 'entidade', type: 'string'},
		{name: 'valor', type: 'float'},
		{name: 'metodoId', type: 'boolean'}
	]
	
	//associations: [{ type: 'hasOne', model: 'Metodo', name: 'metodoId' }]
});