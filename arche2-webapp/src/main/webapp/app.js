Ext.Loader.setConfig({enabled: true});
 
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