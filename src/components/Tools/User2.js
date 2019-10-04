import React,{Component} from 'react';
import fire from '../../config/fire';
class User2 extends Component{
    constructor(props) {
        super(props);
        
      
        this.signup = this.signup.bind(this);
        this.state = {
         Tel: '',
         fullname: '',
         type:'',
         
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
        const userRef = db.collection('users').doc().set({
          fullname: this.state.fullname,
            type: this.state.type,
          Tel: this.state.Tel   
         });  
        this.setState({
          fullname: '',
          Tel: '',
         
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
     
  
    render(){
      
  
        return(
            <form onSubmit={this.addUser}>
       
       <input
    type=""
    name="type"
    placeholder="type"
    onChange={this.updateInput}
    value={this.state.type}
  />  
  
  <input
    type=""
    name="fullname"
    placeholder="fullname"
    onChange={this.updateInput}
    value={this.state.fullname}
  />
  <input
    type=""
    name="Tel"
    placeholder="เบอร์"
    onChange={this.updateInput}
    value={this.state.Tel}
  />
  <button type="submit">signup</button>
        
          
        
          <div>
          <button onClick={this.onLogin}>Back</button>
        </div>
       
        </form>
        
        )
    }
}
export default User2;