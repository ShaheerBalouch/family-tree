package com.project.FamilyTree.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class UserController {
    @GetMapping("/")
    public String hello() {
        return "Hello, BackEnd!";
    }
}
