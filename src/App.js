import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from "./Header"


const App = () => {
  const[data,setdata]=useState([{
    id:1,
    firstname:"sateesh",
    lastname:"yenda",
    username:"sateesh123",
    age:"23",
    salary:10000
  }])
  return (
    <div>
     <Header/>

<table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Firstname</th>
      <th scope="col">Last name</th>
      <th scope="col">username</th>
      <th scope="col">age</th>
      <th scope="col">salary</th>
      
    </tr>
  </thead>
  <tbody>
    
        {
          data.map((element)=>{
            return(
              
              <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.firstname}</td>
                <td>{element.lastname}</td>
                <td>{element.username}</td>
                <td>{element.age}</td>
                <td>{element.salary}</td>

                <td><FontAwesomeIcon icon ="fa-pen-to-square"/></td>
               <td> <FontAwesomeIcon icon="fa-trash"/></td>
                
              </tr>              
            )
          })
        }
    
   
  </tbody>
</table>
    </div>
  )
}

export default App