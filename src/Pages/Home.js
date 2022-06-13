
import Personajes from '../Components/Personajes'
import firebase from '../Config/firebase'



function Home(){
    console.log('firebase', firebase)
    return(
        <>
            <div>
                <Personajes/>
            </div>
            

        </>
    )
}

export default Home