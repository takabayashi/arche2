Ext.Loader.setConfig({enabled: true});
 
Ext.application({
    name: 'Arche2',
 
    controllers: [
        'Usuarios',
        'Medidas',
        'Entidades',
        'Metodos'
    ],
 
    autoCreateViewport: true
});