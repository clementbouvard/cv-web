import SidebarItem from './SidebarItem'
import logo from '../assets/logo_white_compact.png'; // with import
import logo_wide from '../assets/logo_white.png'; // with import
import useScreenSize from './useScreenSize';
import MenuIcon from './Icons/MenuIcon';
import React,{useState} from 'react';
import MobileSideBar from './MobileSidebar';

function Sidebar() {
  const screenSize = useScreenSize();
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    console.log(sidebarOpen)
    setSideBarOpen(!sidebarOpen);
  };
  if(screenSize.width>900)
  {
    return (
      <div className="d-flex flex-column flex-shrink-0 h-100" style={{width: "280px",backgroundColor: "#0D1824"}}>
          
          <a href="/" className="d-flex justify-content-center align-items-center p-3 text-white text-decoration-none" style={{height:'12.5vh',borderBottomWidth:'1px',borderBottomStyle:'solid',borderBottomColor:'DimGrey'}}>
              <img src={logo} style={{width:"240px"}}/>
          </a>
          <ul className="nav nav-pills flex-column mb-auto w-100">
            <SidebarItem active={false} text={"ME"} icon={"profile"}/>
            <SidebarItem active={true} text={"CAREER"} icon={"work"}/>
            <SidebarItem active={false} text={"EDUCATION"} icon={"studies"}/>
            <SidebarItem active={false} text={"TECH"} icon={"programming"}/>
            {/*<SidebarItem active={false} text={"Projects"} icon={"project"}/>*/}
            <SidebarItem active={false} text={"LANGUAGES"} icon={"language"}/>
            <SidebarItem active={false} text={"HOBBIES"} icon={"hobbies"}/>
      
          </ul>    
        </div>
        )
  }
  else {
    return (
    <div>
      <header className="d-flex flex-row flex-wrap justify-content-between mx-100 align-items-center border-bottom" style={{height:'100px',backgroundColor:"#0D1824"}}>
            <div style={{marginLeft:10}}><MenuIcon onClick={handleViewSidebar}/></div>
            
            <a href="/" className="d-flex justify-content-center align-items-center pb-3 text-white text-decoration-none" style={{width:"50%"}}>
                <img src={logo_wide} style={{height:'100%',width:"100%"}}/>
            </a>
            <div style={{marginLeft:10,visibility:"hidden"}}><MenuIcon onClick={handleViewSidebar}/></div>
      </header>
      <MobileSideBar isOpen={sidebarOpen}/>
    </div>
    )

    
  }

}

export default Sidebar
