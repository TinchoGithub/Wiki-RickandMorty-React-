import React,{useState} from "react"
import { useForm} from "react-hook-form";
import Input from "../Components/Input";
import {Form,Button} from 'react-bootstrap'
import firebase from "../Config/firebase";
import {loginMessage} from "../Utils/errorMessage"
import AlertCustom from "../Components/AlertCustom";

function Login(){
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [alert,setAlert]=useState({variant:'',text:''})
    
    const onSubmit= async (data)=>{
        
        console.log("Form",data)
        try{
            const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email,data.password)
            console.log("responseUser",responseUser.user.uid)
            if(responseUser.user.uid){
                const userInfo = await firebase.db.collection("usuarios")
                .where("userId","==",responseUser.user.uid)
                .get()
                if(userInfo){
                    const nombre = userInfo.docs[0]?.data().name
                    setAlert({variant:"success",text:'Bienvenido'+(nombre || "")})
                }
            }
            
        }catch(e){
            console.log(e)
            setAlert({variant:"danger",text:loginMessage[e.code]||"Ha ocurrido un error"})
            
        }
    }       
        

    return(
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Email" placeholder="Ingrese Email" type="email" register={{...register("email", { required: true })}} />
                {errors.email && <span>El campo nombre es obligatorio</span>}
                <Input label="Contraseña" placeholder="Ingrese Contraseña" type="password" register={{...register("password", { required: true })}} />
                {errors.password && <span>El campo nombre es obligatorio</span>}
                <Button type="submit" variant="warning">Ingresar</Button>
                <AlertCustom {...alert} />
            </Form>
            
        </div>
    )      
}

export default Login

