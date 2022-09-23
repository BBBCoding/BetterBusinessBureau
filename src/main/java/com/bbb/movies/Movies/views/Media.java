package com.bbb.movies.Movies.views;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.Collection;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name="media")
public class Media {

    @Id
    @Column(name="media_id", nullable = false, unique = true)
    private Long mediaID;

    @Column(name="poster_path", nullable = true)
    private String poster_path;

    @Column(name="backdrop_path", nullable = true)
    private String backdrop_path;

    @Column(name="trailer_path", nullable = true)
    private String trailer_path;

    @ManyToMany(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH, CascadeType.REFRESH},
            targetEntity = Movie.class)
    @JoinTable(
            name="movies_media",
            joinColumns = {@JoinColumn(name = "media_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="movie_id", nullable = false, updatable = false)},
            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT)
    )
    @JsonIgnoreProperties("genres")
    private Collection<Media> media_movies;
}
