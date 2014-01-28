Ext.onReady(function(){
    //Cria configuracao do viewport principal
    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        renderTo: Ext.getBody(),
        items: [{
            region: 'north',
            html: '<h1>Arche 2 - Architect Expert</h1>',
            autoHeight: true,
            border: false,
            margins: '10 10 10 10'
        }, {
            region: 'west',
            collapsible: true,
            title: 'Requisitos Não Funcionais',
            width: '20%',
            resizable: true,
            items: tree
        }, {
            region: 'south',
            html: '<p>Desenvolvido por Daniel Martins Takabayashi para o Istituto de Pesquisas Tecnológicas de São Paulo</p>',
            minHeight: 40
        }, {
            region: 'center',
            xtype: 'tabpanel', 
            activeTab: 0,      
            items: [{
                title: 'Novo Problema',
                items: formRNF
            }]
        }]
    });
});

//cria dados do componente que representa o menu de atributos de qualidades
var treeStore = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        children: [
            { text: 'Atributo 001', expanded: true, children: [
                {text: 'Sub-Atributo 001', leaf: true},
                {text: 'Sub-Atributo 002', leaf: true},
                {text: 'Sub-Atributo 003', leaf: true}
                ]
            },{ text: 'Atributo 002', expanded: true, children: [
                {text: 'Sub-Atributo 001', leaf: true},
                {text: 'Sub-Atributo 002', leaf: true},
                {text: 'Sub-Atributo 003', leaf: true}
                ]
            },{ text: 'Atributo 003', expanded: true, children: [
                {text: 'Sub-Atributo 001', leaf: true},
                {text: 'Sub-Atributo 002', leaf: true},
                {text: 'Sub-Atributo 003', leaf: true}
                ]
            }
        ]
    }
});


//cria componente que representa o menu de atributos de qualidades
var tree = Ext.create('Ext.tree.Panel', {
    store: treeStore,
    rootVisible: false,
    border: false
});

var formRNF = Ext.create('Ext.form.Panel', {
    bodyPadding: 5,
    width: '70%',
    border: false,
    url: '',

    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },

    items: [{
        xtype: 'textfield',
        fieldLabel: 'Nome:',
        name: 'nome',
        allowBlank: false
    },{
        xtype: 'combo',
        fieldLabel: 'Tipo:',
        name: 'classe',
        displayField: 'nome',
        valueField: 'classe',
        store: tiposRNFs
    },{
        xtype: 'fieldset',
        title: 'Medidas',
        collapsible: true,
        defaults: {
            labelWidth: 89,
            anchor: '100%',
            layout: {
                type: 'hbox',
                defaultMargins: {top: 0, right: 5, bottom: 0, left: 0}
            }
        },
        items: [

        ]
    },{
        xtype: 'fieldset',
        title: 'Função de Medição',
        collapsible: true,
        defaults: {
            labelWidth: 89,
            anchor: '100%',
            layout: {
                type: 'hbox',
                defaultMargins: {top: 0, right: 5, bottom: 0, left: 0}
            }
        },
        items: []
    }],

    buttons: [{
        text: 'Limpar',
        handler: function() {
            this.up('form').getForm().reset();
        }
    }, {
        text: 'Gravar',
        formBind: true,
        disabled: true,
        handler: function() {
            
        }
    }]
});


var tiposRNFs = Ext.create('Ext.data.Store', {
    fields: ['nome', 'classe'],
    data : [
        {"nome":"Mensuraveis", 'classe':'RNFMensuravel'},
        {"nome":"Não Mensuraveis", 'classe':'RNFNaoMensuravel'}
    ]
});















