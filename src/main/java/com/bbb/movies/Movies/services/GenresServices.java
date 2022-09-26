package com.bbb.movies.Movies.services;

import com.bbb.movies.Movies.exceptions.RecordNotFoundException;
import com.bbb.movies.Movies.repositories.GenresRepository;
import com.bbb.movies.Movies.views.Genre;
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
public class GenresServices {
    @Autowired
    GenresRepository repository;

    public List<Genre> getAllGenres(Integer pageNo, Integer pageSize, String sortBy)
    {
        Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));

        Page<Genre> pagedResult = repository.findAll(paging);

        if(pagedResult.hasContent()) {
            return pagedResult.getContent();
        } else {
            return new ArrayList<>();
        }
    }

    public Genre getGenreById(Long id) throws RecordNotFoundException
    {
        Optional<Genre> employee = repository.findById(id);

        if(employee.isPresent()) {
            return employee.get();
        } else {
            throw new RecordNotFoundException("No movie record exist for given id");
        }
    }

    public Genre createOrUpdateGenre(Genre entity) {
        Optional<Genre> genre = repository.findById(entity.getGenreID());

        if(genre.isPresent())
        {
            Genre newGenre = genre.get();
            newGenre.setGenreName(entity.getGenreName());

            newGenre = repository.save(newGenre);

            return newGenre;
        } else {

            return repository.save(entity);
        }
    }

    public void deleteGenreById(Long id) throws RecordNotFoundException
    {
        Optional<Genre> genre = repository.findById(id);

        if(genre.isPresent())
        {
            repository.deleteById(id);
        } else {
            throw new RecordNotFoundException("No genre record exist for given id");
        }
    }
}
