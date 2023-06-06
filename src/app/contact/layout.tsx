import { type } from "os";
import React from "react";
import Agencies from "~/components/Agencies";
import Expertise from "~/components/Expertise";
import CopyRightFooter from "~/components/Footer/CopyRightFooter";
import Footer from "~/components/Footer/Footer";
import GetStarted from "~/components/GetStarted";
import Header from "~/components/Header/Header";
import Testimonials from "~/components/Testimonials";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="content">
      {children}
    </div>
  );
};

export default HomeLayout;
