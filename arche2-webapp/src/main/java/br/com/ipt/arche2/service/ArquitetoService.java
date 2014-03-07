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

import br.com.ipt.arche2.entity.Feedback;
import br.com.ipt.arche2.orda.entity.Arquiteto;
import br.com.ipt.arche2.repository.ArquitetoRepository;
import br.com.ipt.arche2.repository.FeedbackRepository;

@Component
@Path("/rest/arquiteto")
public class ArquitetoService {
	@Autowired
	protected ArquitetoRepository repository;
	
	@Autowired
	protected FeedbackRepository feedbackRepository;
	
	@POST
	@Path("/create")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response create(Arquiteto arquiteto){
		arquiteto.setId(null);
		
		repository.save(arquiteto);
		return Response.status(200).entity(arquiteto).build();
	}
	
	@GET
	@Path("/all")
	@Produces(MediaType.APPLICATION_JSON)
	public Response all(){
		List<Arquiteto> lista = repository.findAll();
		
		return Response.status(200).entity(lista).build();
	}
	
	@POST
	@Path("/update")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response update(Arquiteto arquiteto){
		repository.save(arquiteto);
		return Response.status(200).entity(arquiteto).build();
	}
	
	@POST
	@Path("/delete")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response delete(Arquiteto arquiteto){
		repository.delete(arquiteto);
		return Response.status(200).build();
	}

	@POST
	@Path("/feedback")
	@Produces(MediaType.APPLICATION_JSON)
	public Response feedback(Feedback f){
		feedbackRepository.save(f);
		
		return Response.status(200).build();
	}
	
}