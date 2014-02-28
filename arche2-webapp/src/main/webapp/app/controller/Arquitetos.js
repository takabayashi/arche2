Ext.define('Arche2.controller.Arquitetos', {
    extend: 'Ext.app.Controller',
 
    stores: ['Arquitetos'],
 
    models: ['Arquiteto'],
 
    views: ['arquiteto.Grid'],
 
    refs: [{
            ref: 'arquitetoGrid',
            selector: 'grid#arquitetogrid'
        }],
 
    init: function() {
        this.control({
            'arquitetogrid button[action=adicionar]': {
                click: this.adicionar
            },
            'arquitetogrid button[action=deletar]': {
                click: this.deletar
            }
        });
    },
 
    adicionar: function(grid, record) {
    	var store = this.getArquitetosStore();
    	var arquiteto = Ext.create('Arche2.model.Arquiteto');
    	
    	store.insert(0, arquiteto);
    	
        arquitetoRowEditing.startEdit(0, 0);
    },
 
    deletar: function(button) {
    	var grid = this.getArquitetoGrid();
        var record = grid.getSelectionModel().getSelection();
        var store = this.getArquitetosStore();
    	
    	if (record) {
            store.remove(record);
        }
    	
    }
});