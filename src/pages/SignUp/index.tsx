import React,{useCallback,useRef}from 'react';
import logoImage from '../../assets/logo.svg'
import {FiMail,FiLock, FiUser, FiArrowLeft} from'react-icons/fi'
import {Container,Content,Background} from './styles'
import {FormHandles} from "@unform/core"
import {Form} from  '@unform/web';
import * as Yup from 'yup';

import Input from '../../components/input';
import Button from '../../components/button';

const SignUp: React.FC = ()=> {

    const formRef = useRef<FormHandles>(null);

    
const handleSubmit = useCallback( async(data:object)=>{

 
        //Validações//
        try{
            const schema = Yup.object().shape({
                name:Yup.string().required("Nome Obrigatorio Por Favor"),
                email:Yup.string().required("E-Mail Obrigatio ou não é valido").email(),
                password: Yup.string().min(6,"Senha no minimo 6 Digitos"),
            })

            await schema.validate(data,
                {abortEarly:false,
                
                })

            
        }catch(err){
            
            formRef.current?.setErrors({
                name:'Nome Obrigatorio!',
            });
        }

    },[]);



    return (
        <Container>
        <Background/>
        <Content>
        
        <img src={logoImage} alt="Gobarber"/>
        
        <Form ref ={ formRef } onSubmit={ handleSubmit}>
        
        <h1>Faça o seu Login</h1>
        <Input name="nome" icon={FiUser} placeholder="Nome"/>
        <Input name="email" icon={FiMail} placeholder="E-mail"/>
        <Input name="password" icon={FiLock} type="password" placeholder="Senha"/> 
        
        <Button type="submit">Cadastrar</Button>
        
        
        
        </Form>
        <a href="login">
        <FiArrowLeft/>
        Voltar para Login
        </a>
        </Content>
        
        
        </Container>
        );
        
        
        
        
        
        
    }
        
        
        export default SignUp;