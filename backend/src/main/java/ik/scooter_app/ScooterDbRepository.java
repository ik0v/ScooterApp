package ik.scooter_app;

import ik.scooter_app.model.Scooter;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;

public interface ScooterDbRepository extends ListCrudRepository<Scooter, Integer> {

    public Scooter getScootersByMakeAndAndModel(String make, String model);

    @Query("SELECT s FROM Scooter s ORDER BY s.realRange DESC NULLS LAST LIMIT 10")
    List<Scooter> findTop10ByOrderByRealRangeDesc();

    @Query("SELECT s FROM Scooter s ORDER BY (s.realRange / s.claimedRange) DESC NULLS LAST")
    List<Scooter> findTop10ByRealToClaimedRangeRatio(Pageable pageable);


    @Query("SELECT DISTINCT s.make FROM Scooter s")
    List<String> findDistinctMakes();

    List<Scooter> findByMake(String make);

}
