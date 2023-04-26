import { useState } from "react";
import Formulario from "./components/Formulario";
import Time from "./components/Times";

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Vasco da Gama',
      cor: '#000',
    },
    {
      nome: 'Flamengo',
      cor: '#f20505',
    },
    {
      nome: 'Fluminense',
      cor: '#831d1c',
    },
    {
      nome: 'Botafogo',
      cor: '#000',
    }
  ])

  const inicial = [
    {
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[0].nome
    },
    {
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[0].nome
    },
    {
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[0].nome
    },
    {
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[0].nome
    },
    {
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[1].nome
    },
    {
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[1].nome
    },
    {
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[1].nome
    },
    {
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[1].nome
    },
    {
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[2].nome
    },
    {
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[2].nome
    },
    {
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[2].nome
    },
    {
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[2].nome
    },
    {
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[3].nome
    },
    {
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[3].nome
    },
    {
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[3].nome
    },
    {
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[3].nome
    },
  ]

  const [jogadores, setJogadores] = useState(inicial)

  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador])
  }

  function deletarJogador() {
    console.log('deletando jogador')
}

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time =>{
      if(time.nome === nome) {
        time.cor = cor;
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
        cor={time.cor}
        jogadores={jogadores.filter(jogador => jogador.time === time.nome)}
        aoDeletar={deletarJogador}
        mudarCor={mudarCorDoTime}
      />)}
    </div>
  );
}

export default App;
