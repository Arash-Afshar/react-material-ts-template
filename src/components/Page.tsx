import React from 'react';
import { Helmet } from 'react-helmet';

interface IProps {
    children: React.ReactNode;
    title: string;
    className: string;
}

const Page: React.FC<IProps> = ({ children, title = '', className }: IProps) => {
    return (
        <div className={className}>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {children}
        </div>
    );
};

export default Page;
