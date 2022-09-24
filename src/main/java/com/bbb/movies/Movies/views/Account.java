//package com.bbb.movies.Movies.views;
//
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//import lombok.*;
//import javax.persistence.*;
//import javax.validation.constraints.Email;
//import javax.validation.constraints.NotEmpty;
//import javax.validation.constraints.NotNull;
//import java.time.LocalDate;
//import java.util.Collection;
//
//@NoArgsConstructor
//@AllArgsConstructor
//@Getter
//@Setter
//@ToString
//@Entity
//@Table(name="accounts")
//public class Account {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name="account_id", nullable = false, unique = true)
//    private Long accountId;
//
//    @Column(name="owner", nullable = false, unique = true, length = 100)
//    private String owner;
//
//    @NotNull
//    @Enumerated(EnumType.STRING)
//    @Column(name="tier")
//    private Tier tier;
//
//    @ToString.Exclude
//    @Column(name="pass_word", nullable = false, length = 100)
//    private String password;
//
////    @Column(name="users", nullable = false)
////    private Collection<User> users;
//
//    @Column(name="date_created")
//    private LocalDate createdAt;
//
//    @Email
//    @NotEmpty
//    @Column(name = "e_mail", nullable = false, length = 100)
//    private String email;
//}