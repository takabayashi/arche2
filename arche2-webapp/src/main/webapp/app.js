Ext.Loader.setConfig({enabled: true});

Ext.tip.QuickTipManager.init(true, {showDelay : 1000, dismissDelay: 20000});

Ext.application({
    name: 'Arche2',
 
    controllers: [
        'Medidas',
        'Entidades',
        'Metodos',
        'Caracteristicas',
        'SubCaracteristicas',
        'Funcoes',
        'Sugestoes',
        'Casos',
        'TipoMedidas',
        'Pesos',
        'Arquitetos'
    ],
 
    autoCreateViewport: true
});