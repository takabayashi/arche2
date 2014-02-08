package br.com.ipt.arche2.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import br.com.ipt.arche2.entity.Caso;

public interface CasoRepository extends MongoRepository<Caso, String> {

}
