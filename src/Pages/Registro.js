
import React from "react"
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import {Form,Button} from 'react-bootstrap'
import firebase from "../Config/firebase";

function Registro(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit= async (data)=>{
        console.log("Form",data)
        try{
            const responseUser = await firebase.auth().createUserWithEmailAndPassword(data.email,data.password)
            console.log("responseUser", responseUser)
            if(responseUser.user.uid){
                //Creo usuario en base de datos firebase
                const document = await firebase.firestore().collection("usuarios")
                .add({
                    name:data.nombre,
                    lastname:data.apellido,
                    id:responseUser.user.uid,
                })
                console.log("document", document)
            }
        }catch(e){
            console.log(e)
        }
    }
    return(
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Nombre" placeholder="Ingrese Nombre" register={{...register("nombre", { required: true })}} />
                {errors.nombre && <span>El campo nombre es obligatorio</span>}
                <Input label="Apellido" placeholder="Ingrese Apellido" register={{...register("apellido", { required: true })}} />
                {errors.apellido && <span>El campo nombre es obligatorio</span>}
                <Input label="Email" placeholder="Ingrese Email" type="email" register={{...register("email", { required: true })}} />
                {errors.email && <span>El campo nombre es obligatorio</span>}
                <Input label="Contraseña" placeholder="Ingrese Contraseña" type="password" register={{...register("password", { required: true })}} />
                {errors.password && <span>El campo nombre es obligatorio</span>}
                <Button type="submit" variant="warning">Registrarme</Button>
            </Form>
            
        </div>
    )    
    
}

export default Registro