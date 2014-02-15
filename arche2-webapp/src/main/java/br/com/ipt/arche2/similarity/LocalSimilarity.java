package br.com.ipt.arche2.similarity;

import br.com.ipt.arche2.ornfm.entity.RNFMensuravel;

public interface LocalSimilarity {
	public float calculate(RNFMensuravel rnf1, RNFMensuravel rnf2);
}
