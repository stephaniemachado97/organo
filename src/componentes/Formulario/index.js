import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => { //lista de times.

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [descricao, setDescricao] = useState('')

    const aoSalvar = (evento) => { //funcao para parar o comportamento de recarregar a pagina.
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
            descricao
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        setCargo('')
        setDescricao('')
    }

    return (
        <section className="Formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)} 
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo"
                    valor={cargo} 
                    aoAlterado={valor => setCargo(valor)} 
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o caminho da imagem" 
                    valor={imagem} 
                    aoAlterado={valor => setImagem(valor)}
                />
                <CampoTexto
                    label="Descrição"
                    obrigatorio={true}
                    placeholder="Descreva seu cargo"
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)} 
                />
                <ListaSuspensa 
                    label="Times" 
                    obrigatorio={true}
                    itens={props.times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao 
                    texto="Criar Card" 
                />
            </form>
        </section>
    )
}

export default Formulario