//Dependincias//
import React ,{useRef,useCallback} from 'react';
import logoImage from '../../assets/logo.svg'
import {FiLogIn,FiMail,FiLock} from'react-icons/fi'
import {Container,Content,Background,AnimationContainer} from './styles'
import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import {Link} from 'react-router-dom'
import * as Yup from  'yup';
import getValidationErros from '../../utils/getValidationErros'

import SignInFormData from './interfaces'

//Components
import Input from '../../components/input';
import Button from '../../components/button';
import {useAuth} from '../../hooks/AuthContext'
import {useToast} from '../../hooks/ToastContex'


const Signin: React.FC = ()=> {

const formRef = useRef<FormHandles>(null); //PEgar metodos do HTML

const {signIn} = useAuth();
const {addToast}= useToast();


const handleSubmit = useCallback( async(data:SignInFormData)=>{


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

                });


            await signIn({
                email:data.email,
                password:data.password,
            })
        }catch(err){

            if(err instanceof Yup.ValidationError){
                const errors = getValidationErros(err)

                formRef.current?.setErrors(errors);

                return
            }

            addToast({
                type: 'Error',
                title:'Erro na Autenticação',
                description:'Ocorreu um erro ao fazer login, chegue as credenciais'

            });

        }

    },[signIn, addToast]);

    return(

    <Container>

    <Content>
    <AnimationContainer>

    <img src={logoImage} alt="Gobarber"/>

    <Form ref={formRef} onSubmit={handleSubmit}>

    <h1>Faça o seu Login</h1>
    <Input name="email" icon={FiMail} placeholder="E-mail"/>
    <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

    <Button type="submit">Entrar</Button>

    <Link to="/forgot-password">Esqueci minha senha</Link>

    </Form>
        <Link to="/signup">
        <FiLogIn/>
        Criar Conta
    </Link>
    </AnimationContainer>
        </Content>

        <Background/>
    </Container>
    );
}

    export default Signin;
