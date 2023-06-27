import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import ProjectListPage from './pages/ProjectListPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import EditProjectPage from './pages/EditProjectPage';
import EditTaskPage from './pages/EditTaskPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import IsPrivate from './components/isPrivate';
import IsAnon from './components/IsAnon';

function App() {

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/projects' element={ <IsPrivate> <ProjectListPage/> </IsPrivate>}  />
        <Route path="/projects/:projectId" element={ <IsPrivate> <ProjectDetailsPage /> </IsPrivate> } />
        <Route path="/projects/edit/:projectId"  element={ <IsPrivate> <EditProjectPage /> </IsPrivate> } />
        <Route path="/tasks/edit/:taskId" element={ <EditTaskPage /> } />
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
      </Routes>
    </div>
  );
}

export default App;
