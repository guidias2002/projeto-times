import { useState } from 'react'
import Botao from '../Botao'
import Input from '../Input'
import Select from '../Select'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [posicao, setPosicao] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoJogadorCadastrado({
            nome,
            posicao,
            time
        })

        setNome('')
        setPosicao('')
        setTime('')
    }

    return (
        <section className='section-form'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador</h2>
                <Input
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Input
                    obrigatorio={true}
                    label='Posição'
                    placeholder='Digite sua posição'
                    valor={posicao}
                    aoAlterado={valor => setPosicao(valor)}
                />
                <Select 
                    obrigatorio={true} 
                    label='Time' 
                    itens={props.times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />

                <Botao texto='Criar Card' />
            </form>
        </section>
    )
}

export default Formulario