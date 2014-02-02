package br.com.ipt.arche2.orda.entity;

import java.sql.Date;

import org.springframework.data.annotation.Id;

import br.com.ipt.arche2.entity.Usuario;

public class Historico {
	@Id
	private String id;
	private Date dataHora;
	private String alteracao;
	private Usuario autor;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Date getDataHora() {
		return dataHora;
	}
	public void setDataHora(Date dataHora) {
		this.dataHora = dataHora;
	}
	public String getAlteracao() {
		return alteracao;
	}
	public void setAlteracao(String alteracao) {
		this.alteracao = alteracao;
	}
	public Usuario getAutor() {
		return autor;
	}
	public void setAutor(Usuario autor) {
		this.autor = autor;
	}
	
}
