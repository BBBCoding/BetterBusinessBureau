package com.bbb.movies.Movies.repositories;

import com.bbb.movies.Movies.views.Actor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActorsRepository extends JpaRepository<Actor, Long> {
}
