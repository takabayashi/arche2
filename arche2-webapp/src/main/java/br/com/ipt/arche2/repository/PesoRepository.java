package br.com.ipt.arche2.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import br.com.ipt.arche2.entity.Peso;

public interface PesoRepository extends MongoRepository<Peso, String> {

}
