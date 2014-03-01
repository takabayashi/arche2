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
    		htmlTexto = "<h3> O nível de " + Ext.getCmp('caracteristica').getValue() + " do sistema em relação a " + Ext.getCmp('subcaracteristica').getValue() + " deve ser:</h3>";
    		
    		htmlTexto += "<p>" + getMessage('arche2.template.resumo', [Ext.getCmp('tipoMedida').getValue()])  + "</p>";
    		
    		htmlTexto += "<p>";
    		
    		for(var i=0; i<medidas.length; i++){
    			
    			if(i>0 && i<medidas.length){
    				htmlTexto += " " + Ext.getCmp('funcao').getValue() + " ";
    			}
    			
    			htmlTexto += getMessage('arche2.template.resumo.medidas',[medidas[i].data.entidade, medidas[i].data.metodo, medidas[i].data.valor] );
    		}
    		
    		htmlTexto += "</p>";
    	}
    	
		Ext.getCmp('resumo').update(htmlTexto);
    }
});