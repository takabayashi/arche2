package br.com.ipt.arche2.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import br.com.ipt.arche2.ornfm.entity.TipoMedida;

public interface TipoMedidaRepository extends MongoRepository<TipoMedida, String> {

}
