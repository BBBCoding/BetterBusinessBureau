package com.bbb.movies.Movies.repositories;

import com.bbb.movies.Movies.views.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MoviesRepository extends JpaRepository<Movie, Long> {
}
