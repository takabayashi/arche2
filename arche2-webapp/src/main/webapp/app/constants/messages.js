var MESSAGES = {
	'arche2.template.resumo':'{0} do sistema deverá ser {4} {1} ({2}) {3}',
	'arche2.default.resumo': '<p>Nenhuma medida foi indicada...</p>',
	'arche2.default.username': 'Juliana Myaki'
};

function getMessage(key, params){
	var template = MESSAGES[key];
	
	if(params !== undefined){
		for(var i=0; i<params.length; i++){
			template = template.replace('{' +i+'}', params[i]);
		}
	}
	
	return template;
}