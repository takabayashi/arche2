package br.com.ipt.arche2.similarity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.ipt.arche2.ornfm.entity.Entidade;
import br.com.ipt.arche2.ornfm.entity.Medida;
import br.com.ipt.arche2.ornfm.entity.RNFMensuravel;
import br.com.ipt.arche2.repository.EntidadeRepository;

@Component
public class NumericSimilarityAlgorithm implements LocalSimilarity {
	
	@Autowired
	protected static EntidadeRepository entidadeRepository;
	
	protected static List<Entidade> entidadesMedida;
	
	public float calculate(RNFMensuravel rnf1, RNFMensuravel rnf2) {
		
		//obtem os valores que deverão ser calculados
		List<Medida> medidas1 = rnf1.getMedidas();
		List<Medida> medidas2 = rnf1.getMedidas();
		
		entidadesMedida = entidadeRepository.findAll();
		
		float similaridadeTotal = 0f;
		float maxNumericSimilarity = 0f;
		
		for (Medida medida1 : medidas1) {
			//obtem os valores para efetuar o calculo de similaridade
			float v1 = Float.valueOf(medida1.getValor());
			float ub1 = Float.valueOf(entidadesMedida.get(entidadesMedida.indexOf(medida1.getEntidade())).getLimiteValorSuperior());
			float lb1 = Float.valueOf(entidadesMedida.get(entidadesMedida.indexOf(medida1.getEntidade())).getLimiteValorInferior());
					
			for (Medida medida2 : medidas2) {
				float v2 = Float.valueOf(medida2.getValor());
				float ub2 = Float.valueOf(entidadesMedida.get(entidadesMedida.indexOf(medida2.getEntidade())).getLimiteValorSuperior());
				float lb2 = Float.valueOf(entidadesMedida.get(entidadesMedida.indexOf(medida2.getEntidade())).getLimiteValorInferior());
				
				//efetua o calculo de similaridade
				float sim = linearFunctionNormalizado(v1, v2, ub1, lb1, ub2, lb2);
				
				//verifica a maior similaridade
				maxNumericSimilarity = maxNumericSimilarity < sim ? sim : maxNumericSimilarity;
			}
			
			///maxNumericSimilarity é a maior similaridade numerica
		}
		
		
		return maxNumericSimilarity;
	}
	
	public float linearFunction(float v1, float v2, float ub, float lb){
		return 1 - Math.abs(v1 - v2) / (ub - lb);
	}
	
	public float linearFunctionNormalizado(float v1, float v2, float ub1, float lb1, float ub2, float lb2){
		//normalizando os numeros
		return 1 - Math.abs(v1/ub1 - v2/ub2);
	}
	


}
