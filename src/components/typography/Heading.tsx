import React from "react";

const Heading: React.FC<React.PropsWithChildren> = ({children}) => {
    return (<h1 className="text-3xl font-bold underline text-primary">{children}</h1>);
};

export default Heading;