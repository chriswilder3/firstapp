import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const sampleELem = <table>
                        <th> <td>Name</td> <td>Age</td></th>
                        <tr> <td>harry </td> <td> 40</td></tr>
                        <tr> <td>andy </td> <td> 23</td></tr>
                        <tr> <td>havel </td> <td> 34</td></tr>
                    </table>
root.render(sampleELem);