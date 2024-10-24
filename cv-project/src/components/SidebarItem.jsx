import '../Poppins.css'
import './SidebarItem.css'
import StudiesIcon from './Icons/StudiesIcon'
import WorkIcon from './Icons/WorkIcon'
import BikeIcon from './Icons/BikeIcon'
import LanguageIcon from './Icons/LanguageIcon'
import ProgrammingIcon from './Icons/ProgrammingIcon'
import ProjectIcon from './Icons/ProjectIcon'
import PersonIcon from './Icons/PersonIcon'
function SidebarItem(props) {
  return (
    <div className="nav-item sidebar-item ripple" >
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
          <div className='p-2'>
            {props.icon == "studies" ? <StudiesIcon  /> : "" }
            {props.icon == "work" ? <WorkIcon /> : "" }
            {props.icon == "hobbies" ? <BikeIcon /> : "" }
            {props.icon == "language" ? <LanguageIcon /> : "" }
            {props.icon == "programming" ? <ProgrammingIcon /> : "" }
            {props.icon == "project" ? <ProjectIcon /> : "" }
            {props.icon == "profile" ? <PersonIcon /> : "" }
          </div>
          <div className='p-2 poppins-extrabold'>
            <h5>{props.text}</h5>
          </div>
          </div>
      </div>
  )
}

export default SidebarItem
