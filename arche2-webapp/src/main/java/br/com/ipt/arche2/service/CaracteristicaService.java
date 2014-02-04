package br.com.ipt.arche2.service;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;

import br.com.ipt.arche2.ornfm.entity.Caracteristica;
import br.com.ipt.arche2.repository.CaracteristicaRepository;

@Component
@Path("/rest/caracteristica")
public class CaracteristicaService {
	@Autowired
	protected CaracteristicaRepository repository;
	
	@POST
	@Path("/create")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response create(Caracteristica caracteristica){
		repository.save(caracteristica);
		return Response.status(200).entity(caracteristica).build();
	}
	
	@GET
	@Path("/all")
	@Produces(MediaType.APPLICATION_JSON)
	public Response all(){
		List<Caracteristica> lista = repository.findAll();
		
		return Response.status(200).entity(lista).build();
	}
	
	@GET
	@Path("/all")
	@Produces(MediaType.APPLICATION_JSON)
	public Response all(@QueryParam ("page") int page, @QueryParam ("start") int start, @QueryParam ("limit") int limit){
		Page<Caracteristica> lista = repository.findAll(new PageRequest(page, limit));
		
		return Response.status(200).entity(lista.getContent()).build();
	}
	
	@POST
	@Path("/update")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response update(Caracteristica caracteristica){
		repository.save(caracteristica);
		return Response.status(200).entity(caracteristica).build();
	}
	
	@POST
	@Path("/delete")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response delete(Caracteristica caracteristica){
		repository.delete(caracteristica);
		return Response.status(200).build();
	}

	
}