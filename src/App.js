import React, {Component} from 'react';
import './App.css';
import Alert from './Components/Alert';
import Media from './Components/Media';
class App extends Component{
  render(){
    return (  
      <div className="App container col-sm-6">
      <div className="alert alert-info">  
          <h3 className="text-danger">Ini Project Pertama React JS</h3>  
          <p>Belajar React JS itu mudah</p>  
          <button className="mr-1 btn btn-success">Setuju</button>  
          <button className="btn btn-info">Iya Dong</button>
      </div>  

      <Alert type={this.state.type} header={this.state.header}>  
          {this.state.content}  
      </Alert>

      <h4>Alert Control</h4> 
      <b className="text-left">Tipe Alert</b>
      <select className="form-control" name="type" value={this.state.type} onChange={this.changeTypeAlert}>
        <option value="success">Success</option>
        <option value="warning">Warning</option>
        <option value="danger">Danger</option>
        <option value="info">Info</option>
      </select>

      <b className="text-left">Header Alert</b>
      <input
        type="text" name="header" className= "form-control" value={this.state.header} onChange={this.changeHeaderAlert}/>

      <b className="text-left">Content Alert</b>
      <input
      type="text" name="content" className= "form-control" value={this.state.content} onChange={this.changeContentAlert}/> 

      <Media image="react.png" title="React JS">  
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus  
                scelerisque ante sollicitudin. Cras purus odio, vestibulum  
                in vulputate at, tempus viverra turpis  
      </Media>  

      <Media image="angular.png" title="Angular JS">  
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus  
                scelerisque ante sollicitudin. Cras purus odio, vestibulum  
                in vulputate at, tempus viverra turpis  
      </Media>  
      </div>  
      
    );  
  
  }
  constructor(){
    super();
    this.state = {
      type: "danger",
      header: "Fatal Error",
      content: "Ini content dari alert"
    }

  }
  changeTypeAlert=(event)=>{
    this.setState({type: event.target.value});
  }
  changeHeaderAlert=(event)=>{
    this.setState({header: event.target.value});
  }
  changeContentAlert=(event)=>{
    this.setState({content: event.target.value});
  }
}
export default App;