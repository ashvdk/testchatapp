import './App.css';
import Chat from './components/Chat';
import TopNavBar from './components/TopNavBar';
import TopNavInfoBar from './components/TopNavInfoBar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  return (
    <div className="app">
      <TopNavInfoBar />
      <TopNavBar />
      <div className="searchlocation">
        <div style={{display: "flex", justifyContent: "center", paddingTop: "15px"}}>
          <div className="chooseone">Rent</div>
          <div className="chooseone">Sale</div>
          <div className="chooseone">Lease</div>
        </div>
        <div style={{justifyContent: "center", display: "flex", marginTop: "10px"}}>
          <div style={{background: "white", display: "flex", padding: "8px 5px", width: "60%"}}>
            <div >Languages <ArrowDropDownIcon style={{position: "relative", top: "5px"}}/></div>
            <div style={{flex: 1}}><input type="text" style={{width: "100%", border: "none", outline: "none", height: "100%", margin: "0 8px"}} placeholder="Type your message"/></div>
            <div style={{background: "#7b7cf0"}}><SearchIcon style={{color: "white"}}/></div>
          </div>
        </div>
      </div>
      <Chat />
    </div>
  );
}

export default App;
