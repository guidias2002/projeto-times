import Jogador from '../Jogador'
import './Times.css'

const Time = (props) => {
    return (
        (props.jogadores.length > 0) ? <section className='time'>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='card-jogadores'>
                {props.jogadores.map(jogador => <Jogador jogador={jogador.nome} corPrimaria={props.corPrimaria} nome={jogador.nome} posicao={jogador.posicao} />)}
            </div>
        </section> 
        : ''
    )
}

export default Time