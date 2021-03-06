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

import br.com.ipt.arche2.orda.entity.DecisaoProjeto;
import br.com.ipt.arche2.repository.DecisaoProjetoRepository;

@Component
@Path("/rest/decisao")
public class DecisaoProjetoService {
	@Autowired
	protected DecisaoProjetoRepository repository;
	
	@POST
	@Path("/create")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response create(DecisaoProjeto decisao){
		repository.save(decisao);
		return Response.status(200).entity(decisao).build();
	}
	
	@GET
	@Path("/all")
	@Produces(MediaType.APPLICATION_JSON)
	public Response all(){
		List<DecisaoProjeto> lista = repository.findAll();
		
		return Response.status(200).entity(lista).build();
	}
	
	@POST
	@Path("/update")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response update(DecisaoProjeto decisao){
		repository.save(decisao);
		return Response.status(200).entity(decisao).build();
	}
	
	@POST
	@Path("/delete")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response delete(DecisaoProjeto decisao){
		repository.delete(decisao);
		return Response.status(200).build();
	}

	
}