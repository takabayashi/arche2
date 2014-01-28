package br.com.ipt.arche2.service;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.core.Application;

public class RestEasyResourceRegister extends Application{

	 @Override
	    public Set<Class<?>> getClasses() {
	        Set<Class<?>> classes = new HashSet<Class<?>>();
	        classes.add(ExampleService.class);
	        return classes;
	    }
	
}
