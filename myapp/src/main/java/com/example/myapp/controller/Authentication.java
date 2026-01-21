package com.example.myapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
import com.example.myapp.dto.SignupRequest;
import com.example.myapp.model.User;
import com.example.myapp.repo.UserRepository;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class Authentication {

    @Autowired
    UserRepository   db;  


    @PostMapping("/signup")
    String m(@RequestBody SignupRequest obj){
        System.out.println("\t name :"+obj.getName());
        System.out.println("\t name :"+obj.getEmail());
        System.out.println("\t name :"+obj.getPassword());

        User u=new User();

        u.setName(obj.getName());
        u.setEmail(obj.getEmail());
        u.setPassword(obj.getPassword());

        db.save(u);

        return "signup sucess";
    }

    @GetMapping("/users")
    List<User> getALlUsers(){
        
        return db.findAll();
    }
}

