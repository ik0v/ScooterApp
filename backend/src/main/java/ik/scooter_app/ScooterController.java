package ik.scooter_app;

import ik.scooter_app.model.Scooter;
import ik.scooter_app.model.ScooterDto;
import ik.scooter_app.model.ScooterDtoIncoming;
import ik.scooter_app.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@CrossOrigin
@RestController
@RequestMapping("api/scooters")
public class ScooterController {

    ScooterService service;

    public ScooterController(ScooterService service) {
        this.service = service;
    }

    @PostMapping()
    ResponseEntity<ScooterDto> addScooter(@RequestBody ScooterDto scooterDto, @RequestParam String username) {
        Scooter scooter = service.addScooter(scooterDto);
        int scooterId = scooter.getId();
        User user = service.addUser(username, scooter, scooterDto.range());
        URI location = URI.create("/api/carts/" + scooterId);
        return ResponseEntity.created(location).body(scooter.toDto());
    }

    @GetMapping()
    ResponseEntity<ScooterDto> getScooterRange(@RequestParam String scooterMake, @RequestParam String scooterModel) {
        try {
            ScooterDto scooterDto = service.getScooter(new ScooterDtoIncoming(scooterMake.strip(), scooterModel.strip()));
            return ResponseEntity.ok(scooterDto);
        } catch (IllegalArgumentException e ) {
            return ResponseEntity.notFound().build();
        }
    }

}
