import React from 'react';
import {browserHistory} from 'react-router';
import fire from '../config/fire';
class User extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
         email: '',
         fullname: '',
         password:''
        };
      }
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
      addUser = e => {
        e.preventDefault();
        const db = fire.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
        const userRef = db.collection('users').add({
          fullname: this.state.fullname,
          email: this.state.email,
          password: this.state.password
                });  
        this.setState({
          fullname: '',
          email: '',
          password:''
        });
      };
      signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{console.log(u)})
        .catch((error) => {
            console.log(error);
          })
      }
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
    placeholder="Email"
    onChange={this.updateInput}
    value={this.state.email}
  />
  <input
    type="password"
    name="password"
    placeholder="password"
    onChange={this.updateInput}
    value={this.state.password}
  />
  <button onClick={this.signup}>signup</button>
          <button  type="submit">Submit</button>
          
        
          <div>
          <button onClick={this.onLogin}>Back</button>
        </div>
        </form>
        
        );
      }
   }
export default User;