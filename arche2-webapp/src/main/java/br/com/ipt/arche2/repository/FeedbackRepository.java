package br.com.ipt.arche2.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import br.com.ipt.arche2.entity.Feedback;

public interface FeedbackRepository extends MongoRepository<Feedback, String> {
}
