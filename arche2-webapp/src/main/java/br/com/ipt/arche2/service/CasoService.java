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
import br.com.ipt.arche2.entity.Sugestao;
import br.com.ipt.arche2.ornfm.entity.RNFMensuravel;
import br.com.ipt.arche2.repository.CasoRepository;

@Component
@Path("/rest/caso")
public class CasoService {
	@Autowired
	protected CasoRepository repository;
	
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