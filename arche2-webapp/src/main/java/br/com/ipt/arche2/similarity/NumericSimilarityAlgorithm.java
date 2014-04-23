package br.com.ipt.arche2.similarity;

import java.util.List;

import org.springframework.stereotype.Component;

import br.com.ipt.arche2.ornfm.entity.Entidade;
import br.com.ipt.arche2.ornfm.entity.Medida;

@Component
public class NumericSimilarityAlgorithm extends GenericAlgorithm implements LocalSimilarity {
	
	private List<Entidade> entidadesMedida;
	
	public float calculate(Object obj1, Object obj2) {
		Medida medida1 = (Medida) obj1;
		Medida medida2 = (Medida) obj2;
		
		float v1 = Float.valueOf(medida1.getValor());
		float ub1 = Float.valueOf(entidadesMedida.get(entidadesMedida.indexOf(new Entidade(medida1.getEntidade()))).getLimiteValorSuperior());
		float lb1 = Float.valueOf(entidadesMedida.get(entidadesMedida.indexOf(new Entidade(medida1.getEntidade()))).getLimiteValorInferior());
				
		float v2 = Float.valueOf(medida2.getValor());
		float ub2 = Float.valueOf(entidadesMedida.get(entidadesMedida.indexOf(new Entidade(medida2.getEntidade()))).getLimiteValorSuperior());
		float lb2 = Float.valueOf(entidadesMedida.get(entidadesMedida.indexOf(new Entidade(medida2.getEntidade()))).getLimiteValorInferior());
				
		//efetua o calculo de similaridade
		float sim = linearFunctionNormalizado(v1, v2, ub1, lb1, ub2, lb2);
		
		//System.out.print(" simNum: [" + sim + "]");
		return sim;
	}
	
	public float linearFunction(float v1, float v2, float ub, float lb){
		return 1 - Math.abs(v1 - v2) / (ub - lb);
	}
	
	public float linearFunctionNormalizado(float v1, float v2, float ub1, float lb1, float ub2, float lb2){
		//normalizando os numeros
		return 1 - Math.abs(v1/ub1 - v2/ub2);
	}

	public List<Entidade> getEntidadesMedida() {
		return this.entidadesMedida;
	}

	public void setEntidadesMedida(List<Entidade> entidadesMedida) {
		this.entidadesMedida = entidadesMedida;
	}
}
