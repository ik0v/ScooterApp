package ik.scooter_app.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter @Setter
@Entity(name = "owner")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private double range;

    @ManyToOne
    @JoinColumn(name = "scooter_id")
    private Scooter scooter;

//    @Column(nullable = false)
//    private LocalDate registrationDate;

    public User() {}

    public User(String name, Scooter scooter,  double range) {
        this.name = name;
        this.range = range;
        this.scooter = scooter;
    }


}
