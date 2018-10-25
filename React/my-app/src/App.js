import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import logo from './logo.svg';	
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
		{/*<img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
		</a>*/}
		 <p>
			Log In
		</p>
		<div className= "form-group">
			<label for="userName"> Username: </label>
			<input type="email" class="form-control" id="userName" aria-required="true" aria-invalid="true" required></input>
		</div>
		<div className= "form-group">
			<label for= "password">Password: </label>
			<input type="password" class="form-control" id="password" aria-required="true" aria-invalid="true" required></input>
		</div>
		<button type="submit" id = "btnSubmit" class="btn btn-success">Sign In</button>
					
        </header>
      </div>
	  
    );
  }
}

export default App;
