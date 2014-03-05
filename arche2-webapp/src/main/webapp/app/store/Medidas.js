Ext.define('Arche2.store.Medidas', {
    extend: 'Ext.data.ArrayStore',
    model: 'Arche2.model.Medida',
    data: [],
    listeners: {
        update: function(store, operation, eOpts){
        	var medidas = store.data.items;
        	this.createResumoText(medidas);
        },
		remove: function(store, operation, eOpts){
		    var medidas = store.data.items;
        	this.createResumoText(medidas);
        }
    },
    createResumoText: function(medidas){
    	Ext.getCmp('resumo').update(_app.getController("Casos").prepareResumoFromMedidasGrid(medidas));
    }
});