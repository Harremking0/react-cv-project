/* eslint-disable react/button-has-type */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import uniqID from 'uniqid';
import Education from './Education';
import ExperienceField from './ExperienceField';
import Preview from './Preview';

export class EditingBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {
        firstName: '',
        lastName: '',
        title: '',
        adress: '',
        phoneNumber: '',
        eMail: '',
        description: '',
      },
      experience: {
        id: uniqID(),
        key: uniqID(),
        inputHandler: this.experienceInputHandler,
        delete: this.deleteExperienceField,
      },
      experienceArray: [],

      education: {
        id: uniqID(),
        key: uniqID(),
        inputHandler: this.educationInputHandler,
        delete: this.deleteEducationField,
      },
      educationArray: [],

    };
  }

  inputHandler = (e) => {
    const { target } = e;
    const { value } = target;
    const { name } = target;
    const additions = { [name] : value };
    const newInfo = {...this.state.personalInfo,...additions}
    this.setState({
      personalInfo : newInfo
    }, () => { console.log(this.state); });

    /*     console.log(name,value,target) */
  }

  experienceInputHandler = (e) => {
    const { target } = e;
    const { value } = target;
    const { name } = target;
    this.setState({
      experienceArray: this.state.experienceArray.map((experience) => {
        if (experience.id === target.id) {
          experience[name] = value;
          return experience;
        } return experience;
      }),
    }, () => { console.log(this.state); });

    /*     console.log(name,value,target) */
  }

educationInputHandler = (e) => {
  const { target } = e;
  const { value } = target;
  const { name } = target;
  this.setState({
    educationArray: this.state.educationArray.map((education) => {
      if (education.id === target.id) {
        education[name] = value;
        return education;
      } return education;
    }),
  }, () => { console.log(this.state); });

/*     console.log(name,value,target) */
}

   addExperienceField =() => {
     this.setState({
       experience: {
         id: uniqID(),
         key: uniqID(),
         inputHandler: this.experienceInputHandler,
         delete: this.deleteExperienceField,
       },
       experienceArray: this.state.experienceArray.concat(this.state.experience),
     }, () => { console.log(this.state.experienceArray); });
   }

    deleteExperienceField=(e) => {
      e.preventDefault();
      const targetID = e.target.id;
      this.setState({
        // eslint-disable-next-line arrow-parens
        experienceArray: this.state.experienceArray.filter(experience => experience.id !== targetID)
        ,
      });
    }

    addEducationField =() => {
      this.setState({
        education: {
          id: uniqID(),
          key: uniqID(),
          inputHandler: this.educationInputHandler,
          delete: this.deleteEducationField,
        },
        educationArray: this.state.educationArray.concat(this.state.education),
      }, () => { console.log(this.state.educationArray); });
    }

  deleteEducationField=(e) => {
    e.preventDefault();
    const targetID = e.target.id;
    this.setState({
      educationArray: this.state.educationArray.filter((education) => education.id !== targetID),
    });
  }

  reset=() => {
    this.setState({
      personalInfo: {
        firstName: '',
        lastName: '',
        title: '',
        adress: '',
        phoneNumber: '',
        eMail: '',
        description: '',
      },
      experienceArray: [],
      educationArray: [],
    });
  }

  render() {
    const { experienceArray, educationArray,personalInfo
    } = this.state;
    const {firstName, lastName, title, adress, phoneNumber, eMail, description} = personalInfo;
    return (
      <div className="main">

        <div className="editing">


        <div className="personalInfo">
         
          <form className="personalForm">
            <div style={{fontSize:'x-large',fontWeight:'bold' }}>Personal info : </div>
            <input name="firstName" type="text" placeholder="First Name" onChange={this.inputHandler} value={firstName} />
            <input name="lastName" type="text" placeholder="Last Name" onChange={this.inputHandler} value={lastName} />
            <input name="title" type="text" placeholder="Title" onChange={this.inputHandler} value={title} />
            <input name="adress" type="text" placeholder="Adress" onChange={this.inputHandler} value={adress} />
            <input name="phoneNumber" type="text" placeholder="Phone Number" onChange={this.inputHandler} value={phoneNumber} />
            <input name="eMail" type="text" placeholder="E-mail" onChange={this.inputHandler} value={eMail} />
            <input id="description"name="description" type="text" placeholder="Description..." onChange={this.inputHandler} value={description} />
          </form>
        </div>

        <div>

          <button onClick={this.addExperienceField}>add Experience</button>
          <ExperienceField experienceArray={experienceArray} />

        </div>
        <div>

          <button onClick={this.addEducationField}>add Education</button>
          <Education educationArray={educationArray} />

        </div>

        <div>
          <button className="reset" onClick={this.reset}>RESET</button>
        </div>


        </div>
      

        <div className="preview">
          <Preview personalInfo={personalInfo} experienceArray={experienceArray} educationArray={educationArray} />
        </div>
      </div>

    );
  }
}

export default EditingBody;
