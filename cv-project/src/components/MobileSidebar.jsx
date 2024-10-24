import './MobileSidebar.css';
import React from "react";
import SidebarItem from './SidebarItem';

const MobileSideBar = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  return (
    <div className={sidebarClass}>
            <SidebarItem active={false} text={"ME"} icon={"profile"}/>
            <SidebarItem active={true} text={"CAREER"} icon={"work"}/>
            <SidebarItem active={false} text={"EDUCATION"} icon={"studies"}/>
            <SidebarItem active={false} text={"TECH"} icon={"programming"}/>
            {/*<SidebarItem active={false} text={"Projects"} icon={"project"}/>*/}
            <SidebarItem active={false} text={"LANGUAGES"} icon={"language"}/>
            <SidebarItem active={false} text={"HOBBIES"} icon={"hobbies"}/>
    </div>
  );
};
export default MobileSideBar;