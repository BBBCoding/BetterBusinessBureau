package com.bbb.movies.Movies.views;

import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name="directors")
public class Director {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long directorID;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;


}
