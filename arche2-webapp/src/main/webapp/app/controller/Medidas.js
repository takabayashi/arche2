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
 
    addMedida: function(record) {
    	var grid = this.getMedidaGrid();
    	var medida = Ext.create('Arche2.model.Medida');
    	grid.store.insert(0, medida);
    	
        medidaRowEditing.startEdit(0, 0);
    },
 
    deleteMedida: function(button) {
    	var grid = this.getMedidaGrid();
        var record = grid.getSelectionModel().getSelection();
        
    	if (record) {
            grid.store.remove(record);
        }
    	
    }
});