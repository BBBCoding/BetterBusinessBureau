package com.bbb.movies.Movies.repositories;

import com.bbb.movies.Movies.views.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface MoviesRepository extends JpaRepository<Movie, Long>, PagingAndSortingRepository<Movie, Long> {
}
