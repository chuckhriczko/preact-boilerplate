import { Link } from "wouter";
import LayoutMain from "../layouts/LayoutMain";

const PageNotHome = () => (
    <LayoutMain>
      <div className="page home">
        <h2>Not Home</h2>
        <Link href="/">Go Home</Link>
      </div>
    </LayoutMain>
  )
export default PageNotHome;