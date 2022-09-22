package com.bbb.movies.Movies.views;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Actor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ActorID;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

}
