package br.com.ipt.arche2.ornfm.entity;

import org.springframework.data.annotation.Id;

import br.com.ipt.arche2.util.JsonUtils;

public class Medida {
	@Id
	private String id;
	
	private String tipo;
	
	private String entidade;
	
	private String metodo;
	
	private String valor;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
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
		return JsonUtils.object2JsonString(this);
	}

}
