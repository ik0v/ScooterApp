package ik.scooter_app;

import ik.scooter_app.model.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScooterService {

    ScooterRepository scooterRepo;

    public User addUser(String username, Scooter scooter, double range) {
        return scooterRepo.addUser(username, scooter, range);
    }

    public ScooterService(ScooterRepository scooterRepo) {
        this.scooterRepo = scooterRepo;
    }

    public Scooter createScooter(ScooterDto scooterDto) {
        return scooterRepo.addScooter(scooterDto);
    }

    public ScooterDtoOutgoing getScooter(ScooterDtoIncoming scooterDtoIncoming) {
        Scooter scooter = scooterRepo.getScooter(scooterDtoIncoming);
        if (scooter == null) {
            throw new IllegalArgumentException();
        }
        return scooter.toScooterDtoOutgoing();
    }

    public Scooter addScooter(ScooterDto scooterDto) {
        return scooterRepo.addScooter(scooterDto);
    }

    public void addRange(int id, UserDto userDto) {
        var scooterOptional = scooterRepo.getScooter(id);
        if (scooterOptional.isPresent()) {
            Scooter scooter = scooterOptional.get();
            scooter.addUser(userDto.name(), userDto.range());
            scooterRepo.updateScooter(scooter);
        } else {
            throw new IllegalArgumentException("Scooter was not found");
        }
    }

    public List<ScooterDtoOutgoing> getLeaderboardByRange() {
        List<Scooter> scooters = scooterRepo.getLeaderboardByRange();
        return scooters
                .stream()
                .map(Scooter::toScooterDtoOutgoing)
                .toList();
    }

    public List<ScooterDtoOutgoing> getLeaderboardByRatio() {
        List<Scooter> scooters = scooterRepo.getLeaderboardByRatio();
        return scooters
                .stream()
                .map(Scooter::toScooterDtoOutgoing)
                .toList();
    }

    public List<String> getScooterMakes() {
        return scooterRepo.getScooterMakes();
    }

    public List<String> getScooterModels(String make) {
        return scooterRepo.getScooterModels(make);
    }

    public void deleteScooter(ScooterDto scooterDto) {
        scooterRepo.deleteScooter(scooterDto);
    }
}
