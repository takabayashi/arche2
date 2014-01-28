package br.com.ipt.arche2.service;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.ipt.arche2.entity.Usuario;
import br.com.ipt.arche2.repository.UsuarioRepository;

@Component
@Path("/rest")
public class ExampleService {
	@Autowired
	protected UsuarioRepository repository;
	
	@POST
	@Path("/usuarios/novo")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response methodExample(Usuario usuario){
		repository.save(usuario);
		
		return Response.status(201).entity(usuario).build();
	}
	
	@GET
	@Path("/usuarios/all")
	@Produces(MediaType.APPLICATION_JSON)
	public Response methodExample(){
		return Response.status(200).entity(repository.findAll()).build();
	}
	
}