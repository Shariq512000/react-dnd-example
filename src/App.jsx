import MainScreen from "./component/main-screen";
import SideBar from "./component/side-bar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){

  return(
    <div className="App">
      <div className="row">
        <div className="col-md-2">
          <SideBar />
        </div>

        <div className="col-md-10">
          <MainScreen />
        </div>
      </div>
    </div>
  )
}

export default App;