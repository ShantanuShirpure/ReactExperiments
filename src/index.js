import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
const API_KEY ='AIzaSyD8w3pRgJXkZzq2HPFFYHg07vd2dx_-i-8';

YTSearch({key :API_KEY, term:'Shantanu Shirpure'}, 
(data) =>{
    console.log(data);
}
);

class App extends Component {
    constructor(props){
        super(props);
        this.state={videos:[]};

        YTSearch({key :API_KEY, term:'Shantanu Shirpure'}, 
        (videos) =>{
                this.setState({videos});
        }
        );
    }
   render(){
         return (
        <div>
         <SearchBar />
         <VideoList videos = {this.state.videos} />
        </div>
    );
}
}

ReactDOM.render(<App />,document.querySelector('.container'));



