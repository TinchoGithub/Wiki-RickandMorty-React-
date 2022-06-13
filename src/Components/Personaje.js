
import {Link} from 'react-router-dom'
import {Card,Button,Col,Stack} from 'react-bootstrap'
const styles=
{
    card:{
        marginBottom:"30px",
        width: '18rem',
    },

}


function Personaje(props){
    console.log("Props", props)
    const {nombre, image, children, id} = props

    return(
        <>
                <Col>
                    <Card style={styles.card} bg="secondary" border="success">
                        <Card.Img variant="top" src={image} />
                        <Stack gap={2} className="col-md-5 mx-auto">
                        <Card.Body>
                            <Card.Title>{nombre}</Card.Title>
                            <Card.Text>
                            
                            </Card.Text>
                                {children}
                            <Button variant="info" as={Link} to={'/detalle/'+id} >Detalle</Button>
                        </Card.Body>
                        </Stack>
                    </Card>
                </Col>
            
        </>

    )
}

export default Personaje