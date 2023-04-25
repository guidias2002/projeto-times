import { useState } from "react";
import Formulario from "./components/Formulario";
import Time from "./components/Times";

function App() {

  const times = [
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
  ]

  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdicionado = (jogador) => {
    debugger
    setJogadores([...jogadores, jogador])
  }

  return (
    <div className='app-times'>
      <Formulario times={times.map(time => time.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}/>    

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria}
        jogadores={jogadores.filter(jogador => jogador.time === time.nome)}
      />)}
    </div>
  );
}

export default App;
