var tiposEstados = Ext.create('Ext.data.Store', {
    fields: ['nome'],
    data : [
        {"nome":"Decisão Implementada"},
        {"nome":"Prova de Conceito"},
        {"nome":"Tentativa"},
        {"nome":"Apenas uma Idéia"},
        {"nome":"Solução Rejeitada"}
    ]
});

var tiposDecisoes = Ext.create('Ext.data.Store', {
    fields: ['nome', 'help'],
    data : [
        {"nome":"Estrutura da Arquitetura (Decisão Existêncial)", "help": MESSAGES['arche2.help.decisao.existencia']},
        {"nome":"Comportamento da Arquitetura (Decisão Existêncial)", "help": MESSAGES['arche2.help.decisao.existencia']},
        {"nome":"BAN (Decisão Existêncial)", "help": MESSAGES['arche2.help.decisao.ban']},
        {"nome":"Diretriz (Decisão de Propriedade)", "help": MESSAGES['arche2.help.decisao.propriedade']},
        {"nome":"Restrição  (Decisão de Propriedade)", "help": MESSAGES['arche2.help.decisao.propriedade']},
        {"nome":"Regra de Projeto  (Decisão de Propriedade)", "help": MESSAGES['arche2.help.decisao.propriedade']},
        {"nome":"Processo (Decisão Executiva)", "help": MESSAGES['arche2.help.decisao.executivas']},
        {"nome":"Organização (Decisão Executiva)", "help": MESSAGES['arche2.help.decisao.executivas']},
        {"nome":"Tecnologia (Decisão Executiva)", "help": MESSAGES['arche2.help.decisao.executivas']},
        {"nome":"Ferramenta (Decisão Executiva)", "help": MESSAGES['arche2.help.decisao.executivas']}
    ]
});

Ext.define('Arche2.view.caso.FormularioSolucao', {
    extend: 'Ext.form.Panel',
    alias : 'widget.solucaoform',

    bodyPadding: 50,
    url: '',
    title: 'Decisão Arquitetural (Solução)', 
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
                emptyText: 'Escolha o tipo de decisão arquitetural...',
                listConfig: {
	            	getInnerTpl: function() {
	            		return '<div data-qtip="{help}">{nome}</div>';
	                }
                }
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
                emptyText: 'Faça uma breve descrição do escopo que envolve essa decisão...Por que apenas propor soluções relacionadas a padrões de projeto se a infraestrutura de servidores também faz parte da arquitetura? Resp: A infraestrutura não faz parte do escopo.'
            },
            {
                xtype: 'numberfield',
                name : 'custo',
                id : 'custo',
                value: 0,
                hidden: true,
                fieldLabel: 'Custo $'
            },
            {
                xtype: 'textarea',
                name : 'historico',
                readOnly: true,
                allowBlank: true,
                id : 'historico',
                rows: 4,
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
    	text: 'Reutilizar Solução',
    	id: 'addNovoCasoButton',
        formBind: true,
        disabled: true,
        action: 'addNovoCaso'
    }]
});