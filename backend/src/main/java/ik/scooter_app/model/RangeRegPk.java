package ik.scooter_app.model;

import jakarta.persistence.Embeddable;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class RangeRegPk implements Serializable {

    private int scooter;
    private int user;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RangeRegPk that = (RangeRegPk) o;
        return scooter == that.scooter && user == that.user;
    }

    @Override
    public int hashCode() {
        return Objects.hash(scooter, user);
    }
}
