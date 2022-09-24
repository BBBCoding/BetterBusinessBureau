package com.bbb.movies.Movies.views;

import lombok.*;

import javax.persistence.*;

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

    @OneToOne(mappedBy = "poster")
    private Movie movie;
}
