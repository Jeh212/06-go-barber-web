import React ,{useRef,useCallback} from 'react';
import logoImage from '../../assets/logo.svg'
import {FiLogIn,FiMail,FiLock} from'react-icons/fi'
import {Container,Content,Background} from './styles'
import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import * as Yup from  'yup';
import getValidationErros from '../../utils/getValidationErros'

import Input from '../../components/input';
import Button from '../../components/button';

const Signin: React.FC = ()=> {

const formRef = useRef<FormHandles>(null); //PEgar metodos do HTML
    
    
const handleSubmit = useCallback( async(data:object)=>{

 
        //Validações//
        try{

            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
               
                email:Yup.string()
                .required("E-Mail Obrigatio ")
                .email('Digite o E-mail'),
                password: Yup.string()
                .required('Senha Obrigatória'),
            })

            await schema.validate(data,
                {
                    abortEarly:false,
                
                })

            
        }catch(err){
            

            const errors = getValidationErros(err)

            formRef.current?.setErrors(errors);

        }

    },[]);





    return(

    <Container>
    
    <Content>
    
    <img src={logoImage} alt="Gobarber"/>
    
    <Form ref={formRef} onSubmit={handleSubmit}>
    
    <h1>Faça o seu Login</h1>
    <Input name="email" icon={FiMail} placeholder="E-mail"/>
    <Input name="password" icon={FiLock} type="password" placeholder="Senha"/> 

    <Button type="submit">Entrar</Button>

    <a href="forgot">Esqueci minha senha</a>
    
    </Form>
        <a href="login">
        <FiLogIn/>
        Criar Conta
        </a>
        </Content>
        
        <Background/>
    </Container>
    );
}
    
    export default Signin;