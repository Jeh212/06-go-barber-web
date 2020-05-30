import React, { useCallback, useRef } from 'react';
import logoImage from '../../assets/logo.svg'
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Container, Content, Background,AnimationContainer } from './styles'
import { FormHandles } from "@unform/core"
import { Form } from '@unform/web';
import getValidationErros from '../../utils/getValidationErros'
import { Link,useHistory } from 'react-router-dom'
import api from '../../services/apiCliente';
import * as Yup from 'yup';
import {useToast} from '../../hooks/ToastContex'

import Input from '../../components/input';
import Button from '../../components/button';



interface SignUpFormData{
    name:string;
    email:string;
    password:string;
}


const SignUp: React.FC = () => {

    const formRef = useRef<FormHandles>(null); //PEgar metodos do HTML
    const {addToast} = useToast(); 
    const history = useHistory();


    const handleSubmit = useCallback(async (data: SignUpFormData) => {
        console.log(data);

        //Validações//
        try {

            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string()
                    .required("Nome Obrigatorio"),
                email: Yup.string()
                    .required("E-Mail Obrigatio ")
                    .email('Digite o E-mail'),
                password: Yup.string()
                    .min(6, "Senha no minimo 6 Digitos"),
            })

            await schema.validate(data,
                {
                    abortEarly: false,

                })


            await api.post('/users',data);
           history.push('/')
            addToast({
                type:'Success',
                title:'Cadastro Realizado',
                description:`Você esta cadastrado com usuario de Nome:${data.name} e  E-mail: ${data.email} no GoBarber!`,
            })

        } catch (err) {
            console.log(err)
            if(err instanceof Yup.ValidationError){
                const errors = getValidationErros(err)

                formRef.current?.setErrors(errors);
                
                return
            }
           
            addToast({
                type: 'Error',
                title:'Erro na Autenticação',
                description:'Ocorreu um erro ao fazer Cadastro!'

            });

        }

    }, [addToast,history]);



    return (
        <Container>
            <Background />
            <AnimationContainer>
            <Content>

                <img src={logoImage} alt="Gobarber" />

                <Form ref={formRef} onSubmit={handleSubmit}>

                    <h1>Faça o seu Login</h1>
                    <Input name="name" icon={FiUser} placeholder="Nome" />
                    <Input name="email" icon={FiMail} placeholder="E-mail" />
                    <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

                    <Button type="submit">Cadastrar</Button>



                </Form>
                <Link to="/">
                    <FiArrowLeft />
        Voltar para Login

        </Link>
            </Content>
            </AnimationContainer>
        </Container>
    );






}


export default SignUp;