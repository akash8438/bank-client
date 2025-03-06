import { Button } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import deps from './register.jpg'
import axios from 'axios';


export default function Register(){

    const [products, setProducts] = useState([]);    
    const [userId , setUserid] = useState('');
    const [name , setName] = useState('');
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [flag , setFlag] = useState(0)

const handleSubmit=(e)=>{
    e.preventDefault();

    
    for(let i = 0 ;i< products.length ; i++){
        
        if(products[i].userid === Number(userId) || products[i].email === email || products[i].password === password){
            setFlag(1)
            alert(` Your Account already created...`);
            return
        }else{
            setFlag(0);            
        }
    }
    if(flag === 0){
        let item = {userid:userId,name:name,email:email,password:password,amount:1000};
        axios.post('https://bank-server-rc04.onrender.com/create' , item);
        alert(`Your Account create in Successfully....`);
    }
}
useEffect(() => {
    
    async function axiosProd(){
        const response = await axios('https://bank-server-rc04.onrender.com/data');
        setProducts(response.data)
    };
    axiosProd();
}, []);


    return(<>
        <title>Bad Bank | Register</title>

    <div className='depImg' style={{marginTop:'-7%'}}>
        <img src={deps} alt=""/>
    </div>
    
    <h1 style={{marginTop:'-8%' ,marginLeft:'5%'}}>Register</h1>
    <form  onSubmit={ handleSubmit} style={{marginTop:'-30%',marginLeft:'55%'}} className='card-outer'>
        <label htmlFor="">User Id :</label> <br />
        <input type="text" onChange={(e)=>setUserid(e.target.value)}/> <br /><br />
        <label htmlFor="">Enter Name :</label> <br />
        <input type="text" onChange={(e)=>setName(e.target.value)}/> <br /><br />
        <label htmlFor="">Enter Email :</label><br />
        <input type="email" onChange={(e)=>setEmail(e.target.value)} /> <br /><br />
        <label htmlFor="">Enter Password :</label><br />
        <input type="password" onChange={(e)=>setPassword(e.target.value)}/> <br /><br />
        
        <Button type='submit' >Submit</Button>
    </form>

    </>)
}
