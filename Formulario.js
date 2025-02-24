function Formulario(botao, eventoTeclado) {
    return (
        <form>
            
            <input type='text' onChange= { eventoTeclado} name="modelo" placeholder="Modelo" className="form-control" />
            <input type='text' onChange= { eventoTeclado} name="marca" placeholder="Marca" className="form-control" />
            <input type='text' onChange= { eventoTeclado} name="codigo" placeholder="Codigo" className="form-control" />
            <input type='text' onChange= { eventoTeclado} name="ano" placeholder="Ano" className="form-control" />
            
            
            
            <input type='text' placeholder="Modelo" className="form-control" />
            <input type='text' placeholder="Marca" className="form-control" />
            <input type='text' placeholder="Codigo" className="form-control" />
            <input type='text' placeholder="Ano" className="form-control" />

            botao
            ?
            <input type="button" value="Cadastrar" className="btn btn-primary" />
            :
            <div>
                <input type="button" value="Alterar" className="btn btn-warning" />
                <input type="button" value="Remover" className="btn btn-danger" />
                <input type="button" value="Cancelar" className="btn btn-secondary" />
            </div>


        </form>
    )
}


export default Formulario;
