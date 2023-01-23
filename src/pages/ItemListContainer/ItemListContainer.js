import { useEffect, useState } from "react";
import  ItemList from '../../components/ItemList/ItemList'
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [filtrarProducto, setFiltrarProducto] = useState([])
    const {category} = useParams() 

    const getProductos = fetch ('https://fakestoreapi.com/products', {
        metho: "GET",
        headers: {
            "content-type" : "json",
        },
    }) 

    useEffect(() => {
        getProductos
        .then((res)=>{
            return res.json();
        })
        .then((resp) => {
            setProductos(resp);
        })
        .catch((error)=> console.log(error))
    }, [])
    
    useEffect(() => {
        if (category) {
            const removeCaracteres = category?.includes('%20') 
            ? category.replace('%20',' ') 
            : category
            const filtrarProducto = productos.filter((producto) => producto.category === removeCaracteres)
            setFiltrarProducto( filtrarProducto)
        }
        
    }, [category])



  return (
    <div>

        <ItemList productos={category ? filtrarProducto : productos }/>
    </div>
  )
}

export default ItemListContainer