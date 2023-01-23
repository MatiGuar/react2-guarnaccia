import {useEffect, useState} from 'react'
import DetalleProducto from '../../components/DetalleProducto/DetalleProducto'
import {useParams} from 'react-router-dom'
import './itemDetailContainer.css'

const ItemDetailContainer = () => {
    const [detalleProducto, setDetalleProducto] = useState({})
    const {id} = useParams()

    const getProducto = fetch (`https://fakestoreapi.com/products/${id}`,
    {
      method: 'GET',
    })
    

    useEffect(() =>{
        getProducto
            .then((res)=>{
                return res.json()
            })
            .then((data) => {
                setDetalleProducto(data)
            })
            .catch((error)=> {console.log(error)
            })
    }, [])

  return (
    <div>
       <DetalleProducto producto={detalleProducto} />
       
    </div>
  )
}

export default ItemDetailContainer 