import React, {useState } from "react";
import Label from "./components/Label/labelj"
import Title from "./components/Title/Title"
import Input from "./components/Input/Input";
import './Login.css'

const Login = () => {

    const [ user, setUser] = useState('');
    const [ password, setPassword] = useState('');
    const [ passwordError, setpasswordError] = useState(false);

    function handleChange(name,value) {
        if(name === 'usuario'){
        setUser(value)
    } else {
        if(value.length < 6){
            setpasswordError(true);
        }else {
            setpasswordError(false);
            setPassword(value)
        }
    }
    };

    function handleSubmit(){
        let account = { user, password}
        if(account){
            console.log('account:', account)
        }
    }

    return ( 
        <div className="login-container">
            <div className='login-content'>
                <Title text="Iniciar Sesión"/>
                <Label text="Usuario"/>
                <Input
                attribute={{
                    id: 'usuario',
                    name: 'usuario',
                    type: 'text',
                    placeholder: 'Ingrese su usuario'
                }}
                handleChange={handleChange}
                />
                <Label text="Contraseña"/>
                <Input
                attribute={{
                    id: 'contraseña',
                    name: 'contraseña',
                    type: 'password',
                    placeholder: 'Ingrese su contraseña'
                }}
                handleChange={handleChange}
                param={passwordError}
                />
                {passwordError &&
                <label className='label-error'>
                    Contraseña invalida o incompleta 
                </label>
                }
                <div className='submit-button-container'>
                <button onClick={handleSubmit} className='submit-button'>
                    Ingresar
                </button>
                </div>
            </div>
        </div>
    )
};

export default Login;