import React, { ButtonHTMLAttributes } from 'react';
import { bool } from 'yup';
import { Container } from './style';

//Criação de uma interface para criar tipo de dados//Tipagem
type ButtonsProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	loading?: boolean;
};

// *React.FC é uma forma de criar uma função em react
// *Children pega o dado de escrita do elemento e joga para dentro do paramento do componente
const Button: React.FC<ButtonsProps> = ({ children, loading, ...rest }) => (
	<Container type="button" {...rest}>
		{loading ? 'Carregando...' : children}
	</Container>
);

export default Button;
