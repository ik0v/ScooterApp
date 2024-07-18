package ik.scooter_app;

import ik.scooter_app.model.*;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;
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

    public List<Scooter> getLeaderboardByRange() {
        return scooterDbRepo.findTop10ByOrderByRealRangeDesc();
    }

    public List<Scooter> getLeaderboardByRatio() {
        Pageable topTen = PageRequest.of(0, 10);
        return scooterDbRepo.findTop10ByRealToClaimedRangeRatio(topTen);
    }

    public List<String> getScooterMakes() {
        return scooterDbRepo.findDistinctMakes();
    }

    public List<String> getScooterModels(String make) {
        return scooterDbRepo.findByMake(make).stream().map(Scooter::getModel).toList();
    }

    public void deleteScooter(ScooterDto scooterDto) {
        scooterDbRepo.delete(scooterDbRepo.getScootersByMakeAndAndModel(scooterDto.make(), scooterDto.model()));
    }
}
