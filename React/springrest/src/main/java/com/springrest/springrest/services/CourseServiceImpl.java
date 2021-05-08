package com.springrest.springrest.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entities.Course;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseDao coursedao;
	
	@Override
	public List<Course> getCourses() {
		return coursedao.findAll();
	}

	@Override
	public Course getCourse(long courseId) {
		return coursedao.getOne(courseId);
	}

	@Override
	public Course addCourse(Course course) {
		coursedao.save(course);
		return course;
	}

	@Override
	public Course updateCourse(Course course) {
		coursedao.save(course);
		return course;
	}

	@Override
	public void deleteCourse(long parseLong) {
		Course entity = coursedao.getOne(parseLong);
		coursedao.delete(entity);
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

// ------------------------------//without database get,add,update and delete values of Courses------------------------------------------------------------	
	
/*	List<Course> list;
	public CourseServiceImpl() {
		list = new ArrayList<Course>();
		list.add(new Course(145, "Java Core Course", "This Course Contain Basic Of Core Java"));
		list.add(new Course(4343, "Spring Boot Course", "Creating Rest Api Using Spring Boot"));	
	}
	
	@Override
	public List<Course> getCourses() {
		return list;
	}

	@Override
	public Course getCourse(long courseId) {
		Course c = null;
		for(Course course : list) {
			if(course.getId() == courseId) {
				c = course;
				break;
			}
		}
		return c;
	}

	@Override
	public Course addCourse(Course course) {
		list.add(course);
		return course;
	}

	@Override
	public Course updateCourse(Course course) {
		list.forEach(e ->{
			if(e.getId() == course.getId()) {
				e.setTitle(course.getTitle());
				e.setDescription(course.getDescription());
			}
		});
		return course;
	}

	@Override
	public void deleteCourse(long parseLong) {
		list = this.list.stream().filter(e->e.getId()!=parseLong).collect(Collectors.toList());
	}	*/
}
