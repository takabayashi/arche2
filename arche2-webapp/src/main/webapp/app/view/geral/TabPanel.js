Ext.define('Arche2.view.geral.TabPanel' ,{
	extend: 'Ext.tab.Panel',
	alias : 'widget.geraltabpanel',
	requires: [
			'Arche2.view.usuario.Grid',
			'Arche2.view.usuario.Formulario',
			'Arche2.view.entidade.Grid',
			'Arche2.view.metodo.Grid',
			'Arche2.view.caracteristica.Grid',
			'Arche2.view.subcaracteristica.Grid',
			'Arche2.view.funcao.Grid',
			'Arche2.view.tipomedida.Grid',
			'Arche2.view.tipomedida.Grid'
	           ],
	activeTab: 0,

    items: [{
        title: 'Entidades de medidas',
        items: [{
        	xtype: 'entidadegrid',
        	itemId: 'entidadegrid'
        }]
    },{
        title: 'Métodos de medidas',
        items: [{
        	xtype: 'metodogrid',
        	itemId: 'metodogrid'
        }]
    },{
        title: 'Caracteristicas',
        items: [{
        	xtype: 'caracteristicagrid',
        	itemId: 'caracteristicagrid'
        }]
    },{
        title: 'SubCaracteristicas',
        items: [{
        	xtype: 'subcaracteristicagrid',
        	itemId: 'subcaracteristicagrid'
        }]
    },{
        title: 'Funções de Medição',
        items: [{
        	xtype: 'funcaogrid',
        	itemId: 'funcaogrid'
        }]
    },{
        title: 'Tipos de Medidas',
        items: [{
        	xtype: 'tipomedidagrid',
        	itemId: 'tipomedidagrid'
        }]
    },{
        title: 'Pesos de Similaridade',
        items: [{
        	xtype: 'pesogrid',
        	itemId: 'pesogrid'
        }]
    },{
    	title: 'Controles Gerais',
        items: [{
        	xtype: 'button',
        	text: 'Resetar Casos',
            handler: function(){
            	Ext.Ajax.request({
            	    url: 'rest/caso/deleteAll',
            	    headers: { 'Content-Type': 'application/json;charset=utf-8', 'Accept': 'application/json'},
                    method: 'GET',
                    
            	    success: function(response, opts) {
            	    	Ext.Msg.alert('Sucesso', 'Todos os casos foram exlcuidos da Base...');

            	    },
            	    failure: function(response, opts) {
            	        console.log('server-side failure with status code ' + response.status);
            	        Ext.Msg.alert('Erro', 'Olhe o log, pois lagum erro ocorreu!!!');
            	    }
            	});
            }
        }]
    }]	

});