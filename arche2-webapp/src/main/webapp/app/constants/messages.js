var MESSAGES = {
	'arche2.template.resumo.medidas':'{0} {1} {2}',
	'arche2.template.resumo':'{0}',
	'arche2.default.resumo': '<p>Nenhuma medida foi indicada...</p>',
	'arche2.default.username': arquiteto,
	'arche2.tooltip.sugerirsolucao': 'O sistema especialista tentará sugerir soluções arquiteturais para o RNF (Requisito não funcional) apresentado. O sistema utiliza uma base de soluções arquiteturais utilizadas no passado e incluídos por profissionais especializados em arquitetura de software. <br><br>Todas as soluções sugeridas são apresentadas com um nível de similaridade calculado, a similaridade é calculada utilizando como base o RNF apresentado. <br><br>Para obter um resultado aceitável seja bem claro nas medidas desejadas.',
	'arche2.tooltip.inserirsolucao': 'Para possibilitar a evolução e aprendizado do sistema especialista, novas soluções arquiteturais podem ser incluídas livremente por arquitetos. Por tanto caso não seja sugerido nenhuma solução adequado, fique a vontade para incluir uma nova solução e compartilhar com outros arquitetos.',
	'arche2.tooltip.excluirsolucao': 'A exclusão da silução faz parte da manutenção do sistema especialista, e irá exlcuir para sempre a solução da base de casos resolvidos.',
	'arche2.tooltip.funcao': 'Para alcançar o requisito informado é necessário ter sucesso em todas as medidas ou apenas uma delas ?',
	'arche2.name':'<h1>Arquiteto Julia v.001 - Sistema Especialista em Soluções Arquiteturais</h1>',
	'arche2.welcome':'Bem vindo Sr. Arquiteto ',
	
	
	'arche2.help.decisao.existencia': '<p>Decisões de Existência estabelecem elementos ou artefatos que devem obrigatoriamente aparecer na arquitetura. A estrutural diz respeito a subsistemas, camadas, partições e componentes gerais da visão arquitetural. A comportamental diz respeito a forma (protocolos) como componentes da arquitetura se comunicam (conectores).</p><p>Exemplo 1: “é obrigatório o uso de HTML para camada de apresentação”</p><p>Exemplo 2: “é obrigatório o uso de uma API customizada para comunicação com o mainframe”</p>',
    'arche2.help.decisao.ban': '<p>Ban são decisões que restringem os elementos e artefatos que não podem aparecer na arquitetura, contrário de Decisões de Existência.</p><br><p>Exemplo 1: “não é permitido o uso de banco de dados relacional”</p><p>Exemplo 2: “não é permitido a duplicação de código java”</p>',
    'arche2.help.decisao.propriedade': '<p>Decisões de propriedade são características que abrangem todo o sistema, influenciando ou restringindo regras para modelagem. É dividida em Diretriz, Restrição e Regra de projeto.</p><br><p>Exemplo 1: “todas as classes de domínio devem ficar na camada de negócio”</p><p>Exemplo 2: “não utilizar produtos de código aberto”</p>',
    'arche2.help.decisao.executivas': '<p>Decisões executivas são induzidas pela área de negócio e influenciam a equipe e o processo de desenvolvimento, a organização, tecnologias e ferramentas. São divididas em Organização, Processo, Tecnologia e Ferramenta.</p><br><p>Exemplo 1: “o código deve ser desenvolvido em java”</p><p>Exemplo 2: “a ferramenta para desenvolvimento deve ser o Eclipse”</p><p>Exemplo 3: “o processo RUP dever ser utilizado”</p>'
	
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