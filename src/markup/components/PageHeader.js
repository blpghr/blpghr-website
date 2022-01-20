import React from 'react';
import '../../assets/css/page-header.css';

const PageHeader = ({ children, image }) => {
    return (
        <div className="page-header">
            <div className="page-header-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="page-header-content">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
