import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="content">
      {children}
    </div>
  );
};

export default HomeLayout;
