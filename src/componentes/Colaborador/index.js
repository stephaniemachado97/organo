import './Colaborador.css'

const Colaborador = (props) => {
    return(
       <div className='colaborador'>
         <div className='cabecalho' style={{ backgroundColor: props.corDeFundo }}>
            <img src={props.imagem} alt={props.nome}/>
         </div>
         <div className='rodape'>
            <h4> {props.nome} </h4>
            <h5> {props.cargo} </h5>
            <h6> {props.descricao} </h6>
         </div>
       </div>
    )
}

export default Colaborador