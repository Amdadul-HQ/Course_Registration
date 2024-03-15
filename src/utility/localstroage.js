const getLocalStroageItems = () => {
    const storeCourse = localStorage.getItem('course')
    if(storeCourse){
        return JSON.parse(storeCourse);
    }
    return [];
}

const saveToLocalStorage = (titles) => {

    const saveCourseToStringfied = JSON.stringify(titles)

    localStorage.setItem('course',saveCourseToStringfied)

}
const addToLocalStorage = (title) =>{

    const storeCourse = getLocalStroageItems();

    storeCourse.push(title)

    saveToLocalStorage(storeCourse)
}


export {addToLocalStorage,getLocalStroageItems}