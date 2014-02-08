package br.com.ipt.arche2.orda.entity;

import java.util.List;

import br.com.ipt.arche2.util.JsonUtils;

public class DecisaoProjeto {
	private String resumo;
	private String racional;
	private String escopo;
	private String estado;
	private float custo;
	private String risco;
	private String tipo;
	private List<Historico> historicos;
	
	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getResumo() {
		return resumo;
	}

	public void setResumo(String resumo) {
		this.resumo = resumo;
	}

	public String getRacional() {
		return racional;
	}

	public void setRacional(String racional) {
		this.racional = racional;
	}

	public String getEscopo() {
		return escopo;
	}

	public void setEscopo(String escopo) {
		this.escopo = escopo;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public float getCusto() {
		return custo;
	}

	public void setCusto(float custo) {
		this.custo = custo;
	}

	public String getRisco() {
		return risco;
	}

	public void setRisco(String risco) {
		this.risco = risco;
	}

	public List<Historico> getHistoricos() {
		return historicos;
	}

	public void setHistoricos(List<Historico> historicos) {
		this.historicos = historicos;
	}

	@Override
	public String toString() {
		return JsonUtils.object2JsonString(this);
	}
}
