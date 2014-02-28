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

Ext.define('Arche2.view.caso.FormularioSolucao', {
    extend: 'Ext.form.Panel',
    alias : 'widget.solucaoform',

    bodyPadding: 50,
    url: '',
    title: 'Decisao Arquitetural (Solução)', 
    layout: 'anchor',
    id: 'solucaoform',
    
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
                html: getMessage('arche2.default.resumo'),
                margin: '10 0 20 0 0'
            },
            {
            	xtype: 'textfield',
                name : 'idCaso',
                id: 'idCaso',
                fieldLabel: 'idCaso',
                hidden:true,
                allowBlank: true
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
                rows: 5,
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
                rows: 4,
                fieldLabel: 'Racional',
                emptyText: 'Faça uma breve descrição do racional realizado. Aqui deve ser registrado os porquês da solução proposta, ou implementada...'
            },
            {
                xtype: 'textarea',
                name : 'risco',
                id : 'risco',
                rows: 2,
                fieldLabel: 'Risco',
                allowBlank: true,
                emptyText: 'Faça uma breve descrição dos riscos que envolvem essa decisão arquitetural...'
            },
            {
                xtype: 'textarea',
                name : 'escopo',
                id : 'escopo',
                allowBlank: true,
                rows: 2,
                fieldLabel: 'Escopo',
                emptyText: 'Faça uma breve descrição do escopo que envolve essa decisão...'
            },
            {
                xtype: 'numberfield',
                name : 'custo',
                id : 'custo',
                value: 0,
                fieldLabel: 'Custo $'
            },
            {
                xtype: 'textarea',
                name : 'historico',
                readOnly: true,
                allowBlank: true,
                id : 'historico',
                rows: 2,
                fieldLabel: 'Histórico'
            }
        ]
    }],

    buttons: [{
        text: 'Limpar',
        action: 'limpar'
    },{
        text: 'Voltar',
        action: 'cancelar'
    },{
    	text: 'Excluir Solução Atual',
        action: 'deleteCaso',
        id: 'deleteCasoButton', 
        disabled: true,
        tooltip: MESSAGES['arche2.tooltip.excluirsolucao']
    },{
    	text: 'Salvar Nova Solução',
        formBind: true,
        disabled: true,
        action: 'addNovoCaso'
    }]
});