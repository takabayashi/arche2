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
    	var funcao = Ext.getCmp('funcao').getValue();
    	
    	var resumoHtml = '';
		
		for(var i=0; i<medidas.length; i++){
			resumoHtml += '<p>' + getMessage('arche2.template.resumo',[medidas[i].data.nome, medidas[i].data.valor, medidas[i].data.entidade, funcao] ) + '</p>';
		}
		
		Ext.getCmp('resumo').update(resumoHtml);
    }
});