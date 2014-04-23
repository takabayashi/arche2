package br.com.ipt.arche2.similarity;

import java.util.List;

import org.springframework.stereotype.Component;

import br.com.ipt.arche2.ornfm.entity.Entidade;
import br.com.ipt.arche2.ornfm.entity.Medida;
import br.com.ipt.arche2.ornfm.entity.Metodo;
import br.com.ipt.arche2.ornfm.entity.RNFMensuravel;

@Component
public class MeasureSimilarityAlgorithm extends GenericAlgorithm implements LocalSimilarity {
	
	private NumericSimilarityAlgorithm numericSimilarityAlgorithm;
	private InstanceSimilarityAlgorithm instanceSimilarityAlgorithm;
	private List<Entidade> entidadesMedida;
	private List<Metodo> metodosMedida;
	
	@Override
	public float calculate(Object obj1, Object obj2) {
		RNFMensuravel rnf1 = (RNFMensuravel) obj1;
		RNFMensuravel rnf2 = (RNFMensuravel) obj2;
		
		float maxMeasureSimilarity = 0f;
		float totalMeasureSimilarity = 0f;
		int totalSameMeasure = 0;
		
		for (Medida medida1 : rnf1.getMedidas()) {
			//obtem os objetos de entidade
			Entidade e1 = entidadesMedida.get(entidadesMedida.indexOf(new Entidade(medida1.getEntidade())));
			
			for (Medida medida2 : rnf2.getMedidas()) {
				//efetua o calculo de similaridade
				
				Entidade e2 = entidadesMedida.get(entidadesMedida.indexOf(new Entidade(medida2.getEntidade())));
				
				float simNum = numericSimilarityAlgorithm.calculate(medida1, medida2);
				float simMin = instanceSimilarityAlgorithm.calculate(e1, e2);
				
				float simMeasure = (simMin * w1) + ( simNum * w2) ;
				
				//verifica a maior similaridade
				maxMeasureSimilarity = maxMeasureSimilarity < simMeasure ? simMeasure : maxMeasureSimilarity;
				
				totalMeasureSimilarity += simMeasure;
				
				totalSameMeasure += (simMeasure == 1 ? 1 : 0);
			}
		}
		
		//determina quantos elementos são identicos - 
		//se tem o mesmo tamanho e a quantidade de elementos iguais é a quantidade igual ao tamanho do vetor 
		//então os elementos são identicos
		if(rnf1.getMedidas().size() == rnf2.getMedidas().size() && rnf2.getMedidas().size() == totalSameMeasure){
			totalMeasureSimilarity = 1.0f;
			
		}else{
			//média aritmetica de todas as similaridades
			totalMeasureSimilarity = totalMeasureSimilarity / (rnf1.getMedidas().size() * rnf2.getMedidas().size());
		}
		
		return totalMeasureSimilarity;
	}
	
	
	public NumericSimilarityAlgorithm getNumericSimilarityAlgorithm() {
		return numericSimilarityAlgorithm;
	}

	public void setNumericSimilarityAlgorithm(
			NumericSimilarityAlgorithm numericSimilarityAlgorithm) {
		this.numericSimilarityAlgorithm = numericSimilarityAlgorithm;
	}

	public InstanceSimilarityAlgorithm getInstanceSimilarityAlgorithm() {
		return instanceSimilarityAlgorithm;
	}

	public void setInstanceSimilarityAlgorithm(
			InstanceSimilarityAlgorithm instanceSimilarityAlgorithm) {
		this.instanceSimilarityAlgorithm = instanceSimilarityAlgorithm;
	}
	
	public List<Entidade> getEntidadesMedida() {
		return this.entidadesMedida;
	}

	public void setEntidadesMedida(List<Entidade> entidadesMedida) {
		this.entidadesMedida = entidadesMedida;
	}
	
	public List<Metodo> getMetodosMedida() {
		return metodosMedida;
	}

	public void setMetodosMedida(List<Metodo> metodosMedida) {
		this.metodosMedida = metodosMedida;
	}

}
