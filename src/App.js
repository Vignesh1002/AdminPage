import './App.css'
import SideBar from './components/SideBar/SideBar';
import UploadPublications from './components/UploadPublications/UploadPublications';
import ViewPublications from './components/ViewPublications/ViewPublications';

function App() {
  return (
    <div className="App">
        <div className="GlassApp"> 
          <SideBar/>
          <ViewPublications/>
        </div>
    </div>
  );
}

export default App;
