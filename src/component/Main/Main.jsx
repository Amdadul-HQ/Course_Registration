
import PropTypes from 'prop-types';
import Courses from '../Courses/Courses';
import Coursebuy from '../Buy/Coursebuy';
import { useState } from 'react';

const Main = () => {
    const [selectCourses,setSelectCourses] = useState([]);
    const [credit,setCredit] =useState(0);
    const [remainingCredit,setRemainingCredit] = useState(10);
    const [totalPrice,setTotalPrice] = useState(0);

    

    const handleSelectCourse = (coures) => {
        if(selectCourses.includes(coures)){
            return alert('You Can Not Select A Course Twice')
        }
        const addCourses = [...selectCourses,coures]
        if(credit+coures.credit > 10){
            return alert('only 10 Credit Allow')
        }
        setSelectCourses(addCourses)
        
        setCredit(credit + coures.credit)
        setRemainingCredit(remainingCredit - coures.credit)
        setTotalPrice(totalPrice + coures.price)
        
    }

    return (
        <main className='max-w-screen-xl mx-auto flex gap-x-4'>
            <Courses handleSelectCourse={handleSelectCourse}></Courses>
            <Coursebuy selectCourses={selectCourses} credit={credit} remainingCredit={remainingCredit} totalPrice={totalPrice} ></Coursebuy>
        </main>
    );
};

Main.propTypes = {
    
};

export default Main;