import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';


const API_KEY ='AIzaSyD8w3pRgJXkZzq2HPFFYHg07vd2dx_-i-8';
const App = () => {
    return (
        <div>
         <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />,document.querySelector('.container'));



