package br.com.ipt.arche2.similarity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import br.com.ipt.arche2.ornfm.entity.Entidade;
import br.com.ipt.arche2.repository.EntidadeRepository;

public abstract class GenericAlgorithm {
	@Autowired
	protected static EntidadeRepository entidadeRepository;

	protected static List<Entidade> entidadesMedida;
	
	public GenericAlgorithm() {
		super();
		entidadesMedida = entidadeRepository.findAll();
	}
}
