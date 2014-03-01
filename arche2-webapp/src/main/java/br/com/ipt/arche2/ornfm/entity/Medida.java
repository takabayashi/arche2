package br.com.ipt.arche2.ornfm.entity;

import org.springframework.data.annotation.Id;

public class Medida {
	@Id
	private String id;
	
	private String entidade;
	
	private String metodo;
	
	private String valor;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
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

	public String getMetodo() {
		return metodo;
	}

	public void setMetodo(String metodo) {
		this.metodo = metodo;
	}

	@Override
	public String toString() {
		return this.getEntidade() + " " + this.getMetodo() + " " + this.getValor();
	}

}
