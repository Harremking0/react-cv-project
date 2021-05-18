import React from 'react'

function ExperienceField(props) {
    const {experienceArray}=props;
    const experienceList = experienceArray.map(experience=> 
        <form key={experience.key}>
        <input name="position" type="text" placeholder="Position" onChange={experience.inputHandler} value={experience.position} id={experience.id}/>
        <input name="company" type="text" placeholder="Company" onChange={experience.inputHandler} value={experience.company} id={experience.id}/>
        <input name="city" type="text" placeholder="City" onChange={experience.inputHandler} value={experience.city} id={experience.id}/>
        <input name="fromDate" type="date"  onChange={experience.inputHandler} value={experience.fromDate} id={experience.id}/>
        <input name="toDate" type="date"  onChange={experience.inputHandler} value={experience.toDate} />
        </form> );
    return (
        <div>
            {experienceList}
        </div>
    )
}



export default ExperienceField

