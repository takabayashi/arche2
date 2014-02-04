Ext.define('Arche2.controller.Caracteristicas', {
    extend: 'Ext.app.Controller',
 
    stores: ['Caracteristicas'],
 
    models: ['Caracteristica'],
 
    views: ['caracteristica.Grid'],
 
    refs: [{
            ref: 'caracteristicaGrid',
            selector: 'grid#caracteristicagrid'
        }],
 
    init: function() {
        this.control({
            'caracteristicagrid button[action=add]': {
                click: this.addCaracteristica
            },
            'caracteristicagrid button[action=delete]': {
                click: this.deleteCaracteristica
            }
        });
    },
 
    addCaracteristica: function(grid, record) {
    	var store = this.getCaracteristicasStore();
    	var caracteristica = Ext.create('Arche2.model.Caracteristica');
    	
    	store.insert(0, caracteristica);
    	
        caracteristicaRowEditing.startEdit(0, 0);
    },
 
    deleteCaracteristica: function(button) {
    	var grid = this.getCaracteristicaGrid();
        var record = grid.getSelectionModel().getSelection();
        var store = this.getCaracteristicasStore();
    	
    	if (record) {
            store.remove(record);
        }
    	
    }
});