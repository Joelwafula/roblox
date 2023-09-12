import {Component} from 'react'
import './App.css';
import Cardlist from './component/card-list/Cardlist';


class App extends Component{
  constructor() {
    super();
      
        this.state = {
          monsters:[
      
          ],
          searchField  :""
           
        };
      }
      componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=> this.setState({monsters:users}))
      }
    
  render(){
    const {monsters, searchField} = this.state
    //above code is same as 
    //const monsters = this.state.monsters
    //conts searchField = this.state.seachField
    const filteredMonters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Montser Roledex</h1>
        <input type='search'
         placeholder='search monsters' 
         onChange={ 
          e=>{this.setState({searchField: e.target.value})}
        }
          />
        <Cardlist monsters={filteredMonters}/>
       
        
     
    </div>
    );

  }
}
  
  
 
  
 


export default App;
