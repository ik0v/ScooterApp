package ik.scooter_app.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;


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

    @OneToMany(mappedBy = "scooter", cascade = {CascadeType.MERGE})
    private Set<User> users;

    public Scooter() {
        this.users = new HashSet<>();
    }

    public Scooter(String make, String model, double range) {
        this.make = make;
        this.model = model;
        this.range = range;
        this.users = new HashSet<>();
    }

    public Scooter(ScooterDto scooterDto) {
        this.make = scooterDto.make();
        this.model = scooterDto.model();
        this. range = scooterDto.range();
        this.users = new HashSet<>();
    }

    public ScooterDto toDto() {
        return new ScooterDto(make, model, range);
    }

    public User addUser(String  userName, double range) {
        User newUser = new User(userName, this, range);
        users.add(newUser);
        return newUser;
    }

}
