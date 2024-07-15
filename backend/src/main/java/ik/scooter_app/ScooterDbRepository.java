package ik.scooter_app;

import ik.scooter_app.model.Scooter;
import org.springframework.data.repository.ListCrudRepository;

import java.util.Optional;

public interface ScooterDbRepository extends ListCrudRepository<Scooter, Integer> {

    public Scooter getScootersByMakeAndAndModel(String make, String model);

}
