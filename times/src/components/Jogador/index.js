import {AiFillCloseCircle} from 'react-icons/ai'

import './Jogador.css'

const Jogador = ({ nome, posicao, corPrimaria, aoDeletar }) => {
    return (
        <div className='card'>
            <AiFillCloseCircle size={25} color='tomato' className='deletar' onClick={aoDeletar}/>
            <div className='cabecalho' style={{ backgroundColor: corPrimaria }}>
                <img src='https://github.com/guidias2002.png' alt='Guilherme dias'/>
            </div>

            <div className='info'>
                <h4>{nome}</h4>
                <h5>{posicao}</h5>
            </div>
        </div>
    )
}

export default Jogador