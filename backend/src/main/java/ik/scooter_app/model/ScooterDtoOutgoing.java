package ik.scooter_app.model;

import java.util.Set;

public record ScooterDtoOutgoing(int id, String make, String model, double claimedRange, Double realRange, Set<UserDto> users) {
}
