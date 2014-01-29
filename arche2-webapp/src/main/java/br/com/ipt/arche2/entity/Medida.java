package br.com.ipt.arche2.entity;

import org.springframework.data.annotation.Id;

import br.com.ipt.arche2.util.JsonUtils;

public class Medida {
	@Id
	private String id;
	
	private String nome;
	
	private String entidade;
	
	private String valor;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEntidade() {
		return entidade;
	}

	public void setEntidade(String entidade) {
		this.entidade = entidade;
	}

	public String getValor() {
		return valor;
	}

	public void setValor(String valor) {
		this.valor = valor;
	}

	@Override
	public String toString() {
		return JsonUtils.object2JsonString(this);
	}

}
