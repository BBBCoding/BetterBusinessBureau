package com.bbb.movies.Movies.views;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name="genres")
public class Genre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="genreid", nullable = false, unique = true)
    private Long genreID;

    @Column(name="genre_name")
    private String genre_name;

    @ManyToMany(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH, CascadeType.REFRESH},
            targetEntity = Movie.class)
    @JoinTable(
            name="movies_genres",
            joinColumns = {@JoinColumn(name = "genre_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="movie_id", nullable = false, updatable = false)},
            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT)
    )
    @JsonIgnoreProperties("genres")
    private Collection<Movie> genres_movies;
}
