package br.com.ipt.arche2.service;

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

import br.com.ipt.arche2.entity.Peso;
import br.com.ipt.arche2.repository.PesoRepository;

@Component
@Path("/rest/peso")
public class PesoService {
	@Autowired
	protected PesoRepository repository;
	
	@POST
	@Path("/create")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response create(Peso peso){
		repository.save(peso);
		return Response.status(200).entity(peso).build();
	}
	
	@GET
	@Path("/all")
	@Produces(MediaType.APPLICATION_JSON)
	public Response all(){
		List<Peso> lista = repository.findAll();
		
		return Response.status(200).entity(lista).build();
	}
	
	@POST
	@Path("/update")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response update(Peso peso){
		repository.save(peso);
		return Response.status(200).entity(peso).build();
	}
	
	@POST
	@Path("/delete")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response delete(Peso peso){
		repository.delete(peso);
		return Response.status(200).build();
	}

	
}