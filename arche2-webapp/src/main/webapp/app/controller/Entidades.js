Ext.define('Arche2.controller.Entidades', {
    extend: 'Ext.app.Controller',
 
    stores: ['Entidades'],
 
    models: ['Entidade'],
 
    views: ['entidade.Grid'],
 
    refs: [{
            ref: 'entidadeGrid',
            selector: 'grid#entidadegrid'
        }],
 
    init: function() {
        this.control({
            'entidadegrid button[action=adicionar]': {
                click: this.adicionar
            },
            'entidadegrid button[action=deletar]': {
                click: this.deletar
            }
        });
    },
 
    adicionar: function(grid, record) {
    	var store = this.getEntidadesStore();
    	var entidade = Ext.create('Arche2.model.Entidade');
    	
    	store.insert(0, entidade);
    	
        entidadeRowEditing.startEdit(0, 0);
    },
 
    deletar: function(button) {
    	var grid = this.getEntidadeGrid();
        var record = grid.getSelectionModel().getSelection();
        var store = this.getEntidadesStore();
    	
    	if (record) {
            store.remove(record);
        }
    	
    }
});