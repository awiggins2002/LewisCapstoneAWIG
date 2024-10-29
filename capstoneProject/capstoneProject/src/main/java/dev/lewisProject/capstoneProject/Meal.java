package dev.lewisProject.capstoneProject;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "meals")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Meal {

    @Id
    private ObjectId id;

    private String mealName;

    private String timeStamp;

    private String weightOunces;

    private String calories;

    private String carbohydrates;

    private String sugar;

    private String totalFat;

    private String saturatedFat;

    private String unsaturatedFat;

    private String transFat;

    private String protein;

    private String vitaminA;

    private String vitaminB;

    private String vitaminC;

    private String calcium;

    private String cholesterol;

    private String sodium;

}
