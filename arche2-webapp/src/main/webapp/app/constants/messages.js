var MESSAGES = {
	'arche2.template.resumo':'O sistema deverá ter {0} de {1} ({2}) {3}',
	'arche2.default.resumo': '<p>Nenhuma medida foi indicada...</p>'
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