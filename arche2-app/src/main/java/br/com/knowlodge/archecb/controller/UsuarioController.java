package br.com.knowlodge.archecb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.knowlodge.arche2.model.Usuario;
import br.com.knowlodge.arche2.repository.UsuarioRepository;

@Controller
@RequestMapping("/usuarios/*")
public class UsuarioController {

	@Autowired
	protected UsuarioRepository repository;
	
	@RequestMapping(value = "/all")
	@ResponseBody
	public List<Usuario> listAll() {
		return repository.findAll();
	}
	
	@RequestMapping(value = "/save", method = { RequestMethod.POST})
	@ResponseBody
	public void save(@RequestBody Usuario usuario) {
		repository.save(usuario);
	}

}
