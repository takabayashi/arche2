package br.com.ipt.arche2.ornfm.entity;

import java.util.List;


public class RNFMensuravel {
	public List<Medida> medidas;

	public Funcao funcao;

	public String nome;
	
	public String subcaracteristica;
	
	public String tipoMedida;
	
	public String getTipoMedida() {
		return tipoMedida;
	}

	public void setTipoMedida(String tipoMedida) {
		this.tipoMedida = tipoMedida;
	}

	public String getSubcaracteristica() {
		return subcaracteristica;
	}

	public void setSubcaracteristica(String subcaracteristica) {
		this.subcaracteristica = subcaracteristica;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public Funcao getFuncao() {
		return funcao;
	}

	public void setFuncao(Funcao funcao) {
		this.funcao = funcao;
	}

	public List<Medida> getMedidas() {
		return medidas;
	}

	public void setMedidas(List<Medida> medidas) {
		this.medidas = medidas;
	}
	
}
