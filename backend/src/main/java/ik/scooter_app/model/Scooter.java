package ik.scooter_app.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;


@Entity
@Table(uniqueConstraints = { @UniqueConstraint(columnNames = { "make", "model" }) })
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
        this.make = make.toUpperCase();
        this.model = model.toUpperCase();
        this.range = range;
        this.users = new HashSet<>();
    }

    public Scooter(ScooterDto scooterDto) {
        this.make = scooterDto.make().toUpperCase();
        this.model = scooterDto.model().toUpperCase();
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

    public ScooterDtoOutgoing toScooterDtoOutgoing() {
        Set<UserDto> userDtos = users.stream().map(User::toUserDto).collect(Collectors.toSet());
        return new ScooterDtoOutgoing(id, make, model, range, userDtos);
    }

}
