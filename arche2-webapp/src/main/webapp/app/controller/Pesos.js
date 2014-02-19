Ext.define('Arche2.controller.Pesos', {
    extend: 'Ext.app.Controller',
 
    stores: ['Pesos'],
 
    models: ['Peso'],
 
    views: ['peso.Grid'],
 
    refs: [{
            ref: 'pesoGrid',
            selector: 'grid#pesogrid'
        }],
 
    init: function() {
        this.control({
            'pesogrid button[action=adicionar]': {
                click: this.adicionar
            },
            'pesogrid button[action=deletar]': {
                click: this.deletar
            }
        });
    },
 
    adicionar: function(grid, record) {
    	var store = this.getPesosStore();
    	var peso = Ext.create('Arche2.model.Peso');
    	
    	store.insert(0, peso);
    	
        pesoRowEditing.startEdit(0, 0);
    },
 
    deletar: function(button) {
    	var grid = this.getPesoGrid();
        var record = grid.getSelectionModel().getSelection();
        var store = this.getPesosStore();
    	
    	if (record) {
            store.remove(record);
        }
    	
    }
});