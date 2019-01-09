  import React, {Component} from 'react';
  import Checkboxes from './checkboxes.js'
  import './forms.css';

  let countries = require('./countries.json');


  class Form extends Component {
    constructor() {
      super();
      this.state = {
        name: "",
        email: "",
        favorite: "",
        why:"",
        country:"",
        formSubmitted: false,
        message:""
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
    const { name, email, favorite, why, country} = this.state;

    if (name && email && favorite && why && country) {
      this.setState({
        completed: true,
        message:
          <div>
          <p>You name is {name}</p>
          <p>Your email is {email}</p>
          <p>You diet consists of {favorite}</p>
          <p>You wan to go to mars because...{why}</p>
          <p>You originate from  {country}</p>
          <button onClick={this.handleSubmitted}>Submit</button>
          </div>


      });
    } else {
      this.setState({
        message: <p>please complete form</p>
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
        <div className="masterbox">
        <h1> Mission to Mars Registration Form </h1>
        {this.state.formSubmitted ? (
          <p>Thank You</p>
        ): (
          <form  id="leForm" onChange={this.handleChange}>

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
          <option disabled > Select Diet Type </option>
          <option value = "omnivore" > Omnivore </option>
          <option value = "vegetarian" > Vegetarian </option>
          <option value = "vegan" > Vegan </option>
          </select >
          </div>

          <br/>

          <div id="country">
          <label htmlFor="country"> What is your country of origin?</label>
          <br/>
          <select onChange={this.handleChange} placeholder="Select Country" name = "country" value = {this.state.country}>
          <option disabled> Select Country</option>
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




          <button onClick ={this.handleSubmit}>Submit</button>
          {this.state.message}



          </form>

        )}



        <Checkboxes />
        </div>
        <br/><br/><br/>
        </>
        );}
  }

  export default Form;
