var tipoFeedBack = Ext.create('Ext.data.Store', {
    fields: ['nome'],
    data : [
        {"nome":"Recomendações Gerais"},
        {"nome":"Reporte de Erros"},
        {"nome":"Dúvidas"},
        {"nome":"Experiência de Uso"},
        {"nome":"Contribuição"}
    ]
});

var modulos = Ext.create('Ext.data.Store', {
    fields: ['nome'],
    data : [
        {"nome":"Formulário de Requisitos Não Funcionais"},
        {"nome":"Formulário de Decisões Arquiteturais"},
        {"nome":"Resultado das Sugestões Arquiteturais"},
        {"nome":"Comportamento Geral"}
    ]
});

Ext.define('Arche2.view.geral.FormularioFeedBack', {
    extend: 'Ext.form.Panel',
    alias : 'widget.feedbackform',

    bodyPadding: 50,
    layout: 'anchor',
    id: 'feedbackform',
    
    defaults: {
        anchor: '100%'
    },

    items: [{
        xtype: 'form',
        padding: '5 5 0 5',
        border: false,
        style: 'background-color: #fff;',
        fieldDefaults: {
            anchor: '100%',
            labelAlign: 'left',
            allowBlank: false,
            combineErrors: true,
            msgTarget: 'side'
        },

        items: [{
            	xtype: 'combo',
                name : 'tipoFeedBack',
                id: 'tipoFeedBack',
                fieldLabel: 'Tipo de FeedBack',
                store: tipoFeedBack,
                queryMode: 'local',
                typeAhead:true,
                forceSelection: true,
                allowBlank: false,
                displayField: 'nome',
                valueField: 'nome',
                emptyText: 'Escolha o tipo de feedback que gostaria de enviar...'
            },{
            	xtype: 'combo',
                name : 'moduloFeedBack',
                id: 'moduloFeedBack',
                fieldLabel: 'Módulo relacionado',
                store: modulos,
                queryMode: 'local',
                typeAhead:true,
                forceSelection: true,
                allowBlank: true,
                displayField: 'nome',
                valueField: 'nome',
                emptyText: 'Escolha o módulo relacionado ao reporte...'
            },{
            	xtype: 'textfield',
                name : 'assuntoFeedback',
                id: 'assuntoFeedback',
                fieldLabel: 'Assunto',
                allowBlank: false
            },
            {
                xtype: 'textarea',
                name : 'resumoFeedBack',
                id: 'resumoFeedBack',
                rows: 5,
                fieldLabel: 'Resumo',
                emptyText: 'Escreva a vontade o seu feedback, críticas serão bem vindas....'
            } 
        ]
    }],

    buttons: [{
    	text: 'Enviar',
        formBind: true,
        disabled: true,
        handler: function(btn){
        	var feedback = {
        			tipo: Ext.getCmp('tipoFeedBack').getValue(),
        			modulo: Ext.getCmp('moduloFeedBack').getValue(),
        			assunto: Ext.getCmp('assuntoFeedback').getValue(),
        			resumo: Ext.getCmp('resumoFeedBack').getValue(),
        			username: arquiteto,
        	};
        	
        	Ext.Ajax.request({
	    	    url: 'rest/arquiteto/feedback',
	    	    headers: { 'Content-Type': 'application/json;charset=utf-8', 'Accept': 'application/json'},
	    	    jsonData: JSON.stringify(feedback),
	            method: 'POST',
	            
	    	    success: function(response, opts) {
	    	    	Ext.Msg.alert('Sucesso', 'Seu Feedback foi registrado com sucesso!!!');
	    	    	Ext.getCmp('feedbackform').getForm().reset();
	    	    	Ext.getCmp('feedbackformPanel').collapse();
	    	    },
	    	    
	    	    failure: function(response, opts) {
	    	        console.log('server-side failure with status code ' + response.status);
	    	        Ext.Msg.alert('Erro', 'Olhe o log, pois lagum erro ocorreu!!!');
	    	    }
	    	});
        }
    }]
});