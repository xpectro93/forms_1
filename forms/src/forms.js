  import React, {Component} from 'react';
  import './forms.css';
  let countries = require('./countries.json');


  class Form extends Component {
    constructor() {
      super();
      this.state = {name: "",
        email: "",
        favorite: "",
        why:"",
        country:"",
        formSubmitted: false,
        message:"",
        robotQuestions:"",
        water:"",
        marital:"",
        situation:""
            };
      this.handleChange = this.handleChange.bind(this);
      // this.handleChangeEmail = this.handleChangeEmail.bind(this);
    }

    populate = () => {
      return countries.map(country=><option key={country.name} value ={country.name} > {country.name} < /option>)
    }

    handleSubmitted = e => {
    e.preventDefault();
    // const { formSubmitted} = this.state;
    this.setState({
      formSubmitted:true
    })


    }

    handleSubmit = e => {
    e.preventDefault();
    const { name, email, favorite, why, country, water,marital,situation} = this.state;

    if (name && email && favorite && why && country && water &&marital && situation) {
      this.setState({
        completed: true,
        message:
          <div>
          <p>You name is {name}</p>
          <p>Your email is {email}</p>
          <p>You diet consists of {favorite}</p>
          <p>You wan to go to mars because...{why}</p>
          <p>You originate from  {country}</p>
          <p>Can you hold dat breathe? {water}</p>
          <p>Marital Status : {marital}</p>
          <button onClick={this.handleSubmitted}>Submit</button>
          </div>


      });
    } else {
      this.setState({
        message: "Please complete the form."
      });
    }
  };

    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }


    render() {
      console.log(this.state)
      return (
        < >
        <h1> Mission to Mars Registration Form </h1>
        {this.state.formSubmitted ? (
          <p>Thank You</p>
        ): (
          <form  onChange={this.handleChange}>

          <label htmlFor = "name" > What is your name? < /label>

          <input onChange = {this.handleChange}
          type = "text"
          placeholder = "A name"
          name = "name"
          value = {this.state.name}
          id = "name"
          / >

          <br/ >
          <label htmlFor = "birthday" > What is your date of birth ? < /label>

          <input
          type = "date"
          id = "start"
          name = "trip-start"
          min = "1900-01-01"
          max = "2019-01-07"
          />


          <br/>
          <label htmlFor = "email" > Email < /label>
          <input onChange = {this.handleChange}
          type = "text"
          placeholder = "A email"
          name = "email"
          value = {this.state.email}
          id = "email" / >

          <br/>
          <br/>

          <div id="food">
          <label htmlFor="food" >Choose a Food type</label>
          <select onChange={this.handleChange} name = "favorite" value = {this.state.favorite} >
          <option value = "omnivore" > Omnivore </option>
          <option value = "vegetarian" > Vegetarian </option>
          <option value = "vegan" > Vegan </option>
          </select >
          </div>

          <br/>

          <div id="country">
          <label htmlFor="country"> What is your country of origin?</label>
          <select onChange={this.handleChange} placeholder="Select Country" name = "country" value = {this.state.country}>
          {this.populate()}
          </select>
          </div>

          <div id="whytext">
          <label htmlFor = "why">Why do you want to be a Mars explorer?< /label>
          <input  onChange = {this.handleChange}
            type="text"
            placeholder="Why doe"
            name="why"
            value={this.state.why}
            id ="why"
            />
          </div>

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


          <button onClick ={this.handleSubmit}>Submit</button>
          {this.state.message}



          </form>
        )}




        </>
        );}
  }

  export default Form;
