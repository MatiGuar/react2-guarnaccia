import { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);

    return (

        <div className='d-flex rounded bg-light justify-content-center aling-items-center' width="20px">
            <button className='m-2 p-2 rounded fw-bolder' onClick={() => setContador(contador -1)}>-</button>
            <span className='m-2 fw-bolder'>{contador}</span>
            <button className='m-2 p-2 rounded fw-bolder' onClick={() => setContador(contador +1)}>+</button>
        </div>
    )
}

export default Contador;