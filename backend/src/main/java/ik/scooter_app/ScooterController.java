package ik.scooter_app;

import ik.scooter_app.model.*;
import org.springframework.http.HttpStatus;
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
//        User user = service.addUser(username, scooter, scooterDto.range());
        URI location = URI.create("/api/scooters/" + scooterId);
        return ResponseEntity.created(location).body(scooter.toDto());
    }

    @PostMapping("/{id}")
    ResponseEntity<UserDto> addRange(@PathVariable int id, @RequestBody UserDto userDto) {
        try {
            service.addRange(id, userDto);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping()
    ResponseEntity<ScooterDtoOutgoing> getScooterRange(@RequestParam String scooterMake,
                                                       @RequestParam String scooterModel) {
        try {
            ScooterDtoOutgoing scooterDtoOutgoing = service.getScooter(
                    new ScooterDtoIncoming(scooterMake.strip().toUpperCase(), scooterModel.strip().toUpperCase()));
            return ResponseEntity.ok(scooterDtoOutgoing);
        } catch (IllegalArgumentException e ) {
            return ResponseEntity.notFound().build();
        }
    }

}
