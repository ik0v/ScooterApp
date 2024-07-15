package ik.scooter_app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Repository;

@SpringBootApplication
public class ScooterRangeApp {

	public static void main(String[] args) {
		SpringApplication.run(ScooterRangeApp.class, args);
	}

	@Repository
	public static class ScooterRepository {
	}
}
