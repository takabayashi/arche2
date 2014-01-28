package br.com.ipt.arche2.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import br.com.ipt.arche2.entity.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario, String> {
	public Usuario findByNome(String firstName);
	public List<Usuario> findBySobrenome(String lastName);
}
