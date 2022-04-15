import React, { Component, useEffect, useState} from "react";
import api from "./api";
import axios from "axios";

function App(){
  const [loaging, setLoaging] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchTitle, setsearchTitle] = useState("");

  useEffect(() => {
    const loadUsers = async() => {
      setLoaging(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
        );
      setUsers(response.data);
      setLoaging(false);
    };

    loadUsers();
}, []);

  return(
    <div className="App">
      
      <h1>Buscar</h1>
      
      <input 
      style={{width:"30%", height:"25px"}}
      type='text'
        placeholder="Digite o nome ou categoria da(s) empresa(s)"
        onChange={(e) => setsearchTitle(e.target.value)}
      />
      {loaging ? (
      <h4>carregando...</h4>
      ) : (

        users.filter((value) =>{
          if(searchTitle === ""){
            return value
          }
          else if (
            value.company.bs.toLowerCase().includes(searchTitle.toLowerCase())
            
            )
          {
              return value;
          }

          else if (
            value.name.toLowerCase().includes(searchTitle.toLowerCase())
          )
          {
            return value;
          }
        })
        
        .map((item) => <h5 key={item.id}>  
        <h2><li>Nome: {item.name}</li></h2> 
        <p>Usuário: {item.username}</p>
        <p>Email: {item.email}</p>
        <p>Endereço: {item.address.street} / {item.address.suite} / {item.address.city} / {item.address.zipcode}</p>
        <p>Localização: {item.address.geo.lat} / {item.address.geo.lng}</p>
        <p>Telefone: {item.phone}</p>
        <p>Site: {item.website}</p>
        <p>company: {item.company.name} / {item.company.catchPhrase} / {item.company.bs} </p>
        
        </h5>)   
        
      )}
    </div>
  );
}
      
export default App;

