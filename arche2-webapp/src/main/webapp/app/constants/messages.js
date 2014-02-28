var MESSAGES = {
	'arche2.template.resumo':'{0} do sistema deverá ser {4} {1} ({2}) {3}',
	'arche2.default.resumo': '<p>Nenhuma medida foi indicada...</p>',
	'arche2.default.username': arquiteto,
	'arche2.tooltip.sugerirsolucao': 'O sistema especialista tentará sugerir soluções arquiteturais para o RNF (Requisito não funcional) apresentado. O sistema utiliza uma base de soluções arquiteturais utilizadas no passado e incluídos por profissionais especializados em arquitetura de software. <br><br>Todas as soluções sugeridas são apresentadas com um nível de similaridade calculado, a similaridade é calculada utilizando como base o RNF apresentado. <br><br>Para obter um resultado aceitável seja bem claro nas medidas desejadas.',
	'arche2.tooltip.inserirsolucao': 'Para possibilitar a evolução e aprendizado do sistema especialista, novas soluções arquiteturais podem ser incluídas livremente por arquitetos. Por tanto caso não seja sugerido nenhuma solução adequado, fique a vontade para incluir uma nova solução e compartilhar com outros arquitetos.',
	'arche2.tooltip.excluirsolucao': 'A exclusão da silução faz parte da manutenção do sistema especialista, e irá exlcuir para sempre a solução da base de casos resolvidos.',
	'arche2.tooltip.funcao': 'Para alcançar o requisito informado é necessário ter sucesso em todas as medidas ou apenas uma delas ?',
	'arche2.name':'<h1>Arquiteto Julia v.001 - Sistema Especialista em Soluções Arquiteturais</h1>',
	'arche2.welcome':'Bem vindo Sr. Arquiteto '
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