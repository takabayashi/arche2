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

import br.com.ipt.arche2.ornfm.entity.TipoMedida;
import br.com.ipt.arche2.repository.TipoMedidaRepository;

@Component
@Path("/rest/tipomedida")
public class TipoMedidaService {
	@Autowired
	protected TipoMedidaRepository repository;
	
	@POST
	@Path("/create")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response create(TipoMedida tipoMedida){
		repository.save(tipoMedida);
		return Response.status(200).entity(tipoMedida).build();
	}
	
	@GET
	@Path("/all")
	@Produces(MediaType.APPLICATION_JSON)
	public Response all(){
		List<TipoMedida> lista = repository.findAll();
		
		return Response.status(200).entity(lista).build();
	}
	
	@POST
	@Path("/update")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response update(TipoMedida tipoMedida){
		repository.save(tipoMedida);
		return Response.status(200).entity(tipoMedida).build();
	}
	
	@POST
	@Path("/delete")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response delete(TipoMedida tipoMedida){
		repository.delete(tipoMedida);
		return Response.status(200).build();
	}

	
}