import { ReactElement } from 'react';
import { aMenuItems } from '../../interfaces/menu-items';
import { Footer } from './footer';
import { Header } from './header';

export function Layer({
    options,
    children,
}: {
    options: aMenuItems;
    children: ReactElement;
}) {
    return (
        <>
            <Header options={options}></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
}
