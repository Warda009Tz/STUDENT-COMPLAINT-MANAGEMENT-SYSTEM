package com.myproject.student.complaint.service;

import com.myproject.student.complaint.model.Student;
import com.myproject.student.complaint.respository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class StudentService {

    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Optional<Student> getStudentById(Long id) {
        return studentRepository.findById(id);
    }

    public List<Student> createOrUpdateStudent(Student student) {
        return studentRepository.findAll();
    }

    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }

    public List<Student> searchStudents(String fullName, String courseName) {
        return studentRepository.findByFullNameContainingIgnoreCaseAndCourseNameContainingIgnoreCase(fullName, courseName);
    }

    public long countStudents() {
        return studentRepository.count();
    }
}
