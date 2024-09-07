package com.project.FamilyTree.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class UserController {
    @PostMapping("/signin")
    public String userSignIn(@RequestBody String details) {
        System.out.println("Received!");
        System.out.println(details);
        return "test";
    }

    @PostMapping("/signup")
    public String userRegister(@RequestBody String details){
        System.out.println("Registered!");
        System.out.println(details);
        return "test";
    }
}
