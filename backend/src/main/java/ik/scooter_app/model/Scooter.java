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
    private double claimedRange;
    @Column(nullable = true)
    private Double realRange;

    @OneToMany(mappedBy = "scooter", cascade = {CascadeType.ALL})
    private Set<User> users;

    public Scooter() {
        this.users = new HashSet<>();
        this.realRange = 0d;
    }

    public Scooter(String make, String model, double claimedRange) {
        this.make = make;
        this.model = model;
        this.claimedRange = claimedRange;
        this.realRange = 0d;
        this.users = new HashSet<>();
    }

    public Scooter(ScooterDto scooterDto) {
        this.make = scooterDto.make();
        this.model = scooterDto.model();
        this.claimedRange = scooterDto.range();
        this.realRange = 0d;
        this.users = new HashSet<>();
    }

    public ScooterDto toDto() {
        return new ScooterDto(make, model, claimedRange);
    }

    public User addUser(String  userName, double range) {
        User newUser = new User(userName, this, range);
        realRange = users.isEmpty() ? range : (realRange * users.size() + range) / (users.size() + 1);
        System.out.println(realRange);
        users.add(newUser);
        return newUser;
    }

    public ScooterDtoOutgoing toScooterDtoOutgoing() {
        Set<UserDto> userDtos = users.stream().map(User::toUserDto).collect(Collectors.toSet());
        return new ScooterDtoOutgoing(id, make, model, claimedRange, realRange, userDtos);
    }

}
