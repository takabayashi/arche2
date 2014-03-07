package br.com.ipt.arche2.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import br.com.ipt.arche2.orda.entity.Arquiteto;

public interface ArquitetoRepository extends MongoRepository<Arquiteto, String> {
	public Arquiteto findByNome(String firstName);
}
