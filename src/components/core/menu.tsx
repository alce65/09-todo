import { Link } from 'react-router-dom';
import { aMenuItems } from '../../interfaces/menu-items';
import './menu.css';

export function Menu({ options }: { options: aMenuItems }) {
    return (
        <nav>
            <ul>
                {options.map((item) => (
                    <li key={item.label}>
                        {/* <a href={item.path}>{item.label}</a> */}
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
