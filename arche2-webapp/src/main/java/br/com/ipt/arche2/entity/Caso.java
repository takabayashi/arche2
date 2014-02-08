package br.com.ipt.arche2.entity;

import org.springframework.data.annotation.Id;

import br.com.ipt.arche2.orda.entity.DecisaoProjeto;
import br.com.ipt.arche2.ornfm.entity.RNFMensuravel;
import br.com.ipt.arche2.util.JsonUtils;

public class Caso{
	@Id
	private String id;
	
	private DecisaoProjeto decisao;
	
	private RNFMensuravel rnf;
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public DecisaoProjeto getDecisao() {
		return decisao;
	}

	public void setDecisao(DecisaoProjeto decisao) {
		this.decisao = decisao;
	}

	public RNFMensuravel getRnf() {
		return rnf;
	}

	public void setRnf(RNFMensuravel rnf) {
		this.rnf = rnf;
	}
	
	@Override
	public String toString() {
		return JsonUtils.object2JsonString(this);
	}
}
