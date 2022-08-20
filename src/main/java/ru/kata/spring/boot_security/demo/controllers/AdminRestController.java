package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.models.User;
import ru.kata.spring.boot_security.demo.services.UserService;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminRestController {

    private final UserService userService;

    @Autowired
    public AdminRestController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping()
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @PostMapping()
    public ResponseEntity<List<User>> create(@RequestBody User user) {
        userService.save(user);
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @PutMapping()
    public ResponseEntity<List<User>> update(@RequestBody User user) {
        userService.update(user);
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<User>> delete(@PathVariable("id") Long id) {
        userService.delete(id);
        return ResponseEntity.ok(userService.getAllUsers());
    }
}
