Ext.define('Arche2.controller.Usuarios', {
    extend: 'Ext.app.Controller',
 
    stores: ['Usuarios'],
 
    models: ['Usuario'],
 
    views: ['usuario.Formulario', 'usuario.Grid'],
 
    refs: [{
            ref: 'usuarioPanel',
            selector: 'panel'
        },{
            ref: 'usuarioGrid',
            selector: 'grid'
        }
    ],
 
    init: function() {
        this.control({
            'usuariogrid dataview': {
                itemdblclick: this.editarUsuario
            },
            'usuariogrid button[action=add]': {
                click: this.newUsuario
            },
            'usuariogrid button[action=delete]': {
                click: this.deleteUsuario
            },
            'usuarioform button[action=save]': {
                click: this.updateUsuario
            }
            
        });
    },
 
    editarUsuario: function(grid, record) {
        var edit = Ext.create('Arche2.view.usuario.Formulario').show();
 
        if(record){
            edit.down('form').loadRecord(record);
        }
    },
    
    newUsuario: function(grid, record) {
        Ext.create('Arche2.view.usuario.Formulario').show();
    },
 
    updateUsuario: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
 
        var novo = false;

        if (values.id > 0){
            record.set(values);
        } else{
            record = Ext.create('Arche2.model.Usuario');
            record.set(values);
            this.getUsuariosStore().add(record);
            novo = true;
        }
 
        win.close();
        this.getUsuariosStore().sync();
 
        if (novo){ //faz reload para atualziar
            this.getUsuariosStore().load();
        }
    },
 
    deleteUsuario: function(button) {
 
        var grid = this.getUsuarioGrid(),
        record = grid.getSelectionModel().getSelection(),
        store = this.getUsuariosStore();
 
        store.remove(record);
        this.getUsuariosStore().sync();
 
        //faz reload para atualziar
        this.getUsuariosStore().load();
    }
});