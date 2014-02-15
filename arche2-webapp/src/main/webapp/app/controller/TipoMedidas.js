Ext.define('Arche2.controller.TipoMedidas', {
    extend: 'Ext.app.Controller',
 
    stores: ['TipoMedidas'],
 
    models: ['TipoMedida'],
 
    views: ['tipomedida.Grid'],
 
    refs: [{
            ref: 'tipoMedidaGrid',
            selector: 'grid#tipomedidagrid'
        }],
 
    init: function() {
        this.control({
            'tipomedidagrid button[action=adicionar]': {
                click: this.adicionar
            },
            'tipomedidagrid button[action=deletar]': {
                click: this.deletar
            }
        });
    },
 
    adicionar: function(grid, record) {
    	var store = this.getTipoMedidasStore();
    	var tipoMedida = Ext.create('Arche2.model.TipoMedida');
    	
    	store.insert(0, tipoMedida);
    	
        tipoMedidaRowEditing.startEdit(0, 0);
    },
 
    deletar: function(button) {
    	var grid = this.getTipoMedidaGrid();
        var record = grid.getSelectionModel().getSelection();
        var store = this.getTipoMedidasStore();
    	
    	if (record) {
            store.remove(record);
        }
    	
    }
});