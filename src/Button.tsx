import React, { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    text?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled }) => {
    return (
        <button
            className="bg-transparent text-xs hover:bg-C1 text-C1 font-JBM hover:text-white my-3 py-3 px-4 border border-C1 hover:border-transparent rounded"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;