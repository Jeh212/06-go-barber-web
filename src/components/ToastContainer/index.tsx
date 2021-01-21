import React from 'react';

import { Container } from './styles';
import { FiAlertCircle } from 'react-icons/fi';
import { ToastMessage } from '../../hooks/toast';
import {useTransition} from  'react-spring'
import Toast from './Toast';

interface ToastContaineirProps {
	messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContaineirProps> = ({ messages }) => {

  const messagesWithTransistion = useTransition(messages,(message)=>message.id,
    {
      from:{right:'-120%'},
      enter:{right:'0%',opacity:1,transition:'0.2s'},
      leave:{right:'-120%',opacity:0,transition:'1.2s'},

    })


	return (
		<Container  >
			{messagesWithTransistion.map(({item,key,props}) => (
				<Toast key={key} style={props} message={item}>
					<FiAlertCircle size={20} />
				</Toast>
			))}
		</Container>
	);
};

export default ToastContainer;
