package com.bbb.movies.Movies.views;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name="movies")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", nullable = false, unique = true)
    private Long id;

    @ManyToMany(fetch = FetchType.LAZY,
            cascade = { CascadeType.ALL },
            targetEntity = Genre.class)
    @JoinTable(
            name="movies_genres",
            joinColumns = {@JoinColumn(name = "movie_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="genre_id", nullable = false, updatable = false)},
            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT))
    @JsonIgnoreProperties("genres_movies")
    private Collection<Genre> genreID;

    @OneToOne(fetch = FetchType.LAZY,
            cascade = { CascadeType.ALL },
            targetEntity = Media.class)
    @JoinColumn(name="media_links", nullable = true)
    private Media media;

    @OneToOne(fetch = FetchType.LAZY,
            cascade = { CascadeType.ALL },
            targetEntity = Poster.class)
    @JoinColumn(name="poster_links", nullable = true)
    private Poster poster;

    @Column(name="budget", nullable = true)
    private String budget;

    @Column(name="plot", nullable = true)
    private String plot;

    @Column(name="release_date", nullable = true)
    private String release_date;

    @Column(name="revenue", nullable = true)
    private int revenue;

    @Column(name="runtime", nullable = true)
    private int runtime;

    @Column(name="tagline", nullable = true)
    private String tagline;

    @Column(name="title", nullable = false)
    private String title;

    @Column(name="vote_average", nullable = true)
    private double vote_average;

}