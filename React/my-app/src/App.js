import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';	
import './App.css';

const welcome = {
	title: 'Welcome',
	src: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/yRF5c-O/welcome-text-animation-over-bokeh-background_r7aij_yx__F0006.png',
	width: '200px'
};
const userName= 'User1';
const thePassword= 'pass';

class App extends Component {
	signIn(){
			if(!userName){
				alert("incorrect");
			}else{
				alert("correct");
			}
			
		}
	
  render() {
    return (
      <div className="App">
        <header className="App-header">
		<div className = "title">
			<h2>Resume Log-In</h2>
			<img 
				src={welcome.src}
				alt={welcome.title}
				width={welcome.width}/>
			
		</div>
		
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
			<input type="text" name="userName" />
			
		</div>
		<div className= "form-group">
			<label for= "password">Password: </label>
			<input type="password" name="password" />
		</div>
		
		<button onClick={this.signIn}>Sign In</button>
		
		
				
        </header>
      </div>

    );
  }
}

export default App;
