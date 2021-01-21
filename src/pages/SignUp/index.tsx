import React, { useCallback, useRef } from "react";
import { FiArrowLeft, FiMail, FiLock, FiUser } from "react-icons/fi";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import Logo from "../../assets/logo.svg";
import Input from "../../components/Input/index";
import { Link,useHistory} from 'react-router-dom'
import Button from "../../components/Button/index";
import getValidationErrors from "../../utils/getValidationErros";
import { Container, Content, Background } from "./styles";
import  {useToast} from '../../hooks/toast'
import api from '../../services/api'



interface SignUpFormData{
  name:string;
  email:string;
  password:string;
}


const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const {addToast} = useToast()
  const history = useHistory()
  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({

        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string().required("E-mail obrigatório").email(),
        password: Yup.string().min(6, "No minimio 6 digitos"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/users',data);

      history.push('/');

      addToast({
        type:'success',
        title:'Cadastro realizado com sucesso',
        description:'Você já pode fazer seu Logon no GoBarber',
      })

    } catch (err) {

      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }

      addToast({
        type:'error',
        title:'Erro no cadastro',
        description:'Ocorreu um erro ao fazer cadastro, tente novamente'
      });
    }
  }, [addToast,history]);

  return (
    <Container>
      <Background />
      <Content>
        <img src={Logo} alt="gobarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Bem-Vindo(a), faça o seu cadastro!</h1>
          <Input name="name" icon={FiUser} placeholder="Name" />
          <Input name="email" icon={FiMail} placeholder="Email" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="password"
          />
          <Button name="button" type="submit">
            Cadastrar
          </Button>
        </Form>

        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
