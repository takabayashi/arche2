package br.com.ipt.arche2.similarity;

import java.util.List;

import br.com.ipt.arche2.entity.Caso;
import br.com.ipt.arche2.ornfm.entity.RNFMensuravel;

public interface GlobalSimilarity {
	public void calculate(RNFMensuravel rnf, List<Caso> listaCasos);
}
