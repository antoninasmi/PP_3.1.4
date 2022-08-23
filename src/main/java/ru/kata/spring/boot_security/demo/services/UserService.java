package ru.kata.spring.boot_security.demo.services;

import ru.kata.spring.boot_security.demo.models.User;
import java.util.List;

public interface UserService {

    List<User> getAllUsers();

    User getUserById(Long id);

    User findUserByUsername(String username);

    void save(User user);

    void update(User user);

    boolean delete(Long id);
}
