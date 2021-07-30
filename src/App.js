import './App.css';
import { Avatar} from './Components/Avatar/Index'
import { Feed} from '../src/Components/Feed/Index'
import { RightSideBar} from './Components/RightSideBar/Index'


function App() {
  return (
    <div className="App">
      <Avatar/>
      <Feed/>
      <RightSideBar/>
    </div>
  );
}

export default App;
