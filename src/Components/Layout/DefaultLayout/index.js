import Header from "~/Components/Layout/Components/Header";
import Sidebar from "./Sidebar";

function DefaulLayout({children}) {
    return ( 
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content" >
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaulLayout;