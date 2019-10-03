
import React from 'react';
import {browserHistory} from 'react-router';
import fire from '../../config/fire';
class User extends React.Component {
    constructor(props) {
        super(props);
       
        this.signup = this.signup.bind(this);
        this.state = {
         email: '',
         fullname: '',
         password:''
        };
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
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(()=>{
        }).then(()=>{console.log()})
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
        
          
        
          <div>
          <button onClick={this.onLogin}>Back</button>
        </div>
        </form>
        
        );
      }
   }
export default User;