import React from 'react';
import $ from 'jquery';
import CurrentAttendees from './CurrentAttendees.jsx';
import RegisterAttendees from './RegisterAttendees.jsx';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      attendees: []
    };

    this.getAttendees = this.getAttendees.bind(this);
    this.postForm = this.postForm.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
  }

  componentDidMount(){
    this.getAttendees();
  }

  getAttendees() {
    $.ajax({
      url: ' http://localhost:3000/attendees',
      type: 'GET',
      success: (data) => {
        this.setState({
         attendees:data })
        console.log('get success', this.state.attendees)},
      error: (err) => console.log(err)
    });
  }

  postForm(item) {
    $.ajax({
      url: ' http://localhost:3000/attendees',
      type: 'post',
      data:item,
      success: (data) => {this.getAttendees()},
      error: (err) => console.log(err)
    });
  }

  updateInfo(item){
    console.log('person', item)
    // $.ajax({
    //   url: ' http://localhost:3000/attendees',
    //   type: 'put',
    //   data:item,
    //   success: (data) => {this.getAttendees()},
    //   error: (err) => console.log(err)
    // });
  }

  render(){
    return (
      <div className="main">
        <RegisterAttendees postForm={this.postForm}/>
        <CurrentAttendees attendees={this.state.attendees} updateInfo={this.updateInfo}/>
    </div>
    )
  }
}

export default App;

{/* <div class="main">
<div class="attendee-form">
  <!-- NOTE: This does not contain all required fields. -->
  <h2>Register Attendee</h2>
  <label>First Name:
    <input type="text"></input>
  </label>
  <label>Last Name:
    <input type="text"></input>
  </label>
  <button>REGISTER</button>
</div>
<div class="attendees">
  <h2>Attendees</h2>
  <h3>Beginner</h3>
  <div>Hoban Washburn</div>
  <div>Jayne Cobb</div>
  <h3>Intermediate</h3>
  <div>Zoe Washburn</div>
  <h3>Expert</h3>
  <div>Malcom Reyolds</div>
  <div>Kaylee Frye</div>
</div>
</div> */}
