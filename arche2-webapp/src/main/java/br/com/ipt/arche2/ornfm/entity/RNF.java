package br.com.ipt.arche2.ornfm.entity;

import br.com.ipt.arche2.util.JsonUtils;

public class RNF {

	private String nome;
	
	private RNF subcaracteristica;
	
	public RNF getSubcaracteristica() {
		return subcaracteristica;
	}

	public void setSubcaracteristica(RNF subcaracteristica) {
		this.subcaracteristica = subcaracteristica;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
	@Override
	public String toString() {
		return JsonUtils.object2JsonString(this);
	}
}
