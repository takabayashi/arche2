package br.com.ipt.arche2.similarity;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class InstanceSimilarityAlgorithm extends GenericAlgorithm implements LocalSimilarity {
	
	@Override
	public float calculate(Object obj1, Object obj2) {
		return this.similaridadeSemantica(obj1, obj2);
	}
	
	public float similaridadeSemantica(Object o1, Object o2){
		//primeiro obtem a quantidade de atributos compartilhados
		float atributosCompartilhados = getTotalAtributosSimilares(o1, o2);
		
		float quantidadeAtributosObjeto1 = getQuantidadeAtributos(o1);
		float quantidadeAtributosObjeto2 = getQuantidadeAtributos(o2);
		
		float similaridade = (	w1 * (atributosCompartilhados/Math.max(quantidadeAtributosObjeto1, quantidadeAtributosObjeto2)) + 
								w2 * (atributosCompartilhados/Math.min(quantidadeAtributosObjeto1, quantidadeAtributosObjeto2))
							);
		
		return similaridade;
		
	}
	
	public int getTotalAtributosSimilares(Object o1, Object o2){
		//verifica se todos os atributos são iguais
		List<Field> attributes1 = Arrays.asList(o1.getClass().getDeclaredFields());
		
		int similaarAttrTotal = 0;
		
		for (Field field1 : attributes1) {
			try {
				Object value1 = field1.get(o1);
				Object value2 = field1.get(o2);
				
				if(value1 == value2 || value1.equals(value2)){
					similaarAttrTotal ++;
					
				}else if(value1.getClass() == ArrayList.class){ //solucao para retirar da comparacao os atributos que sao lista
					similaarAttrTotal ++;
				}
				
			} catch (IllegalArgumentException | IllegalAccessException e) {
			}
		}
		
		return similaarAttrTotal;
	}
	
	public int getQuantidadeAtributos(Object o){
		return o.getClass().getDeclaredFields().length;
	}
}
