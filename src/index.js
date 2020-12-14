import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Hi = ({ img, profile, name, date, time }) => (
  <div class="fb-post">
    <div class="main">
      <div id="header">
        <span> <img width="100px" src={profile} alt="profile" id="profile"></img> </span> <br />
        <span> &nbsp;&nbsp; <b>{name}</b> <br /> &nbsp;&nbsp;{date} - {time} </span> <br />

      </div>
      <br />

      <img class="img"  src={img} alt="pic" ></img>

      <br />
      <div class="btns">
        <span> <a href="#">Like</a> </span>
        <span> <a href="#">Comments</a> </span>
        <span> <a href="#">Share</a> </span>
      </div>

    </div>
  </div>
);

ReactDOM.render(
  <p>
    <Hi profile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYogahxfT9PymhNYwwQyxU7CxpXDPflu7vA&usqp=CAU" name="Shahzad" date="3-Dec-2020" time="09:00 am" img="https://wallpapercave.com/wp/wp2341159.jpg" />
    <br />
    <br />
    
    
  </p>
  , document.querySelector('#root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
