import React,{Component} from 'react' ;
import fire from '../../config/fire';
class User3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
         allData: []
        };
      }
     
    getData = () => {
        const db = fire.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
        var wholeData = []
        db.collection('users').orderBy('email', 'asc').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            // console.log(doc.id, '=>', doc.data());
            // console.log(doc.data().name + doc.data().age);
            console.log(doc.data());
            wholeData.push(doc.data())
          });
          console.log(wholeData)
          this.setState({allData: wholeData})
          console.log(this.state.allData)
        })
        .catch(error => {
          console.log('Error!', error);
        })
      }
    render(){
        var listOfData = this.state.allData.map((val, i)=>{
            var email = val. email
            var fullname = val.fullname
            var password = val.password
            return (
              <li key={i}>{ email} ({fullname} {password})</li>
            ) 
          })
        return(
            <div>
                <button onClick={this.getData}>
          Get Data
        </button>

        <ul>{listOfData}</ul>

            </div>
        )
    }
}
export default User3;