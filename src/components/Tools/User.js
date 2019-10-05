
import React from 'react';
import {browserHistory} from 'react-router';
import fire from '../../config/fire';
class User extends React.Component {
    constructor(props) {
        super(props);
       
     
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
        //ไป Cloud Firebase
        e.preventDefault();
        const db = fire.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
        const userRef = db.collection('users').add({
          
          email: this.state.email,
          password: this.state.password
                });  
        this.setState({
          fullname: '',
          email: '',
          password:''
        });
        //ไปอีกหน้า
        browserHistory.push("/");
        e.preventDefault();
        //ไปAuth
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(()=>{
        }).then(()=>{console.log()})
        .catch((error) => {
            console.log(error);
          })
      };
      
     

      

     
    render() {
    return (
        <form >
        
      
       
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
  
        <button onClick={this.addUser}>submit</button>
          
        
          <div>
          <button onClick={this.onLogin}>Back</button>
        </div>
        </form>
        
        );
      }
   }
export default User;