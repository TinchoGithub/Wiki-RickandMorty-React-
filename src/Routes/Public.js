import {
    Routes,
    Route,
    Navigate
} from 'react-router-dom'
import Home from '../Pages/Home'
import Detalle from '../Pages/Detalle'
import Login from '../Pages/Login'
import Registro from '../Pages/Registro'
import NotFound from '../Pages/NotFound'

function Public(){
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Navigate to="/" />} />
            <Route path='/alta' element={<Registro/>} />
            <Route path='/ingresar' element={<Login/>} />
            <Route path='/detalle/:id' element={<Detalle/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
    )
}

export default Public
