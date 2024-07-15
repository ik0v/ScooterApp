package ik.scooter_app;

import ik.scooter_app.model.User;
import org.springframework.data.repository.ListCrudRepository;

public interface UserDbRepository extends ListCrudRepository<User, Integer>  {
}

