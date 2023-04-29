import { useState } from "react";
import Formulario from "./components/Formulario";
import Time from "./components/Times";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Vasco da Gama',
      cor: '#000',
    },
    {
      id: uuidv4(),
      nome: 'Flamengo',
      cor: '#f20505',
    },
    {
      id: uuidv4(),
      nome: 'Fluminense',
      cor: '#831d1c',
    },
    {
      id: uuidv4(),
      nome: 'Botafogo',
      cor: '#000',
    }
  ])

  const inicial = [
    {
      favorito: false,
      id: uuidv4(),
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[0].nome
    },
    {
      favorito: false,
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[0].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[0].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[0].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[1].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[1].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[1].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[1].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[2].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[2].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[2].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[2].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[3].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[3].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[3].nome
    },
    {
      favorito: false,
      id: uuidv4(),
      nome: 'Guilherme Dias',
      posicao: 'atacante', 
      time: times[3].nome
    },
  ]

  const [jogadores, setJogadores] = useState(inicial)

  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador])
  }

  function deletarJogador(id) {
    setJogadores(jogadores.filter(jogador => jogador.id !== id))
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time =>{
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }))
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, {...novoTime, id: uuidv4()}])
  }

  function resolverFavorito(id) {
    setJogadores(jogadores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))
  }


  return (
    <div className='app-times'>
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}
      />    

      {times.map((time, indice) => <Time 
        key={indice} 
        time={time}
        cor={time.cor}
        jogadores={jogadores.filter(jogador => jogador.time === time.nome)}
        aoDeletar={deletarJogador}
        mudarCor={mudarCorDoTime}
        aoFavoritar={resolverFavorito}
      />)}
    </div>
  );
}

export default App;
