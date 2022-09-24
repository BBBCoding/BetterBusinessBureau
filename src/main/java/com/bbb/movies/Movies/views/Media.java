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
    @Column(name="media_id", nullable = false, unique = false)
    private Long mediaID;

    @Column(name="trailer_path", nullable = true)
    private String trailer_path;

    @OneToOne
    @MapsId
    @JoinColumn(name="media_id")
    private Movie movie;
}
