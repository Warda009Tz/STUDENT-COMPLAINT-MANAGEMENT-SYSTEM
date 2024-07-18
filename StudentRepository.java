package com.myproject.student.complaint.respository;

import com.myproject.student.complaint.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    List<Student> findByFullNameContainingIgnoreCaseAndCourseNameContainingIgnoreCase(String fullName, String courseName);
}
