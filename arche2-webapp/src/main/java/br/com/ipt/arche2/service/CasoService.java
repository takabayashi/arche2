package br.com.ipt.arche2.service;

import java.text.SimpleDateFormat;
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
import br.com.ipt.arche2.entity.Sugestao;
import br.com.ipt.arche2.ornfm.entity.RNFMensuravel;
import br.com.ipt.arche2.repository.CasoRepository;
import br.com.ipt.arche2.similarity.NearestNeighbourAlgorithm;

@Component
@Path("/rest/caso")
public class CasoService {
	@Autowired
	protected CasoRepository repository;
	
	@Autowired
	protected NearestNeighbourAlgorithm nearestNeighbourAlgorithm;
	
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
		List<Sugestao> sugestoes = obterCasosSimilares(rnf);
		return Response.status(200).entity(sugestoes).build();
	}

	private List<Sugestao> obterCasosSimilares(RNFMensuravel rnf) {
		List<Caso> listaCasos = repository.findAll();
		
		//executa oos calculo de similaridade
		nearestNeighbourAlgorithm.calculate(rnf, listaCasos);
		
		//retorna os casos similares
		List<Sugestao> sugestoes = nearestNeighbourAlgorithm.getCasosIndexados();
		
		return sugestoes;
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