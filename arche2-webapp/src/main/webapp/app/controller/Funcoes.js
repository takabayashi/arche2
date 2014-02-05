Ext.define('Arche2.controller.Funcoes', {
    extend: 'Ext.app.Controller',
 
    stores: ['Funcoes'],
 
    models: ['Funcao'],
 
    views: ['funcao.Grid'],
 
    refs: [{
            ref: 'funcaoGrid',
            selector: 'grid#funcaogrid'
        }],
 
    init: function() {
        this.control({
            'funcaogrid button[action=add]': {
                click: this.addFuncao
            },
            'funcaogrid button[action=delete]': {
                click: this.deleteFuncao
            }
        });
    },
 
    addFuncao: function(grid, record) {
    	var store = this.getFuncoesStore();
    	var funcao = Ext.create('Arche2.model.Funcao');
    	
    	store.insert(0, funcao);
    	
        funcaoRowEditing.startEdit(0, 0);
    },
 
    deleteFuncao: function(button) {
    	var grid = this.getFuncaoGrid();
        var record = grid.getSelectionModel().getSelection();
        var store = this.getFuncoesStore();
    	
    	if (record) {
            store.remove(record);
        }
    	
    }
});