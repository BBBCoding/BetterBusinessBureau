package com.bbb.movies.Movies.controllers;

import com.bbb.movies.Movies.repositories.ActorsRepository;
import com.bbb.movies.Movies.views.Actor;
import com.bbb.movies.Movies.views.FieldHelper;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/v1/actors", produces = "application/json")
public class ActorsController {
    private ActorsRepository actorsRepository;
    @GetMapping("")
    public List<Actor> fetchActors() {
        return actorsRepository.findAll();
    }
    @GetMapping("/{id}")
    public Optional<Actor> fetchActorById(@PathVariable long id) {
        Optional<Actor> optionalActor = actorsRepository.findById(id);
        if(optionalActor.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Actor id " + id + " not found");
        }
        return optionalActor;
    }
    @PostMapping("")
    public void createActor(@RequestBody Actor newActor) {
        actorsRepository.save(newActor);
    }
    @DeleteMapping("/{id}")
    public void deleteActorById(@PathVariable long id) {
        Optional<Actor> optionalActor = actorsRepository.findById(id);
        if(optionalActor.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Actor id " + id + " not found");
        }
         actorsRepository.deleteById(id);
    }
    @PutMapping("/{id}")
    public void updateActorById(@RequestBody Actor updatedActor, @PathVariable long id) {
        Optional<Actor> originalActor = actorsRepository.findById(id);
        if(originalActor.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Actor id " + id + " not found");
        }
        updatedActor.setActorID(id);
        BeanUtils.copyProperties(updatedActor, originalActor.get(), FieldHelper.getNullPropertyNames(updatedActor));
        actorsRepository.save(originalActor.get());
    }
}