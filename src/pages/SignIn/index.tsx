import React from 'react';
import logoImage from '../../assets/logo.svg'
import {FiLogIn} from'react-icons/fi'
import {Container,Content,Background} from './styles'

const Signin: React.FC = ()=> (
    <Container>
    
    <Content>
    
    <img src={logoImage} alt="Gobarber"/>
    
    <form>
    
    <h1>Faça o seu Login</h1>
    <input placeholder="E-mail"/>
    <input type="password" placeholder="Senha"/> 
    <button type="submit">Entrar</button>
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