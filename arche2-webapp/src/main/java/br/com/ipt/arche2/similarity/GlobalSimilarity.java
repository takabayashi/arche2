package br.com.ipt.arche2.similarity;

import br.com.ipt.arche2.entity.Caso;

public interface GlobalSimilarity {
	public void index(Float sim, Caso obj1);
}
