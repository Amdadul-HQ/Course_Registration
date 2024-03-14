
import PropTypes from 'prop-types';
import { useState } from 'react';

const Coursebuy = ({selectCourses,credit,remainingCredit,totalPrice}) => {

    

    // console.log(totalCredit);


    return (
        <div className='bg-white h-fit w-1/5 py-5 px-2'>
            <h3 className='text-[#2F80ED] text-lg font-bold border-b-2 py-2'>Credit Hour Remaining {remainingCredit} hr</h3>
            <h3 className='text-[#1C1B1B] text-xl font-bold mb-6'>Course Name</h3>
            <ol className='pb-6 border-b-2 mb-4 list-decimal ml-3'>
                {
                    selectCourses.map(course => <li key={course.id}>  {course.title}</li>)
                }
            </ol>
            <p className='text-[rgba(28,27,27,0.80)] text-base font-medium pb-5 border-b-2'>Total Credit Hour : {credit}</p>
            <p className='text-[rgba(28,27,27,0.80)] text-base font-semibold py-5'>Total Price : {totalPrice} USD</p>
        </div>
    );
};

Coursebuy.propTypes = {
    selectCourses:PropTypes.array.isRequired,
};

export default Coursebuy;