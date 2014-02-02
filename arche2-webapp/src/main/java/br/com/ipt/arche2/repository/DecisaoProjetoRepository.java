package br.com.ipt.arche2.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import br.com.ipt.arche2.orda.entity.DecisaoProjeto;

public interface DecisaoProjetoRepository extends MongoRepository<DecisaoProjeto, String> {

}
