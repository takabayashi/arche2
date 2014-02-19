package br.com.ipt.arche2.service;

import java.util.ArrayList;
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
import br.com.ipt.arche2.ornfm.entity.RNFMensuravel;
import br.com.ipt.arche2.repository.CasoRepository;
import br.com.ipt.arche2.repository.PesoRepository;
import br.com.ipt.arche2.similarity.Constantes;
import br.com.ipt.arche2.similarity.InstanceSimilarityAlgorithm;
import br.com.ipt.arche2.similarity.NumericSimilarityAlgorithm;

@Component
@Path("/rest/caso")
public class CasoService {
	@Autowired
	protected CasoRepository repository;
	
	@Autowired
	protected PesoRepository pesoRepository;
	
	@Autowired
	protected InstanceSimilarityAlgorithm instanceSimilarityAlgorithm;
	
	@Autowired
	protected NumericSimilarityAlgorithm numericSimilarityAlgorithm;
	
	protected float similaridadeMinimaCasos = 0.5f;
	
	@POST
	@Path("/create")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response create(Caso caso){
		repository.save(caso);
		return Response.status(200).entity(caso).build();
	}
	
	@POST
	@Path("/similares")
	@Produces(MediaType.APPLICATION_JSON)
	public Response similares(RNFMensuravel rnf){
		List<Caso> listaCasos = repository.findAll();
		
		ajustarPesos();
		
		List<Sugestao> sugestoes = new ArrayList<Sugestao>();
		///aplica a lógica para devolver apenas os casos similares
		for (Caso caso : listaCasos) {
			float similaridade = 98.05f;
			
			/**
			 *  Aqui inicia a lógica para calculo de similaridades
			 */
			
			
			
			//verifica se a similaridade é maior que o indicado
			if(similaridade >= 50){
				//encontrou um caso similar
				sugestoes.add(new Sugestao(caso, similaridade));
			}
		}
		
		return Response.status(200).entity(sugestoes).build();
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
		
		//AJUSTA pesos de similaridade numerica 
		i = pesos.indexOf(new Peso(Constantes.SIMILARIDADE_LOCAL_SEMANTICA_W1));
		w1 = i < 0 ? new Peso().getValor() : pesos.get(i).getValor();
		
		i = pesos.indexOf(new Peso(Constantes.SIMILARIDADE_LOCAL_SEMANTICA_W2));
		w2 = i < 0 ? new Peso().getValor() : pesos.get(i).getValor();
		
		numericSimilarityAlgorithm.w1 = w1;
		numericSimilarityAlgorithm.w2 = w2;
		
		//AJUSTA pesos de similaridade de medidas 
		i = pesos.indexOf(new Peso(Constantes.SIMILARIDADE_LOCAL_MEDIDAS_W1));
		w1 = i < 0 ? new Peso().getValor() : pesos.get(i).getValor();
		
		i = pesos.indexOf(new Peso(Constantes.SIMILARIDADE_LOCAL_MEDIDAS_W2));
		w2 = i < 0 ? new Peso().getValor() : pesos.get(i).getValor();
		
		//numericSimilarityAlgorithm.w1 = numericLocalW1;
		//numericSimilarityAlgorithm.w2 = numericLocalW2;
		
		//AJUSTA pesos de similaridade global 
		i = pesos.indexOf(new Peso(Constantes.SIMILARIDADE_GLOBAL_W1));
		w1 = i < 0 ? new Peso().getValor() : pesos.get(i).getValor();
		
		i = pesos.indexOf(new Peso(Constantes.SIMILARIDADE_GLOBAL_W2));
		w2 = i < 0 ? new Peso().getValor() : pesos.get(i).getValor();
		
		//numericSimilarityAlgorithm.w1 = numericLocalW1;
		//numericSimilarityAlgorithm.w2 = numericLocalW2;
		
		//AJUSTA pesos de similaridade casos 
		i = pesos.indexOf(new Peso(Constantes.SIMILARIDADE_MINIMA_CASOS));
		similaridadeMinimaCasos = i < 0 ? new Peso().getValor() : pesos.get(i).getValor();

	}
	
	@POST
	@Path("/update")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response update(Caso caso){
		repository.save(caso);
		return Response.status(200).entity(caso).build();
	}
	
	@POST
	@Path("/delete")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response delete(Caso caso){
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