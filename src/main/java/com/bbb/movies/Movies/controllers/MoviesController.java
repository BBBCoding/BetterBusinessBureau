package com.bbb.movies.Movies.controllers;

import com.bbb.movies.Movies.repositories.MoviesRepository;
import com.bbb.movies.Movies.views.Movie;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/v1/movies", produces = "application/json")
public class MoviesController {
    private MoviesRepository moviesRepository;
    @GetMapping("")
    public List<Movie> fetchMovies() {
        return moviesRepository.findAll();
    }
    @GetMapping("/{id}")
    public Optional<Movie> fetchMovieById(@PathVariable long id) {
        Optional<Movie> optionalMovie = MoviesRepository.findById(id);
        if(optionalMovie.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Movie id " + id + " not found");
        }
        return optionalMovie;
    }
    @PostMapping("")
    public void createMovie(@RequestBody Movie newMovie) {
//        User author = usersRepository.findById(1L).get();
//        newPost.setAuthor(author);
//        newPost.setCategories(new ArrayList<>());
//        Category cat1 = categoriesRepository.findById(1L).get();
//        newPost.getCategories().add(cat1);
        MoviesRepository.save(newMovie);
    }
    @DeleteMapping("/{id}")
    public void deleteMovieById(@PathVariable long id) {
        Optional<Movie> optionalMovie = MoviesRepository.findById(id);
        if(optionalMovie.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Movie id " + id + " not found");
        }
        MoviesRepository.deleteById(id);
    }
    @PutMapping("/{id}")
    public void updateMovieById(@RequestBody Post updatedMovie, @PathVariable long id) {
        Optional<Movie> originalMovie = MoviesRepository.findById(id);
        if(originalMovie.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Movie id " + id + " not found");
        }
        updatedMovie.setId(id);
        BeanUtils.copyProperties(updatedMovie, originalMovie.get(), FieldHelper.getNullPropertyNames(updatedMovie));
        MoviesRepository.save(originalMovie.get());
    }
}