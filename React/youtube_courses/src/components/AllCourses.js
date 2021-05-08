import React, { useState, useEffect } from 'react';
import Course from './Course';
import base_url from './../api/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';

const AllCourses = () => {
    useEffect(() => {
        document.title = "All Courses";
    }, []);

    // function to call server for backend:
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                //for success
                // console.log(response);  
                console.log(response.data);
                toast.success("courses has been loaded", {
                    position: "bottom-center",
                });
                setCourses(response.data);
            },
            (error) => {
                //for error
                console.log(error);
                toast.error("something want wrong", {
                    position: "bottom-center",
                });
            }
        );
    };

    //calling loading course function
    useEffect(() => {
        getAllCoursesFromServer();
    }, []);

    const [courses, setCourses] = useState([]);

    const updateCourses = (id) => {
        setCourses(courses.filter((c) => c.id !== id));
    };

    return (
        <div>
            <h1>All Courses</h1>
            <p>List of Courses are as follows</p>
            {
                courses.length > 0
                    ? courses.map((item) => (
                        <Course key={item.id} course={item} update={updateCourses} />))
                    : "No Courses"
            }
        </div>
    )
}

export default AllCourses;

/*{ <Button onClick={() => {
    console.log("test");
    setCourses([
        ...courses,
        {
            title: "Angular Courses",
            description: "this is demo course"
        },
    ]);
}}>
    Test
</Button> {*/