import React, {useState} from 'react';
import './Register.css';
import Input from '../Input/Input';
import Label from '../Label/labelj';
import Title from '../Title/Title';

const Registro = () => {

    const [ user, setUser] = useState('');
    const [ isRegister, setIsRegister ] = useState(false);
    const [ password, setPassword] = useState('');
    const [email] = useState('');
    const [ passwordError, setPasswordError] = useState(false);
    const [ hasError, setHasError ] = useState(false);
    const [country] = useState('');
    const [direction] = useState('');
    const [telephone] = useState('');
    const [mobile] = useState('');
    
    function handleChange(name, value) {
        if(name === 'usuario'){
        setUser(value);
         setHasError(false);
    } else {
        if(value.length < 6){
            setPasswordError(true);
            setHasError(false);
        } else {
            setPasswordError(false);
            setPassword(value)
            setHasError(false);
        }
      }
    }
    
      function ifMatch(param){
        if(param.user.length > 0 && param.password.length > 0){
            if(param.user && param.password ){
                const { user,password } = param;
                let ac = { user,password };
                let account = JSON.stringify(ac);
                localStorage.getItem('account', account);
                setIsRegister(true);
            } else {
                setIsRegister(false);
                setHasError(true);
            }
        } else {
            setIsRegister(false);
            setHasError(true);
        }
    }
      function handleSubmitReg(){
        let account = { user, password, email, country, telephone, mobile, direction}
        if(account){
            ifMatch(account);
        }
    };
    return ( 
        <div className="register-container">
            { isRegister ?
            <div className='home-container'>
            <h1> ¡Hola, {user} !</h1>
            <label> Felicitaciones, te has registrado con exito</label>
            </div>
            :
            <div className='register-content'>
                <Title text="Registro"/>
                {hasError &&
                <label className ='label-alert'> su registro es invalida, 
                compruebe sus datos y si tiene cuenta 
                </label>
                }
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
                <Label text="Correo Electronico"/>
                <Input
                attribute={{
                    id: 'email',
                    name: 'email',
                    type: 'email',
                    placeholder: 'Ingrese su correo electronico'
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
               <Label text="Ciudad"/>
                <Input
                attribute={{
                    id: 'country',
                    name: 'country',
                    type: 'text',
                    placeholder: 'Ingrese su ciudad'
                }}
                />
               <Label text="Direccion"/>
                <Input
                attribute={{
                    id: 'direction',
                    name: 'direction',
                    type: 'text',
                    placeholder: 'Ingrese su direccion'
                }}
                />
                <Label text="Telefono"/>
                <Input
                attribute={{
                    id: 'telefono',
                    name: 'telefono',
                    type: 'number',
                    placeholder: 'Ingrese su telefono'
                }}
                />
                <Label text="Celular"/>
                <Input
                attribute={{
                    id: 'celular',
                    name: 'celular',
                    type: 'number',
                    placeholder: 'Ingrese su celular'
                }}
                />
                <div className='submit-button-container'>
                <button onClick={handleSubmitReg} className='submit-button'>
                    Registrarme 
                </button>
                </div>
            </div>
            }          
        </div>
    )

};

export default Registro; 