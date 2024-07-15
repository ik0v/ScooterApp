package ik.scooter_app;

import ik.scooter_app.model.Scooter;
import ik.scooter_app.model.ScooterDto;
import ik.scooter_app.model.ScooterDtoIncoming;
import ik.scooter_app.model.User;
import org.springframework.stereotype.Service;

@Service
public class ScooterService {

    ScooterRepository scooterRepo;
    UserRepository userRepo;

    public User addUser(String username, Scooter scooter, double range) {
        return scooterRepo.addUser(username, scooter, range);
    }

    public ScooterService(ScooterRepository scooterRepo, UserRepository userRepo) {
        this.scooterRepo = scooterRepo;
        this.userRepo = userRepo;
    }

    public Scooter createScooter(ScooterDto scooterDto) {
        return scooterRepo.addScooter(scooterDto);
    }

    public ScooterDto getScooter(ScooterDtoIncoming scooterDtoIncoming) {
        Scooter scooter = scooterRepo.getScooter(scooterDtoIncoming);
        if (scooter == null) {
            throw new IllegalArgumentException();
        }
        return scooter.toDto();
    }

    public Scooter addScooter(ScooterDto scooterDto) {
        return scooterRepo.addScooter(scooterDto);
    }
}
