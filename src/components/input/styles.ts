import styled,{css} from 'styled-components';
import ToolTip from '../Tooltip'

interface ContainerProps{
    isFocused:Boolean;
    isfilled:Boolean;
    isErrored:boolean;
}


export const Container = styled.div<ContainerProps>`

background:#232129;
border-radius:10px;

padding:16px;
width:100%;

color:#666360;
border:2px solid #232129;

display:flex;
align-items:center;

&+div{
    margin-top:8px;
}

${props=> props.isErrored && css`
border-color:#7F1D1A;
    
`}


${props=> props.isFocused && css`
    color:#E86704;
    border-color:#E86704;
`}
${props=> props.isfilled && css`
    color:#ff9000;
    
`}

input{
    flex:1;
    background:transparent;
    border:0;
    color:#f4ede8;


    &::placeholder{
        
        color:#666360;
    }
    
  
}

    svg{
        margin-right:16px;
    }


`;

export const Error = styled(ToolTip)`
    height:20px;
    margin-left:16px;
    svg{
        margin:0;
    }

    span{
        background:#c53030;
        color:#fff;
        &::before{
            border-color:#c53030 transparent;
        }
    }


`;