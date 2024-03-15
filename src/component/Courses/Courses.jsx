
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';

const Courses = ({handleSelectCourse}) => {

    const [courses,setCourses] = useState([])

    useEffect( () => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    } ,[])

    return (
        <div className='w-[70%]'>
            <div className='grid grid-cols-3 gap-6'>
                {
                    courses.map(course => <Course key={course.id}  handleSelectCourse={handleSelectCourse} course={course} ></Course>)
                }
            </div>
        </div>
    );
};

Courses.propTypes = {
    handleSelectCourse:PropTypes.func.isRequired,
};

export default Courses;