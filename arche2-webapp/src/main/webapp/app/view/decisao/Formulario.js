Ext.define('Arche2.view.decisao.Formulario', {
    extend: 'Ext.form.Panel',
    alias : 'widget.decisaoform',
    
    bodyPadding: 50,

    title : 'Decisao Arquitetural - Solução',
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },
 
    initComponent: function() {
        this.items = [
            {
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
 
                items: [
                    {
                        xtype: 'textfield',
                        name : 'id',
                        fieldLabel: 'id',
                        hidden:true
                    },    
                    {
                    	xtype: 'combo',
                        name : 'tipo',
                        fieldLabel: 'Tipo de Decisão',
                        store: tiposDecisoes,
                        queryMode: 'local',
                        displayField: 'nome',
                        valueField: 'nome',
                        emptyText: 'Escolha o tipo de decisão arquitetural...'
                    },
                    {
                        xtype: 'textarea',
                        name : 'resumo',
                        rows: 3,
                        fieldLabel: 'Resumo',
                        emptyText: 'Faça uma breve descrição da solução, focando o requisito não funcional realizado...'
                       
                    },
                    {
                        xtype: 'combo',
                        name : 'estado',
                        fieldLabel: 'Estado Atual',
                        store: tiposEstados,
                        queryMode: 'local',
                        displayField: 'nome',
                        valueField: 'nome',
                        emptyText: 'Escolha o estado atual da solução...'
                    },
                    {
                        xtype: 'textarea',
                        name : 'racional',
                        rows: 8,
                        fieldLabel: 'Racional',
                        emptyText: 'Faça uma breve descrição do racional realizado. Aqui deve ser registrado os porquês da solução proposta, ou implementada...'
                    },
                    {
                        xtype: 'textarea',
                        name : 'riscos',
                        rows: 4,
                        fieldLabel: 'Riscos',
                        emptyText: 'Faça uma breve descrição dos riscos que envolvem essa decisão arquitetural...'
                    },
                    {
                        xtype: 'textarea',
                        name : 'escopo',
                        rows: 4,
                        fieldLabel: 'Escopo',
                        emptyText: 'Faça uma breve descrição do escopo que envolve essa decisão...'
                    },
                    {
                        xtype: 'textfield',
                        name : 'custo',
                        fieldLabel: 'Custo',
                        emptyText: 'R$ 00'
                    }
                ]
            }
        ];
         
        this.callParent(arguments);
    }
});

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