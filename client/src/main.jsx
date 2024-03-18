import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom"
import {ChainId ,ThirdwebProvider} from "@thirdweb-dev/react";
import App from "./App";
import "./index.css"

import { StateContextProvider } from "./contex";
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    // <ThirdwebProvider desiredChainId={ChainId.Sepolia}>
    //     <Router>
    //         <StateContextProvider>
    //         <App />
    //         </StateContextProvider>
            
    //     </Router>
    // </ThirdwebProvider>
    <ThirdwebProvider activeChain="sepolia" clientId="11d93327ff940ab1644c9e268a22a94c">
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
)


// 11d93327ff940ab1644c9e268a22a94c

// sec key = J1ta8-ByQk3miweHkmxYR_620fF3XrGN-AjfF6tieqV9bNpZBLAjkneV-2y3QxKXbPq91zN9VAiXdzXitJej-w

