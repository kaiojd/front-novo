import { useEffect, useState } from "react"


export default function Usuario() {
    const [contador, setContador] = useState(0)
     const [email, setEmail] = useState('')
    const [usuarios, setUsuarios] = useState([])
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const[modal, setModal]= useState(false)
useEffect(() => {
    document.title = 'contagem ' + contador;
    const buscarUsuarios = async () => {
        const resposta = await fetch('http://localhost:3000/usuarios')
        const data = await resposta.json()
        setUsuarios(data)
        console.log(data);
    }
    buscarUsuarios()

}, [contador])

    const editar = (usuario ) => {
      if(!usuario || usuario.nome){
        alert('erro ao buscar usuario')
    
        }
        setModal(true)
       setEmail(usuario.email)
       setNome(usuario.nome)
       setSenha(usuario.senha)
        console.log(usuario);
    }

     const confirmarEdicao = () => {
        console.log(usuario);
    }

    return (
        <div>
             <h1>Usuario</h1>
            <h1>{contador}</h1>

            <button onClick={() => {setContador(contador +1)}}>
                somar
            </button>

            {modal &&(
               <div classNome="fundo-modal">
                    <div classNome="fundo-content">
                <input type = "text" id="email"
            placeholder="DIGITE EMAIL"
            value={email}
            onChange = {(e) => setEmail(e.target.value)}

            />

               <input type = "text" id="nome"
            placeholder="DIGITE SEU NOME"
            value={nome}
            onChange = {(e) => setNome(e.target.value)}

            />

            <input type = "text" id="senha"
            placeholder="DIGITE SUA SENHA"
            value={senha}
            onChange = {(e) => setSenha(e.target.value)}

            />

          
          <button onClick={confirmarEdicao}>confirmar edição</button>
          
          
            <h3>{email}</h3>
            <h3>{nome}</h3>
            <h3>{senha}</h3>
                </div>
                    </div>
            )}

           

        <ul>
            {usuarios.map( (usuario) => (
                <li key={usuario.id}>
                    <b>{usuario.nome}</b>
                   <br />
                    STATUS: {usuario.ativo ? 'ativo' : 'desativo'}
                <br />
                <button onClick={() => editar(usuario)}>editar</button>
                </li>
            ))}
        </ul>
        </div>
      
    )
}