package com.myproject.student.complaint.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false)
    private String courseName;

    @Column(nullable = false)
    private String yearStudy;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String challenge;


    public Student(String fullName, String courseName, String yearStudy, String email, String challenge) {
        this.fullName = fullName;
        this.courseName = courseName;
        this.yearStudy = yearStudy;
        this.email = email;
        this.challenge = challenge;
    }

    public Student() {
    }

    public void setId(Long id) {
    }

    public void getId() {
    }
}
