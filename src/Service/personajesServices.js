import axios from '../Config/axios'
export async function getAllPersonajes(character){
    return axios.get("/" +character)
    /* return axios.get("/character/?page="+page) */
}
/* export async function get(next){
    return axios.get(next)
} */

export async function getByIdPersonajes(id){
    return axios.get("/character/"+id) 
}

export async function getFiltrar(name){
    return axios.get("/character/?name="+name)
}