package br.com.ipt.arche2.similarity;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.springframework.stereotype.Component;

import br.com.ipt.arche2.entity.Caso;
import br.com.ipt.arche2.entity.Sugestao;

@Component
public class NearestNeighbourAlgorithm extends GenericAlgorithm implements GlobalSimilarity {
	private List<Sugestao> casosIndexados;

	public void setCasosIndexados(List<Sugestao> casosIndexados) {
		this.casosIndexados = casosIndexados;
	}

	public List<Sugestao> getCasosIndexados() {
		return casosIndexados;
	}

	@Override
	public void index(Float similaridade, Caso caso) {
		Sugestao sugestao = new Sugestao(caso, similaridade);
		casosIndexados.add(sugestao);
		
		Collections.sort(casosIndexados, new Comparator<Sugestao>(){
			@Override
			public int compare(Sugestao sugestao1, Sugestao sugestao2) {
				if(sugestao1.getSimilaridade() == sugestao2.getSimilaridade()){
					return 0;
				}
				
				return sugestao1.getSimilaridade()>sugestao2.getSimilaridade()? -1: 1;
			}
		});
	}
}
