import React, {Component} from 'react';
import './forms.css';

class Checkboxes extends Component {
  constructor(){
    super();
    this.state = {
      water:"",
      marital:"",
      situation:"",
      claustrophobic:"",
      sick:{
        cancer:false,
        heart:false,
        diabetes:false
      },
      alive:{
        siblings:false,
        parents:false,
        grandparents:false
      },
      education:{
        gedOrhs:false,
        associates:false,
        bachelors:false,
        masters:false,
        phd:false,
        other:false
      }

    }
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleCheckboxChange = e => {
      if (e.target.id) {
        let newState = this.state[e.target.name];

        newState[e.target.id] = e.target.checked;
        this.setState({
          [e.target.name]: newState
        });
      } else {
        this.setState({
          [e.target.name]: e.target.checked
        });
      }
    };

  render (){
    console.log(this.state)
    return ( <div className="box">
    <div className="radio">
      <div id="water">
          <p> Can you breath better than Aquaman? </p>

                Yes
                <input
                  type="radio"
                  name="water"
                  value="yes"
                  checked={this.state.water === "yes"}
                  onChange={this.handleChange}
                />


                No
                <input
                  type="radio"
                  name="water"
                  value="no"
                  checked={this.state.water === "no"}
                  onChange={this.handleChange}
                />

                I am poseidon!
                <input
                  type="radio"
                  name="water"
                  value="poseidon"
                  checked={this.state.water === "poseidon"}
                  onChange={this.handleChange}
                />
      </div>

      <div id="marital">
              <p>Marital Status</p>
              I is married
              <input
                type="radio"
                name="marital"
                value="married"
                checked={this.state.marital === "married"}
                onChange={this.handleChange}
              />
              <br/>
              I is single
               <input
                  type="radio"
                  name="marital"
                  value="unmarried"
                  checked={this.state.marital === "unmarried"}
                  onChange={this.handleChange}
                />
      </div>

      <div id="situation">

      <p>When you are in a stressful or difficult situation, how do you most frequently react?</p>

      Determination: I continue to confront the situation.
      <input
         type="radio"
         name="situation"
         value="determination"
         checked={this.state.situation === "determination"}
         onChange={this.handleChange}
       />
      <br/>
      Defeat: I stop confronting the situation.
      <input
         type="radio"
         name="situation"
         value="defeat"
         checked={this.state.situation === "defeat"}
         onChange={this.handleChange}
       />
       <br/>
      Anger: I become upset at the situation.
      <input
         type="radio"
         name="situation"
         value="anger"
         checked={this.state.situation === "anger"}
         onChange={this.handleChange}
       />

       <br/>
      Resourcefulness: I seek help to confront the situation.
      <input
         type="radio"
         name="situation"
         value="resourcefulness"
         checked={this.state.situation === "resourcefulness"}
         onChange={this.handleChange}
       />
      </div>


      <div id="claustrophobic">
      <p>Are you claustrophobic?</p>
      <br/>
      Yes! :(
      <input
         type="radio"
         name="claustrophobic"
         value="yes"
         checked={this.state.claustrophobic === "yes"}
         onChange={this.handleChange}
       />
       <br/>

       Nope
       <input
          type="radio"
          name="claustrophobic"
          value="no"
          checked={this.state.claustrophobic === "no"}
          onChange={this.handleChange}
        />
        <br/>
        I dont know...Put me in a coffin let's find out..
        <input
           type="radio"
           name="claustrophobic"
           value="idk"
           checked={this.state.claustrophobic === "idk"}
           onChange={this.handleChange}
         />
        </div>
        </div>

        <div className="checkbox">
        <div id="disease">
        <p>Does your family have  a history of(Check all that apply)</p>
        Cancer
        <input
          id="cancer"
          name="sick"
          type="checkbox"
          checked={this.state.sick.cancer}
          onChange={this.handleCheckboxChange}
        />
          Heart Disease
        <input
          id="heart"
          name="sick"
          type="checkbox"
          checked={this.state.sick.heart}
          onChange={this.handleCheckboxChange}
        />
          Diabetuss
          <input
            id="diabetes"
            name="sick"
            type="checkbox"
            checked={this.state.sick.diabetes}
            onChange={this.handleCheckboxChange}
          />
          </div>
          <div id="alive">
          <p>Who b alive...yo</p>
          yer brothas
          <input
            id="siblings"
            name="alive"
            type="checkbox"
            checked={this.state.alive.siblings}
            onChange={this.handleCheckboxChange}
          />
          yer papas
          <input
            id="parents"
            name="alive"
            type="checkbox"
            checked={this.state.alive.parents}
            onChange={this.handleCheckboxChange}
          />
          ye ol grans
          <input
            id="grandparents"
            name="alive"
            type="checkbox"
            checked={this.state.alive.grandparents}
            onChange={this.handleCheckboxChange}
          />
          </div>

          <div id="education">
        <p>Check all educational credentials you have received: </p>
        GED or High School diploma
        <input
          id="gedOrhs"
          name="education"
          type="checkbox"
          checked={this.state.education.gedOrhs}
          onChange={this.handleCheckboxChange}
        />
        Associate's Degree
        <input
          id="associates"
          name="education"
          type="checkbox"
          checked={this.state.education.associates}
          onChange={this.handleCheckboxChange}
        />
        Bachelor's Degree
        <input
          id="bachelors"
          name="education"
          type="checkbox"
          checked={this.state.education.bachelors}
          onChange={this.handleCheckboxChange}
        />
        Master's Degree
        <input
          id="masters"
          name="education"
          type="checkbox"
          checked={this.state.education.masters}
          onChange={this.handleCheckboxChange}
        />
        PhD bruhhhh
        <input
          id="phd"
          name="education"
          type="checkbox"
          checked={this.state.education.phd}
          onChange={this.handleCheckboxChange}
        />
        Other Education
        <input
          id="other"
          name="education"
          type="checkbox"
          checked={this.state.education.other}
          onChange={this.handleCheckboxChange}
        />
        </div>


        </div>


      </div>
    )
  }
}
export default Checkboxes;
