
import PropTypes from 'prop-types';
import Courses from '../Courses/Courses';
import Coursebuy from '../Buy/Coursebuy';
import { useState } from 'react';

const Main = () => {
    const [selectCourses,setSelectCourses] = useState([])

    const handleSelectCourse = (coures) => {
        const addCourses = [...selectCourses,coures]
        setSelectCourses(addCourses)
    }

    return (
        <main className='max-w-screen-xl mx-auto flex gap-x-4'>
            <Courses handleSelectCourse={handleSelectCourse} ></Courses>
            <Coursebuy selectCourses={selectCourses} ></Coursebuy>
        </main>
    );
};

Main.propTypes = {
    
};

export default Main;