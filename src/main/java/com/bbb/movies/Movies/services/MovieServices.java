package com.bbb.movies.Movies.services;

import com.bbb.movies.Movies.exceptions.RecordNotFoundException;
import com.bbb.movies.Movies.repositories.MoviesRepository;
import com.bbb.movies.Movies.views.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MovieServices {
    @Autowired
    MoviesRepository repository;

    public List<Movie> getAllMovies(Integer pageNo, Integer pageSize, String sortBy)
    {
        Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));

        Page<Movie> pagedResult = repository.findAll(paging);

        if(pagedResult.hasContent()) {
            return pagedResult.getContent();
        } else {
            return new ArrayList<>();
        }
    }

    public Movie getMovieById(Long id) throws RecordNotFoundException
    {
        Optional<Movie> employee = repository.findById(id);

        if(employee.isPresent()) {
            return employee.get();
        } else {
            throw new RecordNotFoundException("No movie record exist for given id");
        }
    }

    public Movie createOrUpdateMovie(Movie entity) {
        Optional<Movie> movie = repository.findById(entity.getId());

        if(movie.isPresent())
        {
            Movie newMovie = movie.get();
            newMovie.setTitle(entity.getTitle());
            newMovie.setVote_average(entity.getVote_average());
            newMovie.setPlot(entity.getPlot());

            newMovie = repository.save(newMovie);

            return newMovie;
        } else {

            return repository.save(entity);
        }
    }

    public void deleteMovieById(Long id) throws RecordNotFoundException
    {
        Optional<Movie> employee = repository.findById(id);

        if(employee.isPresent())
        {
            repository.deleteById(id);
        } else {
            throw new RecordNotFoundException("No movie record exist for given id");
        }
    }
}
