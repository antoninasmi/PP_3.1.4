package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.models.User;
import ru.kata.spring.boot_security.demo.services.RoleService;
import ru.kata.spring.boot_security.demo.services.UserService;
import java.security.Principal;

@Controller
public class AdminController {

    private final UserService userService;
    private final RoleService roleService;

    @Autowired
    public AdminController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @GetMapping("/admin")
    public String adminPage(Model model, Principal principal) {
        model.addAttribute("users", userService.getAllUsers());
        model.addAttribute("admin", userService.findUserByUsername(principal.getName()));
        model.addAttribute("roles", roleService.getAllRoles());
        model.addAttribute("newUser", new User());
        return "admin";
    }

    @PostMapping("/admin/new")
    public String create(@ModelAttribute("user") User user) {
        userService.save(user);
        return "redirect:/admin";
    }

    @PatchMapping("/admin/edit/{id}")
    public String update(@ModelAttribute("user") User user, @RequestParam(value = "role") String role) {
        user.setRoles(roleService.getRolesByName(role));
        userService.update(user);
        return "redirect:/admin";
    }

    @DeleteMapping("/admin/delete/{id}")
    public String delete(@PathVariable("id") Long id) {
        userService.delete(id);
        return "redirect:/admin";
    }
}
