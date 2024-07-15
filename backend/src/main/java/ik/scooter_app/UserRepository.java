package ik.scooter_app;

import ik.scooter_app.model.Scooter;
import ik.scooter_app.model.User;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {
    UserDbRepository userDbRepo;

    public UserRepository(UserDbRepository userDbRepo) {
        this.userDbRepo = userDbRepo;
    }

//    public User addUser(String username, Scooter scooter, double range) {
//        return userDbRepo.save(new User(username, scooter, range ));
//    }
}
