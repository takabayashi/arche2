package br.com.ipt.arche2.ornfm.entity;

import org.springframework.data.annotation.Id;

public class TipoMedida {
	@Id
	private String id;
	
	private String nome;
	
	private String pai;
	
	private String subcaracteristica;

	public String getSubcaracteristica() {
		return subcaracteristica;
	}

	public void setSubcaracteristica(String subcaracteristica) {
		this.subcaracteristica = subcaracteristica;
	}

	public String getId() {
		return id;
	}

	public TipoMedida() {
		super();
	}

	public TipoMedida(String nome) {
		super();
		this.nome = nome;
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
		TipoMedida other = (TipoMedida) obj;
		if (nome == null) {
			if (other.nome != null)
				return false;
		} else if (!nome.equals(other.nome))
			return false;
		return true;
	}

}
