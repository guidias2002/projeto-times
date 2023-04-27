import {AiFillCloseCircle} from 'react-icons/ai'
import './Jogador.css'

const Jogador = ({ jogador, cor, aoDeletar }) => {
    return (
        <div className='card'>
            <AiFillCloseCircle 
                size={25} 
                color='tomato' 
                className='deletar' 
                onClick={() => aoDeletar(jogador.id)}
            />
            <div className='cabecalho' style={{ backgroundColor: cor }}>
                <img src='https://github.com/guidias2002.png' alt='Guilherme dias'/>
            </div>

            <div className='info'>
                <h4>{jogador.nome}</h4>
                <h5>{jogador.posicao}</h5>
            </div>
        </div>
    )
}

export default Jogador