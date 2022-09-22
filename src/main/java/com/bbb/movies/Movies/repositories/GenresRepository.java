package com.bbb.movies.Movies.repositories;

import com.bbb.movies.Movies.views.Genre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GenresRepository extends JpaRepository<Genre, Long > {
}
