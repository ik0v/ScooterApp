package ik.scooter_app.model;

import jakarta.validation.constraints.Positive;

public record ScooterDto(String make, String model, @Positive double range) {
}
