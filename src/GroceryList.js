import { Component } from "react";
import basket from './shopping-basket.png';


export class GroceryList extends Component{
    constructor(){
    super();
   this.state = {
    userInput: '',
    groceryList: []
    }
 }
    onChangeEvent(e){
        this.setState({userInput:e})
    }

   addItem(input){
    if(input === ''){
        alert("Please enter in item")
    }else{
    let listArray = this.state.groceryList;
    listArray.push(input);
    this.setState({groceryList: listArray, userInput: ''})
   }
}


deleteItem(){
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({groceryList: listArray});
}

crossWord(event){
   const li = event.target;
   li.classList.toggle ('crossed');
}

onFormSubmit(e){
e.preventDefault()
}


    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
               <input type="text"
               placeholder="What do you want to buy?"
               onChange={(e) => {this.onChangeEvent(e.target.value)}}
               value={this.state.userInput}/> 
            </div>
           
            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="add btn">Add</button>
            </div>
            <ul>
                {this.state.groceryList.map((item, index) => (
                   <li onClick={this.crossWord} key={index}>
                    <img src={basket} width="20px" alt="basket"/>
                    {item}</li> 
                ))}
            </ul>
            <div className="container">
                <button onClick={() => this.deleteItem()} className="delete btn">Delete</button>
            </div>
            </form>   
        )
    }
}
