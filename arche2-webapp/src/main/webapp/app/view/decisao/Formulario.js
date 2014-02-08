var tiposEstados = Ext.create('Ext.data.Store', {
    fields: ['nome'],
    data : [
        {"nome":"Decisão Implementada"},
        {"nome":"Prova de Conceito"},
        {"nome":"Tentativa"},
        {"nome":"Solução Rejeitada"}
    ]
});

var tiposDecisoes = Ext.create('Ext.data.Store', {
    fields: ['nome'],
    data : [
        {"nome":"Decisão Estrutural de Arquitetura"},
        {"nome":"Decisão Comportamental de Arquitetura"},
        {"nome":"Decisão BAN"},
        {"nome":"Diretriz"},
        {"nome":"Restrição"},
        {"nome":"Regra de Projeto"},
        {"nome":"Decisão de Processo"},
        {"nome":"Decisão de Organização"},
        {"nome":"Decisão de Tecnologia"},
        {"nome":"Decisão de Ferramenta"}
    ]
});

Ext.define('Arche2.view.decisao.Formulario', {
    extend: 'Ext.form.Panel',
    alias : 'widget.decisaoform',

    bodyPadding: 50,
    url: '',
    title: 'Decisao Arquitetural - Solução', 
    layout: 'anchor',
    height: 600,
    id: 'decisaoform',
    disabled: true,
    
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
                xtype: 'fieldset',
                title: 'Resumo do Requisito Funcional Atendido',
                collapsible: true,
                id: 'resumoFormDecisao',
                html: getMessage('arche2.default.resumo')
            },    
            {
            	xtype: 'combo',
                name : 'tipo',
                id: 'tipo',
                fieldLabel: 'Tipo de Decisão',
                store: tiposDecisoes,
                queryMode: 'local',
                typeAhead:true,
                forceSelection: true,
                allowBlank: false,
                displayField: 'nome',
                valueField: 'nome',
                emptyText: 'Escolha o tipo de decisão arquitetural...'
            },
            {
                xtype: 'textarea',
                name : 'resumoDecisao',
                id: 'resumoDecisao',
                rows: 3,
                fieldLabel: 'Resumo',
                emptyText: 'Faça uma breve descrição da solução, focando o requisito não funcional realizado...'
               
            },
            {
                xtype: 'combo',
                name : 'estado',
                id: 'estado',
                fieldLabel: 'Estado Atual',
                store: tiposEstados,
                queryMode: 'local',
                typeAhead:true,
                forceSelection: true,
                allowBlank: false,
                displayField: 'nome',
                valueField: 'nome',
                emptyText: 'Escolha o estado atual da solução...'
            },
            {
                xtype: 'textarea',
                name : 'racional',
                id: 'racional',
                rows: 8,
                fieldLabel: 'Racional',
                emptyText: 'Faça uma breve descrição do racional realizado. Aqui deve ser registrado os porquês da solução proposta, ou implementada...'
            },
            {
                xtype: 'textarea',
                name : 'riscos',
                id : 'riscos',
                rows: 3,
                fieldLabel: 'Riscos',
                emptyText: 'Faça uma breve descrição dos riscos que envolvem essa decisão arquitetural...'
            },
            {
                xtype: 'textarea',
                name : 'escopo',
                id : 'escopo',
                rows: 2,
                fieldLabel: 'Escopo',
                emptyText: 'Faça uma breve descrição do escopo que envolve essa decisão...'
            },
            {
                xtype: 'textfield',
                name : 'custo',
                id : 'custo',
                fieldLabel: 'Custo',
                emptyText: 'R$ 00'
            }
        ]
    }],

    buttons: [{
        text: 'Limpar',
        handler: function() {

        }
    },{
    	text: 'Incluir Nova Decisão',
    	id: 'novaDecisaoButton',
        action: 'addNovoCaso'
    },{
    	text: 'Alterar Decisão',
        action: 'updateDecisao'
    }]
});