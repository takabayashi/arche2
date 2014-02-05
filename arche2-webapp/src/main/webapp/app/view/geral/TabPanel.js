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
			'Arche2.view.funcao.Grid'
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
    }]	

});