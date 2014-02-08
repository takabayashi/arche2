Ext.define('Arche2.controller.Casos', {
    extend: 'Ext.app.Controller',
 
    stores: ['Casos'],
 
    models: ['Caso'],
 
    views: ['decisao.Formulario', 'geral.Formulario'],
 
    refs: [{
            ref: 'decisaoForm',
            selector: 'form#decisaoform'
        }],
 
    init: function() {
        this.control({
            'decisaoform button[action=addNovoCaso]': {
                click: this.addNovoCaso
            }
        });
    },
 
    addNovoCaso: function(button) {
    	var decisao = {};
    	decisao.tipo = Ext.getCmp('tipo').getValue();
    	decisao.resumo = Ext.getCmp('resumoDecisao').getValue();
    	decisao.estado = Ext.getCmp('estado').getValue();
    	decisao.racional = Ext.getCmp('racional').getValue();
    	decisao.riscos = Ext.getCmp('riscos').getValue();
    	decisao.escopo = Ext.getCmp('escopo').getValue();
    	decisao.custo = Ext.getCmp('custo').getValue();
    	decisao.rnf = window.rnf;
    	
    	var novoCaso = {};
    	novoCaso.descricaoProblema = window.rnf;
    	novoCaso.descricaoSolucao = decisao;
    	
    	console.log(JSON.stringify(novoCaso));
    	
    	//var store = this.getCasosStore();
    	//var caso = Ext.create('Arche2.model.Caso');
    	
    	//var decisao = Ext.create('Arche2.model.Decisao');
    	//caso.set('decisao', decisao);
    	
    	//store.add(caso);
    	
    	/**Ext.Ajax.request({
    	    url: 'rest/caso/create',
    	    headers: { 'Content-Type': 'application/json;charset=utf-8', 'Accept': 'application/json'},
            params: novoCaso,
            
    	    success: function(response, opts) {
    	        var obj = Ext.decode(response.responseText);
    	        console.dir(obj);
    	    },
    	    failure: function(response, opts) {
    	        console.log('server-side failure with status code ' + response.status);
    	    }
    	});*/
    }
});