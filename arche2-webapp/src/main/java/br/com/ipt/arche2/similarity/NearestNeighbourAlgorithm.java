package br.com.ipt.arche2.similarity;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.ipt.arche2.entity.Caso;
import br.com.ipt.arche2.entity.Peso;
import br.com.ipt.arche2.entity.Sugestao;
import br.com.ipt.arche2.ornfm.entity.Medida;
import br.com.ipt.arche2.ornfm.entity.RNFMensuravel;
import br.com.ipt.arche2.repository.EntidadeRepository;
import br.com.ipt.arche2.repository.MetodoRepository;
import br.com.ipt.arche2.repository.PesoRepository;

@Component
public class NearestNeighbourAlgorithm extends GenericAlgorithm implements GlobalSimilarity {
	@Autowired
	protected PesoRepository pesoRepository;
	
	@Autowired
	protected EntidadeRepository entidadeRepository;
	
	@Autowired
	protected MetodoRepository metodoRepository;
	
	@Autowired
	protected InstanceSimilarityAlgorithm instanceSimilarityAlgorithm;
	
	@Autowired
	protected NumericSimilarityAlgorithm numericSimilarityAlgorithm;
	
	@Autowired
	protected MeasureSimilarityAlgorithm measureSimilarityAlgorithm;
	
	private List<Sugestao> casosIndexados;

	protected float similaridadeMinimaCasos;
	
	public void setCasosIndexados(List<Sugestao> casosIndexados) {
		this.casosIndexados = casosIndexados;
	}

	public List<Sugestao> getCasosIndexados() {
		return casosIndexados;
	}

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

	@Override
	public void calculate(RNFMensuravel rnf, List<Caso> listaCasos) {
		
		ajustarPesos();
		ajustesGeraisOtimizacao();
		
		System.out.println("Iniciando calculo de similaridade **************************************");
		
		System.out.println("Problema Indicado:");
		printRNF(rnf);
		System.out.println("\n\n");
		
		///aplica a lógica para devolver apenas os casos similares
		for (Caso caso : listaCasos) {
			
			printCaso(caso);
			
			/**
			 *  Aqui inicia a lógica para calculo de similaridades
			 */
			System.out.println("Resultado dos cálculos de similaridade:");
			
			//calcula a similaridade semantica
			float simInstancia = instanceSimilarityAlgorithm.calculate(rnf, caso.getRnf());
			System.out.println(" simMin: [" + simInstancia + "] ");
			
			//calcula a similaridade entre medidas
			float simMeasure = measureSimilarityAlgorithm.calculate(rnf, caso.getRnf());
			System.out.println(" simMedidas: [" + simMeasure + "] ");
			
			calculateGlobal(caso, simInstancia, simMeasure);
			/*********************************************************/
			
		}
		System.out.println("Finalizando calculo de similaridade **************************************\n\n");
	}

	private void calculateGlobal(Caso caso, float simInstancia, float simMeasure) {
		//calcula e indexa similaridade global
		float similaridade = (simInstancia * this.w1) + (simMeasure * this.w2);
		System.out.print(" simGlobal: [" + similaridade + "] ");
		
		//verifica se a similaridade é maior que o indicado
		if(similaridade >= similaridadeMinimaCasos){
			//encontrou um caso similar manda indexar
			System.out.print(" -> caso sugerido **");
			
			this.index(similaridade, caso);
		}
	}
	
	
	private void ajustarPesos() {
		List<Peso> pesos = pesoRepository.findAll();
		
		//AJUSTA pesos de similaridade semantica 
		int i = pesos.indexOf(new Peso(Constantes.SIMILARIDADE_LOCAL_SEMANTICA_W1));
		float w1 = i < 0 ? new Peso().getValor() : pesos.get(i).getValor();
		
		i = pesos.indexOf(new Peso(Constantes.SIMILARIDADE_LOCAL_SEMANTICA_W2));
		float w2 = i < 0 ? new Peso().getValor() : pesos.get(i).getValor();
		
		instanceSimilarityAlgorithm.w1 = w1;
		instanceSimilarityAlgorithm.w2 = w2;
		
		//AJUSTA pesos de similaridade de medidas 
		i = pesos.indexOf(new Peso(Constantes.SIMILARIDADE_LOCAL_MEDIDAS_W1));
		w1 = i < 0 ? new Peso().getValor() : pesos.get(i).getValor();
		
		i = pesos.indexOf(new Peso(Constantes.SIMILARIDADE_LOCAL_MEDIDAS_W2));
		w2 = i < 0 ? new Peso().getValor() : pesos.get(i).getValor();
		
		measureSimilarityAlgorithm.w1 = w1;
		measureSimilarityAlgorithm.w2 = w2;
		
		//AJUSTA pesos de similaridade global 
		i = pesos.indexOf(new Peso(Constantes.SIMILARIDADE_GLOBAL_W1));
		w1 = i < 0 ? new Peso().getValor() : pesos.get(i).getValor();
		
		i = pesos.indexOf(new Peso(Constantes.SIMILARIDADE_GLOBAL_W2));
		w2 = i < 0 ? new Peso().getValor() : pesos.get(i).getValor();
		
		this.w1 = w1;
		this.w2 = w2;
		
		//AJUSTA pesos de similaridade casos 
		i = pesos.indexOf(new Peso(Constantes.SIMILARIDADE_MINIMA_CASOS));
		similaridadeMinimaCasos = i < 0 ? new Peso().getValor() : pesos.get(i).getValor();
	}
	
	private void ajustesGeraisOtimizacao(){
		//seta as entidades de medidas na similaridadeNumerica
		numericSimilarityAlgorithm.setEntidadesMedida(entidadeRepository.findAll());
		
		//seta as instancias de numeric e instance em measure
		measureSimilarityAlgorithm.setInstanceSimilarityAlgorithm(instanceSimilarityAlgorithm);
		measureSimilarityAlgorithm.setNumericSimilarityAlgorithm(numericSimilarityAlgorithm);
		measureSimilarityAlgorithm.setEntidadesMedida(entidadeRepository.findAll());
		measureSimilarityAlgorithm.setMetodosMedida(metodoRepository.findAll());
		
		//seta uma nova base indexada
		this.setCasosIndexados(new ArrayList<Sugestao>());
	}
	
	private void printCaso(Caso caso) {
		//System.out.println("Dados do caso armazenado");
		System.out.println("\n********************************************************************************");
		System.out.println("\nId do Caso: [" + caso.getId() + "]\n ");
		
		System.out.println("Descrição do Problema:");
		printRNF(caso.getRnf());
		
		System.out.println("\nDescrição da Solução:");
		//System.out.println(" Resumo da Decisão: [" + (caso.getDecisao().getResumo().length() > 100 ? caso.getDecisao().getResumo().substring(0, 100) + "...": caso.getDecisao().getResumo().substring(0, caso.getDecisao().getResumo().length())) + "]\n ");
		System.out.println(" Resumo da Decisão: [" + caso.getDecisao().getResumo() + "]\n ");
	}

	private void printRNF(RNFMensuravel rnf) {
		System.out.println(" RNF: [" + rnf.getNome() + " -> " + rnf.getSubcaracteristica() + "] ");
		
		System.out.print(" Medidas: [" + rnf.getTipoMedida() + " -> ");
		int x = 0;
		
		for (Medida medida : rnf.getMedidas()) {
			if(x > 0 && x < rnf.getMedidas().size()){
				System.out.print(" " + rnf.getFuncao().getNome() + " ");
			}
			
			System.out.print(medida);
			
			x++;
		}
		
		System.out.print("]\n");
	}
}
