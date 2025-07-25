import Sidebar from "@/components/layout/Sidebar";
import React from "react";

const layout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className="wrapper grid grid-cols-[300px,minmax(0,1fr)] h-screen">
            <Sidebar/>
            <main className="mx-4 mt-4">{children}</main>
        </div>
    );
};

export default layout;