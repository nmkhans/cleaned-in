import React from 'react';
import { useResolvedPath, useMatch, Link } from 'react-router-dom';

const LinkTo = ({ children, to, ...props }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            className={match && "active__link"}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default LinkTo;