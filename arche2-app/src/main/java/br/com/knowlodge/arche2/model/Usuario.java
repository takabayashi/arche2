package br.com.knowlodge.arche2.model;

import org.springframework.data.annotation.Id;

public class Usuario {
	@Id
	private String id;
	
	private String nome;
	
	private String sobrenome;
	
	

	public Usuario(String nome, String sobrenome) {
		super();
		this.nome = nome;
		this.sobrenome = sobrenome;
	}

	public String getSobrenome() {
		return sobrenome;
	}

	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}

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
}
