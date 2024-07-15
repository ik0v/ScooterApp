package ik.scooter_app;

import ik.scooter_app.model.Scooter;
import ik.scooter_app.model.ScooterDto;
import ik.scooter_app.model.ScooterDtoIncoming;
import ik.scooter_app.model.User;
import org.springframework.stereotype.Repository;

@Repository
public class ScooterRepository {
    ScooterDbRepository scooterDbRepo;

    public ScooterRepository(ScooterDbRepository scooterDbRepo) {
        this.scooterDbRepo = scooterDbRepo;
    }

    public Scooter addScooter(ScooterDto scooterDto) {
        return scooterDbRepo.save(new Scooter(scooterDto));
    }

    public void registerRange(Scooter scooter, User user) {
    }

    public Scooter getScooter(ScooterDtoIncoming sDi) {
        return scooterDbRepo.getScootersByMakeAndAndModel(sDi.make(), sDi.model());
    }


}
