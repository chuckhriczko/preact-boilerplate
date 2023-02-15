import { Link } from "wouter";
import LayoutMain from "../layouts/LayoutMain";
import { useContext, useEffect } from 'react';
import ThemeContext from "../lib/contexts/ThemeContext/themeContext";

const PageHome = () => {
  return <LayoutMain>
    <div className="page home">
      <h2>Home</h2>
      <Link href="/notHome">Leave Home</Link>
    </div>
  </LayoutMain>
}
export default PageHome;