import { BsCurrencyDollar } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";
import PropTypes from 'prop-types';
import { useState } from "react";

const Course = ({course,handleSelectCourse}) => {
    const [isSelect,setIsSelect] =useState(false)
    const {title,description,price,credit,img} = course

    return (
        <div className='bg-[#fff] p-4 rounded-xl flex flex-col justify-between space-y-3'>
            <div>
                <img className='w-full' src={img} alt="" />
            </div>
            <h1 className='text-xl font-semibold text-[#1C1B1B]'>{title}</h1>
            <p className='text-base font-normal text-[rgba(28,27,27,0.60)]'>{description}</p>
            <div className='text-lg text-[rgba(28,27,27,0.60)] font-medium flex justify-between'>
                <div>
                    <p className="flex items-center gap-x-2"><span className="text-[#111] text-xl"><BsCurrencyDollar></BsCurrencyDollar></span> Price : {price}</p>
                </div>
                <div>
                    <p className="flex items-center gap-x-2"><span className="text-[#111] text-xl"><IoBookOutline></IoBookOutline></span> Credit : {credit}</p>
                </div>
            </div>
            <div>
            <button onClick={() => {handleSelectCourse(course); setIsSelect(!isSelect) }} className='bg-[#2F80ED] w-full text-white text-lg font-semibold py-2 rounded-lg'>{ isSelect ? 'Remove' : 'Select' }</button>
            </div>
        </div>
    );
};

Course.propTypes = {
    course:PropTypes.object.isRequired,
    handleSelectCourse:PropTypes.func.isRequired
};  

export default Course;