import React from 'react';
import logoImage from '../../assets/logo.svg'
import {FiLogIn,FiMail,FiLock} from'react-icons/fi'
import {Container,Content,Background} from './styles'


import Input from '../../components/input';
import Button from '../../components/button';

const Signin: React.FC = ()=> (
    <Container>
    
    <Content>
    
    <img src={logoImage} alt="Gobarber"/>
    
    <form>
    
    <h1>Faça o seu Login</h1>
    <Input name="email" icon={FiMail} placeholder="E-mail"/>
    <Input name="password" icon={FiLock} type="password" placeholder="Senha"/> 

    <Button type="submit">Entrar</Button>

    <a href="forgot">Esqueci minha senha</a>
    
    </form>
        <a href="login">
        <FiLogIn/>
        Criar Conta
        </a>
        </Content>
        
        <Background/>
    </Container>
    );
    
    
    export default Signin;