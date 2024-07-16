package ik.scooter_app;

import ik.scooter_app.model.Scooter;
import ik.scooter_app.model.ScooterDto;
import ik.scooter_app.model.ScooterDtoIncoming;
import ik.scooter_app.model.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class ScooterRepository {
    ScooterDbRepository scooterDbRepo;

    public ScooterRepository(ScooterDbRepository scooterDbRepo) {
        this.scooterDbRepo = scooterDbRepo;
    }

    public Scooter addScooter(ScooterDto scooterDto) {
        return scooterDbRepo.save(new Scooter(scooterDto));
    }

    public void updateScooter(Scooter scooter) {
        scooterDbRepo.save(scooter);
    }

    public Scooter getScooter(ScooterDtoIncoming sDi) {
        return scooterDbRepo.getScootersByMakeAndAndModel(sDi.make(), sDi.model());
    }

    public Optional<Scooter> getScooter(int id) {
        return scooterDbRepo.findById(id);
    }

    public User addUser(String username, Scooter scooter, double range) {
        User user = scooter.addUser(username, range);
        scooterDbRepo.save(scooter);
        return user;
    }


}
