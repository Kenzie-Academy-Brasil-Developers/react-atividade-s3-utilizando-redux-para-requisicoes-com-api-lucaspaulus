import React from 'react';
import { GlobalStyle} from './global/style';
import './App.css';

import Search from "./components/Search"
import DigimonList from "./components/DigimonList"
function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <header className="App-header">

                <Search/>
                <DigimonList/>
            </header>
        </div>
    );
}

export default App;
