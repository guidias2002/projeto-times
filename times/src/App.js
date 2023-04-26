import { useState } from "react";
import Formulario from "./components/Formulario";
import Time from "./components/Times";

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Vasco da Gama',
      corPrimaria: '#000',
    },
    {
      nome: 'Flamengo',
      corPrimaria: '#f20505',
    },
    {
      nome: 'Fluminense',
      corPrimaria: '#831d1c',
    },
    {
      nome: 'Botafogo',
      corPrimaria: '#000',
    }
  ])

  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador])
  }

  function deletarJogador() {
    console.log('deletando jogador')
}

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time =>{
      if(time.nome === nome) {
        time.corPrimaria = cor;
      }
      return time;
    }))
  }


  return (
    <div className='app-times'>
      <Formulario times={times.map(time => time.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}/>    

      {times.map((time, indice) => <Time 
        key={indice} 
        time={time}
        corPrimaria={time.corPrimaria}
        jogadores={jogadores.filter(jogador => jogador.time === time.nome)}
        aoDeletar={deletarJogador}
        mudarCor={mudarCorDoTime}
      />)}
    </div>
  );
}

export default App;
