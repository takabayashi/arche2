package br.com.ipt.arche2.service;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.core.Application;

import br.com.ipt.arche2.ornfm.entity.Caracteristica;
import br.com.ipt.arche2.ornfm.entity.SubCaracteristica;

public class RestEasyResourceRegister extends Application{

	 @Override
	    public Set<Class<?>> getClasses() {
	        Set<Class<?>> classes = new HashSet<Class<?>>();
	        classes.add(MedidaService.class);
	        classes.add(ExampleService.class);
	        classes.add(EntidadeService.class);
	        classes.add(MetodoService.class);
	        classes.add(CasoService.class);
	        classes.add(DecisaoProjetoService.class);
	        classes.add(UsuarioService.class);
	        classes.add(Caracteristica.class);
	        classes.add(SubCaracteristica.class);
	        return classes;
	    }
	
}
