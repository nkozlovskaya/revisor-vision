import { FC, memo } from "react";
import './Navbar.css';

interface NavbarProps{
    className?: string;
};

export const Navbar: FC = memo((props: NavbarProps) => {
    return (
        <div className='navbar'>
            <button className='btn'>Каталог</button>
            <button className='btn'>Избранное</button>
        </div>
    );
})