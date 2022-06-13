import React, {useState, useEffect} from 'react'
import Personaje from './Personaje'
import {getAllPersonajes} from '../Service/personajesServices'
import {Row, Stack, Button, Spinner, Container} from 'react-bootstrap'
import background from "../Img/background5.jpg"

const styles={
    h1:{
        color:"#33FF00"
    }
}


function Personajes(){
    const [listaPersonajes, setListaPersonajes]=useState([])
    const [loading, setLoading]=useState(true)
    const [character]= useState("character")
    const [next, setNext] = useState("")
    const [prev, setPrev]= useState("")
    
    useEffect(
        ()=>{
            
            const request = async ()=>{
                
                try{
                    setLoading(true)
                    const response = await getAllPersonajes(character)
                    console.log('response',response)
                    setListaPersonajes(response.data.results)
                    setNext(response.data.info.next)
                    setPrev(response.data.info.prev)
                    
                    setLoading(false)
                }catch(e){
                    console.log(e)
                    setLoading(false)
                }
                
            }
            request()
        },
        [character]
    )
    const Siguiente=()=>{   
        setLoading(true)
        fetch(next)
        .then(res=>res.json())
        .then(data=>{
            console.log('data', data)
            setListaPersonajes(data.results)
            setNext(data.info.next)
            setPrev(data.info.prev)
           
            setLoading(false)

        })
        .catch(e=>{
            console.log(e)
            setLoading(false)
            
        })        
    }

    const Anterior=()=>{  
        setLoading(true) 
        fetch(prev)
        .then(res=>res.json())
        .then(data=>{
            console.log('data', data)
            setListaPersonajes(data.results)
            setNext(data.info.next)
            setPrev(data.info.prev)
            
            setLoading(false)

        })
        .catch(e=>{
            console.log(e)
            setLoading(false)
            
        })        
    } 
   
    
    if (loading){
        return(
            <Container>
                <Stack gap={1} className="col-md-5 mx-auto">
                <Spinner size="xl" animation="border" variant="success" />
                </Stack>
            </Container>
        )
    }else{
        return(
            
                <div style={{ background: `url(${background})` }} >
                    
                    <h1 className="text-center mb-3" style={styles.h1}>Rick and Morty WIKI</h1>
                    
                
                    <Row>
                        {listaPersonajes.map(listaPersonaje=><Personaje image={listaPersonaje.image} nombre={listaPersonaje.name} id={listaPersonaje.id} />)}
                    </Row>

                    <Stack gap={2} className="col-md-5 mx-auto">
                        <Button  onClick={Siguiente }variant="outline-info">Siguiente</Button>
                        <Button onClick={Anterior } variant="outline-info">Anterior</Button>
                    </Stack>
                    <div className="text-center mb-3" text-color="green" >
                        Desarrollado por M a r t i n P e r e z
                    </div>
                
                    
                </div>
                
        )
    }

    
}

export default Personajes