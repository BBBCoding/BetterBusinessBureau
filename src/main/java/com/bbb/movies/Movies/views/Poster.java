package com.bbb.movies.Movies.views;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name="poster")
public class Poster {

    @Id
    @Column(name="poster_id", nullable = false, unique = false)
    private Long posterID;

    @Column(name="poster_path", nullable = true)
    private String poster_path;

    @Column(name="backdrop_path", nullable = true)
    private String backdrop_path;
}
