import { BrowserRouter,Route,  Routes } from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register';
import Dashboard from './components/Dashboard'
import StudentForm from './components/StudentForm';
function App() {
  return (
   <>
  <BrowserRouter>
        
    <Routes>
      <Route index element={<Login />} />
      <Route path='/register' element={<Register />}/>
      <Route path='/dashboard' element={<Dashboard />} />   
      <Route path='studentform' element={<StudentForm />} />         
            
    </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
