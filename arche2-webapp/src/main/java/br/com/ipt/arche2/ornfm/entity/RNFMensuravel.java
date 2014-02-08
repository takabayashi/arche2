package br.com.ipt.arche2.ornfm.entity;

import java.util.List;


public class RNFMensuravel extends RNF{
	private List<Medida> medidas;

	private Funcao funcao;

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
