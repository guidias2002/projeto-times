import Jogador from '../Jogador'
import './Times.css'
import HexToRgba from 'hex-to-rgba'


const Time = ({ time, jogadores, aoDeletar, cor, mudarCor }) => {
    return (
        (jogadores.length > 0) ? <section className='time' style={{backgroundColor: HexToRgba(time.cor, '0.6')}}>
            <input onChange={evento => mudarCor(evento.target.value, time.nome)} value={cor} type='color' className='input-cor'/>
            <h3 style={{ borderColor: cor }}>{time.nome}</h3>
            <div className='card-jogadores'>
                {jogadores.map((jogador, indice) => {
                    return <Jogador key={indice} cor={time.cor} nome={jogador.nome} posicao={jogador.posicao} aoDeletar={aoDeletar} />
                })}
            </div>
        </section> 
        : ''
    )
}

export default Time