import { Link } from 'react-router-dom';

import style from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <ul>
                <li>
                    <Link to='/'>Dashboard</Link>
                </li>
                <li>
                    <Link to='/buildings'>Edificios</Link>
                </li>
                <li>
                    <Link to='/users'>Usuarios</Link>
                </li>
                <li>
                    <Link to='/boilers'>Calderas</Link>
                </li>
            </ul>
        </div>
    );
  };
  
  export default Sidebar;