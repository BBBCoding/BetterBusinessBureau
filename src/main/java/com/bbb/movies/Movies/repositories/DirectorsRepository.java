package com.bbb.movies.Movies.repositories;

import com.bbb.movies.Movies.views.Director;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DirectorsRepository extends JpaRepository<Director, Long> {
}
