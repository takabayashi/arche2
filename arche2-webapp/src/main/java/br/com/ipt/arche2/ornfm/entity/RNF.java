package br.com.ipt.arche2.ornfm.entity;

import java.util.List;

import org.springframework.data.annotation.Id;

import br.com.ipt.arche2.util.JsonUtils;

public class RNF {
	@Id
	private String id;
	
	private String caracteristica;
	
	private List<RNF> subcaracteristicas;
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCaracteristica() {
		return caracteristica;
	}

	public void setCaracteristica(String caracteristica) {
		this.caracteristica = caracteristica;
	}

	public List<RNF> getSubcaracteristicas() {
		return subcaracteristicas;
	}

	public void setSubcaracteristicas(List<RNF> subcaracteristicas) {
		this.subcaracteristicas = subcaracteristicas;
	}

	@Override
	public String toString() {
		return JsonUtils.object2JsonString(this);
	}
}
