package br.com.ipt.arche2.ornfm.entity;

import org.springframework.data.annotation.Id;

public class Entidade {
	@Id
	public String id;
	
	public String nome;
	
	public String pai;
	
	public float limiteValorInferior;
	
	public float getLimiteValorInferior() {
		return limiteValorInferior;
	}

	public void setLimiteValorInferior(float limiteValorInferior) {
		this.limiteValorInferior = limiteValorInferior;
	}

	public float getLimiteValorSuperior() {
		return limiteValorSuperior;
	}

	public void setLimiteValorSuperior(float limiteValorSuperior) {
		this.limiteValorSuperior = limiteValorSuperior;
	}

	public float limiteValorSuperior;

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

	public String getPai() {
		return pai;
	}

	public void setPai(String pai) {
		this.pai = pai;
	}

	@Override
	public String toString() {
		return this.getNome();
	}

	public Entidade(String nome) {
		super();
		this.nome = nome;
	}
	
	public Entidade() {
		super();
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((nome == null) ? 0 : nome.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Entidade other = (Entidade) obj;
		if (nome == null) {
			if (other.nome != null)
				return false;
		} else if (!nome.equals(other.nome))
			return false;
		return true;
	}

}
