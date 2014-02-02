package br.com.ipt.arche2.ornfm.entity;

import org.springframework.data.annotation.Id;

import br.com.ipt.arche2.util.JsonUtils;

public class Metodo {
	@Id
	private String id;
	
	private String nome;
	
	private String algoritmo;

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

	public String getAlgoritmo() {
		return algoritmo;
	}

	public void setAlgoritmo(String algoritmo) {
		this.algoritmo = algoritmo;
	}
	
	@Override
	public String toString() {
		return JsonUtils.object2JsonString(this);
	}

}
