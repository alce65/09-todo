import { Menu } from './menu';
import './header.css';
import { aMenuItems } from '../../interfaces/menu-items';

export function Header({ options }: { options: aMenuItems }) {
    const title = 'TODO List';
    return (
        <header className="header">
            <h1>{title}</h1>
            <Menu options={options}></Menu>
        </header>
    );
}
