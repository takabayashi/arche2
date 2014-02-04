Ext.define('Arche2.controller.Metodos', {
    extend: 'Ext.app.Controller',
 
    stores: ['Metodos'],
 
    models: ['Metodo'],
 
    views: ['metodo.Grid'],
 
    refs: [{
            ref: 'metodoGrid',
            selector: 'grid#metodogrid'
        }],
 
    init: function() {
        this.control({
            'metodogrid button[action=add]': {
                click: this.addMetodo
            },
            'metodogrid button[action=delete]': {
                click: this.deleteMetodo
            }
        });
    },
 
    addMetodo: function(grid, record) {
    	var store = this.getMetodosStore();
    	var metodo = Ext.create('Arche2.model.Metodo');
    	
    	store.insert(0, metodo);
    	
        metodoRowEditing.startEdit(0, 0);
    },
 
    deleteMetodo: function(button) {
    	var grid = this.getMetodoGrid();
        var record = grid.getSelectionModel().getSelection();
        var store = this.getMetodosStore();
    	
    	if (record) {
            store.remove(record);
        }
    	
    }
});