import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';
import App from './App';

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
)





// function NumberList(props) {
//   const item = props.item;
//   const listItems = item.map((item) =>
//     <li key={item}>
//       { item }
//     </li>
//   );
//   return (
//     <ul>
//       { listItems }
//     </ul>
//   );
// }

// const item=['abc','def','ghi']
// const root =ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//   <NumberList item={item} />
    
//   </>
// )



// const myName=<h1>Vikash</h1>

// const myAge=<h1>23</h1>

// const myjob=<h1>Intern</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     {myName}
//     {myAge}
//     {myjob}
//   </>
// )

// root.render(myAge)
// const myElement=<h1> React is {5+5} times better with JSX</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement)

// const demoElement= "I am a JSX example"
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(demoElement)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// 
// root.render(
//   <>
//  <div> 
//  <h1>
//   NineLeaps
//  </h1>
//   <p>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet perferendis, fugiat aut quia voluptas, deleniti sunt ipsa quibusdam necessitatibus explicabo provident animi? Dolorum consequuntur porro harum vel eius repellendus!
//   </p>
//  </div>
 
  // </>
 
 
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
