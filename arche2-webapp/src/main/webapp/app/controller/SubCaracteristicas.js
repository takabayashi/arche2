Ext.define('Arche2.controller.SubCaracteristicas', {
    extend: 'Ext.app.Controller',
 
    stores: ['SubCaracteristicas'],
 
    models: ['SubCaracteristica'],
 
    views: ['subcaracteristica.Grid'],
 
    refs: [{
            ref: 'subCaracteristicaGrid',
            selector: 'grid#subcaracteristicagrid'
        }],
 
    init: function() {
        this.control({
            'subcaracteristicagrid button[action=add]': {
                click: this.addCaracteristica
            },
            'subcaracteristicagrid button[action=delete]': {
                click: this.deleteCaracteristica
            }
        });
    },
 
    addCaracteristica: function(grid, record) {
    	var store = this.getSubCaracteristicasStore();
    	var subCaracteristica = Ext.create('Arche2.model.SubCaracteristica');
    	
    	store.insert(0, subCaracteristica);
    	
        subCaracteristicaRowEditing.startEdit(0, 0);
    },
 
    deleteCaracteristica: function(button) {
    	var grid = this.getSubCaracteristicaGrid();
        var record = grid.getSelectionModel().getSelection();
        var store = this.getSubCaracteristicasStore();
    	
    	if (record) {
            store.remove(record);
        }
    	
    }
});