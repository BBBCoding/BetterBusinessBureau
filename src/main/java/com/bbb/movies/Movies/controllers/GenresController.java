package com.bbb.movies.Movies.controllers;

import com.bbb.movies.Movies.exceptions.RecordNotFoundException;
import com.bbb.movies.Movies.repositories.GenresRepository;
import com.bbb.movies.Movies.services.GenresServices;
import com.bbb.movies.Movies.views.Genre;
import com.bbb.movies.Movies.views.FieldHelper;
import com.bbb.movies.Movies.views.Movie;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/v1/Genres", produces = "application/json")
@CrossOrigin("*")
public class GenresController {

    @Autowired
    GenresServices service;

    @GetMapping
    public ResponseEntity<List<Genre>> fetchGenres(
            @RequestParam(defaultValue = "0") Integer pageNo,
            @RequestParam(defaultValue = "40") Integer pageSize,
            @RequestParam(defaultValue = "id") String sortBy) {
        List<Genre> list = service.getAllGenres(pageNo, pageSize, sortBy);

        return new ResponseEntity<>(list, new HttpHeaders(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Genre> getMovieById(@PathVariable("id") Long id)
            throws RecordNotFoundException {
        Genre entity = service.getGenreById(id);

        return new ResponseEntity<>(entity, new HttpHeaders(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Genre> createOrUpdateGenre(Genre genre) {
        Genre updated = service.createOrUpdateGenre(genre);
        return new ResponseEntity<>(updated, new HttpHeaders(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteGenreById(@PathVariable("id") Long id)
            throws RecordNotFoundException {
        service.deleteGenreById(id);
        return HttpStatus.FORBIDDEN;
    }
}