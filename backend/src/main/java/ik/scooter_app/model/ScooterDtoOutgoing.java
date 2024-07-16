package ik.scooter_app.model;

import java.util.Set;

public record ScooterDtoOutgoing(int id, String make, String model, double range, Set<UserDto> users) {
}
