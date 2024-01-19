import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import TaskList from './pages/TaskList';
import CreateTask from './pages/CreateTask';
import Profile from './pages/Profile';
import PageNotFound from './pages/PageNotFound';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './protected route/ProtectedRoute';
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    // routing is same in every project
   <BrowserRouter>
   <AuthProvider>
    <TaskProvider>
   <Navigation />
  <Routes>
  <Route path='/' element={<Navigate to="/login"/>}></Route>
  <Route path='/' element={<Home />}>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/register' element={<Register/>}></Route>
  </Route>
    <Route path='/about' element={<About />}> </Route>
    <Route path='/task-list' element={<ProtectedRoute><TaskList /></ProtectedRoute>}></Route>
    <Route path='/create-task' element={<ProtectedRoute><CreateTask /></ProtectedRoute>}> </Route>
    <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>}></Route>
    <Route path='*' element={<PageNotFound />}></Route>
  </Routes>
  </TaskProvider>
  </AuthProvider>
   </BrowserRouter>
  );
}
export default App;