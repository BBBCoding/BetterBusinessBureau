package com.bbb.movies.Movies.controllers;

import com.bbb.movies.Movies.exceptions.RecordNotFoundException;
import com.bbb.movies.Movies.services.MovieServices;
import com.bbb.movies.Movies.views.Movie;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;





@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/v1/movies", produces = "application/json")
@CrossOrigin("*")
public class MoviesController {

    @Autowired
    MovieServices service;

    @GetMapping
    public ResponseEntity<List<Movie>> fetchMovies(
                                                   @RequestParam(defaultValue = "0") Integer pageNo,
                                                   @RequestParam(defaultValue = "40") Integer pageSize,
                                                   @RequestParam(defaultValue = "id") String sortBy) {


            List<Movie> list = service.getAllMovies(pageNo, pageSize, sortBy);

            return new ResponseEntity<>(list, new HttpHeaders(), HttpStatus.OK);
        }
    @GetMapping("/{id}")
    public ResponseEntity<Movie> getMovieById(@PathVariable("id") Long id)
            throws RecordNotFoundException {
        Movie entity = service.getMovieById(id);

        return new ResponseEntity<>(entity, new HttpHeaders(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Movie> createOrUpdateMovie(Movie movie) {
        Movie updated = service.createOrUpdateMovie(movie);
        return new ResponseEntity<>(updated, new HttpHeaders(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteMovieById(@PathVariable("id") Long id)
            throws RecordNotFoundException {
        service.deleteMovieById(id);
        return HttpStatus.FORBIDDEN;
    }
}