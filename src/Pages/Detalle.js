import React,{useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import {getByIdPersonajes} from "../Service/personajesServices"
import {Card, Button, Container, Spinner, Stack } from 'react-bootstrap'
import {Link} from 'react-router-dom'
const styles=
{
    card:{
        marginBottom:"20px",
        width: '18rem'
    },


}

function Detalle(){
    const {id} = useParams()
    console.log("id personaje",id)
    const [personaje,setPersonaje] = useState({})
    const [loading,setLoading] = useState(true)
    
    useEffect(
        ()=>{
            const request = async ()=>{
                
                try{
                    setLoading(true)
                    const response = await getByIdPersonajes(id)
                    console.log('response',response)
                    setPersonaje(response.data)
                    setLoading(false)
                }catch(e){
                    console.log(e)
                    setLoading(false)
                }
                
            }
            request()
        },
        [id]
    )
    if(loading){
        return(
            <div>
                <Stack gap={1} className="col-md-5 mx-auto">
                <Spinner size="xl" animation="border" variant="success" />
                </Stack>
            </div>
        )
    }else{
        return(
            <>
          
                <Container>
                    <Card style={styles.card} bg="secondary" border="primary">
                        <Card.Img variant="top" src={personaje.image} />
                        <Card.Body>
                            <Card.Title>{personaje.name}</Card.Title>
                            <Card.Text>{personaje.status}</Card.Text>
                            <Card.Text>{personaje.species}</Card.Text>
                            <Card.Text>{personaje.gender}</Card.Text>
                            <Card.Text>{personaje.origin.name}</Card.Text>
                            <Card.Text>{personaje.created}</Card.Text>
                            
                        </Card.Body>
                        <Button variant="primary" as={Link} to={'/'} >Home</Button>
                    </Card>
                    
                </Container>
               
            </>
        )
    }
    
}

export default Detalle