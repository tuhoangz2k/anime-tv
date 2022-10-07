import React from 'react';
import { Link } from 'react-router-dom';

function Button({ to, onClick, className, href, text, children }) {
    let Comp = 'button';
    if (to) {
        Comp = Link;
    } else if (href) {
        Comp = 'a';
    }
    return (
        <Comp to={to} href={href} onClick={onClick} className={`${className}`}>
            {children}
        </Comp>
    );
}

export default Button;
