package ik.scooter_app;

import ik.scooter_app.model.User;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {
    UserDbRepository userDbRepo;

    public UserRepository(UserDbRepository userDbRepo) {
        this.userDbRepo = userDbRepo;
    }

    public User addUser(String username) {
        userDbRepo.save(new User(username));





    }
}
