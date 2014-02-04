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

import br.com.ipt.arche2.ornfm.entity.SubCaracteristica;
import br.com.ipt.arche2.repository.SubCaracteristicaRepository;

@Component
@Path("/rest/subcaracteristica")
public class SubCaracteristicaService {
	@Autowired
	protected SubCaracteristicaRepository repository;
	
	@POST
	@Path("/create")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response create(SubCaracteristica subCaracteristica){
		repository.save(subCaracteristica);
		return Response.status(200).entity(subCaracteristica).build();
	}
	
	@GET
	@Path("/all")
	@Produces(MediaType.APPLICATION_JSON)
	public Response all(){
		List<SubCaracteristica> lista = repository.findAll();
		
		return Response.status(200).entity(lista).build();
	}
	
	@POST
	@Path("/update")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response update(SubCaracteristica subCaracteristica){
		repository.save(subCaracteristica);
		return Response.status(200).entity(subCaracteristica).build();
	}
	
	@POST
	@Path("/delete")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response delete(SubCaracteristica subCaracteristica){
		repository.delete(subCaracteristica);
		return Response.status(200).build();
	}

	
}