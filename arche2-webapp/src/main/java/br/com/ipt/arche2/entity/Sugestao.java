package br.com.ipt.arche2.entity;

import br.com.ipt.arche2.util.JsonUtils;

public class Sugestao{
	
	private Caso caso;
	private float similaridade;
	
	public Caso getCaso() {
		return caso;
	}

	public Sugestao(Caso caso, float similaridade) {
		super();
		this.caso = caso;
		this.similaridade = similaridade;
	}

	public void setCaso(Caso caso) {
		this.caso = caso;
	}

	public float getSimilaridade() {
		return similaridade;
	}

	public void setSimilaridade(float similaridade) {
		this.similaridade = similaridade;
	}

	@Override
	public String toString() {
		return JsonUtils.object2JsonString(this);
	}
}
