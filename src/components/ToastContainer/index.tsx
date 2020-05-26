import React from 'react';
import {FiAlertCircle, FiXCircle} from  'react-icons/fi'
import {Container,Toast} from './styles'

const ToastContainer:React.FC = ()=>{
    
    
    return (
        
        
        <Container>
        
        <Toast >
        
        <FiAlertCircle/>
        
        <div>
        
        <strong>Aconteceu um erro</strong>
        <p>Não foi possível fazer login na aplicação!</p>
        </div>
        <button type="button">
        <FiXCircle size={18}/>
        
        </button>
        </Toast>
        
        
        <Toast type ="Success">
        
        <FiAlertCircle/>
        
        <div>
        
        <strong>Aconteceu um erro</strong>
        <p>Não foi possível fazer login na aplicação!</p>
        </div>
        <button type="button">
        <FiXCircle size={18}/>
        
        </button>
        </Toast>
        

        <Toast type ="Error">
        
        <FiAlertCircle/>
        
        <div>
        
        <strong>Aconteceu um erro</strong>
        <p>Não foi possível fazer login na aplicação!</p>
        </div>
        <button type="button">
        <FiXCircle size={18}/>
        
        </button>
        </Toast>
        </Container>
        
        
        );
        
        
    };
    
    export default ToastContainer;