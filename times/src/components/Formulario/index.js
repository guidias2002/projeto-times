import { useState } from 'react'
import Botao from '../Botao'
import Input from '../Input'
import Select from '../Select'
import './Formulario.css'

const Formulario = ({aoJogadorCadastrado, times, cadastrarTime}) => {

    const [nome, setNome] = useState('')
    const [posicao, setPosicao] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoJogadorCadastrado({
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
                    itens={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />

                <Botao texto='Criar Card' />
            </form>

            <form onSubmit={(evento => {
                evento.preventDefault()
                cadastrarTime({nome: nomeTime, cor: corTime})
            })}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Input
                    obrigatorio
                    label='Nome'
                    placeholder='Digite o nome do time'
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Input
                    obrigatorio
                    type='color'
                    label='Cor'
                    placeholder='Digite a cor do time'
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao texto='Criar um novo time'/>
            </form>
        </section>
    )
}

export default Formulario