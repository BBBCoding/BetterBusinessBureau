package com.bbb.movies.Movies.views;

import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name="actors")
public class Actor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ActorID;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

}
