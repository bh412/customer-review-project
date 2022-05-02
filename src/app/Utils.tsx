import React from "react";

export const Row = ({children}: any) => {
    return <div className="row">
        {children}
    </div>
};

export const Col = ({children}: any) => {
    return <div className="column">
        {children}
    </div>
};
