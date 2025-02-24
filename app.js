import logo from './logo.svg';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';
import { useEffect, useState } from 'react';

function App() {
  
 //Objeto carro
 const carro = {
  modelo: "",
  marca: "",
  codigo: 0,
  ano: 0

 }

  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [carros, setCarros] = useState([]);
  const[objCarro, setObjcarro] = useState(carro);
  useEffect(()=>{
     fetch("http://localhost:8080/listar")
     .then(retorno => retorno.json())
     .then(retorno_convertido => setCarros(retorno_convertido));


  },[]);
  
  const aoDigitar = (e) =>{
    console.log(e.target);
  }
  return (
    <div>
      <p>{JSON.stringify(objCarro)}</p>
      <Formulario botao = {btnCadastrar}/>
      <Tabela vetor={carros}/>
    </div>
  );

<div>
  <Formulario botao = {btnCadastrar}/>
  <Tabela vetor={carros}/>
</div>



}

export default App;
