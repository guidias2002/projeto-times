import './Jogador.css'

const Jogador = ({ nome, posicao, corPrimaria }) => {
    return (
        <div className='card'>
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