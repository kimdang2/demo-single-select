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

