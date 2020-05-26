import React from 'react';
import GlobalStyle from './styles/global'
import Signin from './pages/SignIn/index';
// import Signup from './pages/SignUp/index'
import ToastContainer from './components/ToastContainer'
import {AuthProvider} from './hooks/AuthContext';





const App: React.FC=()=>(
  <>
    <AuthProvider>


      <Signin/>
  
  
    </AuthProvider>

    <ToastContainer/>
  <GlobalStyle/>

  </>
);
  
  export default App;
  