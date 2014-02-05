Ext.define('Arche2.controller.Sugestoes', {
    extend: 'Ext.app.Controller',
 
    stores: ['Sugestoes'],
 
    models: ['Sugestao'],
 
    views: ['sugestao.Grid'],
 
    refs: [{
            ref: 'sugestaoGrid',
            selector: 'grid#sugestaogrid'
        }],
 
    init: function() {
        this.control({
            'sugestaogrid dataview': {
            	itemdblclick: this.loadSugestao
            }
        });
    },
 
    loadSugestao: function(grid, record) {
    	console.log('sugestao selecionada...');
    }
});