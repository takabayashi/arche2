Ext.define('Arche2.controller.Medidas', {
    extend: 'Ext.app.Controller',
 
    stores: ['Medidas'],
 
    models: ['Medida'],
 
    views: ['medida.Grid'],
 
    refs: [{
            ref: 'medidaGrid',
            selector: 'grid#medidagrid'
        }],
 
    init: function() {
        this.control({
            'medidagrid button[action=add]': {
                click: this.addMedida
            },
            'medidagrid button[action=delete]': {
                click: this.deleteMedida
            }
        });
    },
 
    addMedida: function(grid, record) {
    	var store = this.getMedidasStore();
    	var medida = Ext.create('Arche2.model.Medida');
    	
    	store.insert(0, medida);
    	
        medidaRowEditing.startEdit(0, 0);
    },
 
    deleteMedida: function(button) {
    	var grid = this.getMedidaGrid();
        var record = grid.getSelectionModel().getSelection();
        var store = this.getMedidasStore();
    	
    	if (record) {
            store.remove(record);
        }
    	
    }
});