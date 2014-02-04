Ext.define('Arche2.controller.Entidades', {
    extend: 'Ext.app.Controller',
 
    stores: ['Entidades'],
 
    models: ['Entidade'],
 
    views: ['entidade.Grid'],
 
    refs: [{
            ref: 'entidadeGrid',
            selector: 'grid'
        }],
 
    init: function() {
        this.control({
            'entidadegrid button[action=add]': {
                click: this.addEntidade
            },
            'entidadegrid button[action=delete]': {
                click: this.deleteEntidade
            }
        });
    },
 
    addEntidade: function(grid, record) {
    	var store = this.getEntidadesStore();
    	var entidade = Ext.create('Arche2.model.Entidade');
    	
    	store.insert(0, entidade);
    	
        entidadeRowEditing.startEdit(0, 0);
    },
 
    deleteEntidade: function(button) {
    	var grid = this.getEntidadeGrid();
        var record = grid.getSelectionModel().getSelection()[0];
        var store = this.getEntidadesStore();
    	
    	if (record) {
            store.remove(record);
        }
    	
    }
});