import React from 'react';

class RegisterAttendees extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      shirt: '',
      skillLevel: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);
    this.props.postForm(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      shirt: '',
      skillLevel: '',
    })
  }

  render() {
    return (
      <div className="attendee-form">
        <h2>Register Attendee</h2>
        <label>First Name:
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
        </label>

        <label>Last Name:
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
        </label>

        <label>Email Address:
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
        </label>

        <label>Shirt Size (XS, S, M, L, XL, XXL):
          <input type="text" name="shirt" value={this.state.shirt} onChange={this.handleChange}/>
        </label>

        <label>Experience Level (beginner, intermediate, expert):
          <input type="text" name="skillLevel" value={this.state.skillLevel} onChange={this.handleChange}/>
        </label>
        <button onClick={this.handleSubmit}>REGISTER</button>
      </div>
    )
  }
}

export default RegisterAttendees;

