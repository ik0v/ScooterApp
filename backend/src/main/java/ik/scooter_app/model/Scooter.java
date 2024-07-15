package ik.scooter_app.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Entity
@Getter @Setter
public class Scooter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @Column(nullable = false)
    private String make;
    @Column(nullable = false)
    private String model;
    @Column(nullable = false)
    private double range;

    public Scooter() {
    }

    public Scooter(String make, String model, double range) {
        this.make = make;
        this.model = model;
        this.range = range;
    }

    public Scooter(ScooterDto scooterDto) {
        this.make = scooterDto.make();
        this.model = scooterDto.model();
        this. range = scooterDto.range();
    }

    public ScooterDto toDto() {
        return new ScooterDto(make, model, range);
    }

}
