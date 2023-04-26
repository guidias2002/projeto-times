import Jogador from '../Jogador'
import './Times.css'

const Time = ({ time, jogadores, aoDeletar, corPrimaria, mudarCor }) => {
    return (
        (jogadores.length > 0) ? <section className='time'>
            <input onChange={evento => mudarCor(evento.target.value, time.nome)} value={corPrimaria} type='color' className='input-cor'/>
            <h3 style={{ borderColor: corPrimaria }}>{time.nome}</h3>
            <div className='card-jogadores'>
                {jogadores.map((jogador, indice) => {
                    return <Jogador key={indice} corPrimaria={corPrimaria} nome={jogador.nome} posicao={jogador.posicao} aoDeletar={aoDeletar} />
                })}
            </div>
        </section> 
        : ''
    )
}

export default Time