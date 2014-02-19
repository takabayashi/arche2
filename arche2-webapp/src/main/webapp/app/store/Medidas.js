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
    	
    	var htmlTexto = getMessage('arche2.default.resumo');
    	
    	if(medidas.length > 0){
    		htmlTexto = "<h1>" + Ext.getCmp('caracteristica').getValue() + "</h1>";
    		htmlTexto += "<h2>" + Ext.getCmp('subcaracteristica').getValue() + "</h2>";
    		
    		var funcao = Ext.getCmp('funcao').getValue();
    		
    		for(var i=0; i<medidas.length; i++){
    			htmlTexto += '<p>' + getMessage('arche2.template.resumo',[medidas[i].data.tipo, medidas[i].data.valor, medidas[i].data.entidade, funcao] ) + '</p>';
    		}
    	}
    	
		Ext.getCmp('resumo').update(htmlTexto);
    }
});