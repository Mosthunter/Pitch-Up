import React from 'react';
import {browserHistory} from 'react-router';
import firebase from '../config/fire';
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         email: '',
         fullname: ''
        };
      }
      updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
      addUser = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
        const userRef = db.collection('users').add({
          fullname: this.state.fullname,
          email: this.state.email
        });  
        this.setState({
          fullname: '',
          email: ''
        });
      };

      onLogin(){
        browserHistory.push("/")
      }
     
    render() {
    return (
        <form onSubmit={this.addUser}>
        <input
          type="text"
          name="fullname"
          placeholder="Full name"
          onChange={this.updateInput}
          value={this.state.fullname}
            />
  <input
    type="email"
    name="email"
    placeholder="Full name"
    onChange={this.updateInput}
    value={this.state.email}
  />
          <button type="submit">Submit</button>
          <div>
          <button onClick={this.onLogin}>Back</button>
        </div>
        </form>
        
        );
      }
   }
export default User;