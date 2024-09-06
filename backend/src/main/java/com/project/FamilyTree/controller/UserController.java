package com.project.FamilyTree.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class UserController {
    @PostMapping("/signin")
    public String userSignIn() {
        return "Hello, BackEnd!";
    }
}
