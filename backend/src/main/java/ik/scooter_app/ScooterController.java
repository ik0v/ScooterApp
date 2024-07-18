package ik.scooter_app;

import ik.scooter_app.model.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

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

    @DeleteMapping()
    ResponseEntity<?> deleteScooter(@RequestBody ScooterDto scooterDto, @RequestParam String username, @RequestParam String password) {
        if(!password.equals("pass")) {
            return ResponseEntity.badRequest().build();
        }
        service.deleteScooter(scooterDto);
        return ResponseEntity.noContent().build();
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
                    new ScooterDtoIncoming(scooterMake.strip(), scooterModel.strip()));
            return ResponseEntity.ok(scooterDtoOutgoing);
        } catch (IllegalArgumentException e ) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/makes")
    ResponseEntity<List<String>> getScooterMakes() {
        List<String> scooterMakes = service.getScooterMakes();
        return ResponseEntity.ok(scooterMakes);
    }

    @GetMapping("/models")
    ResponseEntity<List<String>> getScooterModels(@RequestParam String make) {
        List<String> scooterMakes = service.getScooterModels(make);
        return ResponseEntity.ok(scooterMakes);
    }

    @GetMapping("/leaderboard/range")
    ResponseEntity<List<ScooterDtoOutgoing>> getLeaderboardByRange() {
        try {
            List<ScooterDtoOutgoing> leaderboardByRange = service.getLeaderboardByRange();
            return ResponseEntity.ok(leaderboardByRange);
        } catch (IllegalArgumentException e ) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/leaderboard/ratio")
    ResponseEntity<List<ScooterDtoOutgoing>> getLeaderboardByRatio() {
        try {
            List<ScooterDtoOutgoing> leaderboardByRatio = service.getLeaderboardByRatio();
            return ResponseEntity.ok(leaderboardByRatio);
        } catch (IllegalArgumentException e ) {
            return ResponseEntity.notFound().build();
        }
    }

}
