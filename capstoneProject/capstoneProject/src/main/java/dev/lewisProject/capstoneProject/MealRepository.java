package dev.lewisProject.capstoneProject;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MealRepository extends MongoRepository<Meal, ObjectId> {

    Optional<Meal> findMealByMealName (String mealName);
}

