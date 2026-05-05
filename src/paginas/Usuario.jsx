import { useEffect, useState } from "react"


export default function Usuario() {
    const [contador, setContador] = useState(0)

useEffect(() => {
    document.title = 'contagem ' + contador
}, [contador])

    return (
        <div>
             <h1>Usuario</h1>
            <h1>{contador}</h1>

            <button onClick={() => {setContador(contador +1)}}>somar</button>
        </div>
      
    )
}