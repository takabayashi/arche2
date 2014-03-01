package br.com.ipt.arche2.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.ipt.arche2.entity.Caso;
import br.com.ipt.arche2.entity.Peso;
import br.com.ipt.arche2.entity.Sugestao;
import br.com.ipt.arche2.ornfm.entity.Medida;
import br.com.ipt.arche2.ornfm.entity.RNFMensuravel;
import br.com.ipt.arche2.repository.CasoRepository;
import br.com.ipt.arche2.repository.EntidadeRepository;
import br.com.ipt.arche2.repository.PesoRepository;
import br.com.ipt.arche2.similarity.Constantes;
import br.com.ipt.arche2.similarity.InstanceSimilarityAlgorithm;
import br.com.ipt.arche2.similarity.MeasureSimilarityAlgorithm;
import br.com.ipt.arche2.similarity.NearestNeighbourAlgorithm;
import br.com.ipt.arche2.similarity.NumericSimilarityAlgorithm;

@Component
@Path("/rest/caso")
public class CasoService {
	@Autowired
	protected CasoRepository repository;
	
	@Autowired
	protected PesoRepository pesoRepository;
	
	@Autowired
	protected EntidadeRepository entidadeRepository;
	
	@Autowired
	protected InstanceSimilarityAlgorithm instanceSimilarityAlgorithm;
	
	@Autowired
	protected NumericSimilarityAlgorithm numericSimilarityAlgorithm;
	
	@Autowired
	protected MeasureSimilarityAlgorithm measureSimilarityAlgorithm;
	
	@Autowired
	protected NearestNeighbourAlgorithm nearestNeighbourAlgorithm;
	
	protected float similaridadeMinimaCasos;
	
	@POST
	@Path("/create")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response create(Caso caso){
		
		//formata a data de cadastro
		SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		caso.setDataCadastro(format.format(new Date()));
		
		//inclui a data do histórico
		String historico = caso.getDecisao().getHistorico();
		
		if(historico.isEmpty()){
			historico = " - Criação inicial";
		}
		
		historico = caso.getDataCadastro() + historico;
		caso.getDecisao().setHistorico(historico);
		
		repository.save(caso);
		return Response.status(200).entity(caso).build();
	}
	
	@POST
	@Path("/similares")
	@Produces(MediaType.APPLICATION_JSON)
	public Response similares(RNFMensuravel rnf){
		List<Caso> listaCasos = repository.findAll();
		
		ajustarPesos();
		ajustesGeraisOtimizacao();
		
		System.out.println("Iniciando calculo de similaridade **************************************");
		
		///aplica a lógica para devolver apenas os casos similares
		for (Caso caso : listaCasos) {
			
			printCaso(caso);
			
			/**
			 *  Aqui inicia a lógica para calculo de similaridades
			 */
			//calcula a similaridade semantica
			float simInstancia = instanceSimilarityAlgorithm.calculate(rnf, caso.getRnf());
			System.out.println("\t\tsimInstancia: [" + simInstancia + "] ");
			
			//calcula a similaridade entre medidas
			float simMeasure = measureSimilarityAlgorithm.calculate(rnf, caso.getRnf());
			System.out.println("\t\tsimMeasure: [" + simMeasure + "] ");
			
			//calcula e indexa similaridade global
			float similaridade = (simInstancia * nearestNeighbourAlgorithm.w1) + (simMeasure * nearestNeighbourAlgorithm.w2);
			System.out.println("\t\tsimilaridadeGlobal: [" + similaridade + "]\n ");
			
			//verifica se a similaridade é maior que o indicado
			if(similaridade >= similaridadeMinimaCasos){
				//encontrou um caso similar manda indexar
				nearestNeighbourAlgorithm.index(similaridade, caso);
			}
			/*********************************************************/
			
		}
		
		System.out.println("Finalizando calculo de similaridade **************************************\n\n");
		
		
		return Response.status(200).entity(nearestNeighbourAlgorithm.getCasosIndexados()).build();
	}

	private void printCaso(Caso caso) {
		System.out.println("Dados do caso armazenado");
		System.out.println("\tCaso: [" + caso.getId() + "] ");
		System.out.println("\tSolucao: [" + (caso.getDecisao().getResumo().length() > 100 ? caso.getDecisao().getResumo().substring(0, 100): caso.getDecisao().getResumo().substring(0, caso.getDecisao().getResumo().length())) + "] ");
		System.out.println("\tProblema: [" + caso.getRnf().getNome() + " - >" + caso.getRnf().getSubcaracteristica() + "] ");
		
		System.out.print("\t" + caso.getRnf().getTipoMedida() + ": [");
		int x = 0;
		
		for (Medida medida : caso.getRnf().getMedidas()) {
			if(x > 0 && x < caso.getRnf().getMedidas().size()){
				System.out.print(" " + caso.getRnf().getFuncao().getNome() + " ");
			}
			
			System.out.print(medida);
			
			x++;
		}
		
		System.out.print("]\n");
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
		
		nearestNeighbourAlgorithm.w1 = w1;
		nearestNeighbourAlgorithm.w2 = w2;
		
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
		
		//seta uma nova base indexada
		nearestNeighbourAlgorithm.setCasosIndexados(new ArrayList<Sugestao>());
	}
	
	@POST
	@Path("/update")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response update(Caso caso){
		//inclui a data de alteracao do cadastro
		//formata a data de cadastro
		SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		caso.setDataUltimaAlteracao(format.format(new Date()));
				
		repository.save(caso);
		return Response.status(200).entity(caso).build();
	}
	
	@POST
	@Path("/delete")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response delete(String id){
		Caso caso = new Caso();
		caso.setId(id);
		
		repository.delete(caso);
		return Response.status(200).build();
	}
	
	@GET
	@Path("/deleteAll")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response delete(){
		repository.deleteAll();
		
		return Response.status(200).build();
	}

	
}