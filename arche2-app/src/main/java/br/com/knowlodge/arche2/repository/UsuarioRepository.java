package br.com.knowlodge.arche2.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import br.com.knowlodge.arche2.model.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario, String> {
	public Usuario findByNome(String firstName);
	public List<Usuario> findBySobrenome(String lastName);
}
