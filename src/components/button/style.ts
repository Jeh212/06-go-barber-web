import styled from 'styled-components';

import {shade} from 'polished'

export const Container = styled.button`

    background:#ff9000;

    height:56px;

    border-radius:10px;

    border:0;

    padding: 16px;

    color:#312e38;

    margin-top: 16px;
    

    font-weight:500;

    width: 110%;
    
    
    transition: background-color 0.2s;
    
    &:hover{
        background: ${shade(0.2,'orange')};
    }
    







`;