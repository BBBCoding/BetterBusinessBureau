package com.bbb.movies.Movies.views;

import lombok.*;
import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name="Movies")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private Long genreID;

    @Column(nullable = false)
    private Float rating;

    @Column(nullable = false)
    private Long directorID;

    @Column(nullable = false)
    private String plot;

    @Column(nullable = false)
    private Integer duration;

    @Column(nullable = false)
    private String poster;

    @Column(nullable = false)
    private String trailer;

    @Column(nullable = false)
    private Integer premiere;
}