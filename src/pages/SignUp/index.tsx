import React,{useCallback,useRef}from 'react';
import logoImage from '../../assets/logo.svg'
import {FiMail,FiLock, FiUser, FiArrowLeft} from'react-icons/fi'
import {Container,Content,Background} from './styles'
import {FormHandles} from "@unform/core"
import {Form} from  '@unform/web';
import getValidationErros from '../../utils/getValidationErros'

import * as Yup from 'yup';

import Input from '../../components/input';
import Button from '../../components/button';






const SignUp: React.FC = ()=> {

const formRef = useRef<FormHandles>(null); //PEgar metodos do HTML
    
    
const handleSubmit = useCallback( async(data:object)=>{

 
        //Validações//
        try{

            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name:Yup.string()
                .required("Nome Obrigatorio"),
                email:Yup.string()
                .required("E-Mail Obrigatio ")
                .email('Digite o E-mail'),
                password: Yup.string()
                .min(6,"Senha no minimo 6 Digitos"),
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