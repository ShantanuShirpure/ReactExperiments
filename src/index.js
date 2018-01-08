import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY ='AIzaSyD8w3pRgJXkZzq2HPFFYHg07vd2dx_-i-8';

YTSearch({key :API_KEY, term:'Surfboard'}, 
(data) =>{
    console.log(data);
}
);

class App extends Component {
    constructor(props){
        super(props);
        this.state={videos:[]};

        YTSearch({key :API_KEY, term:'Surfboard'}, 
        (videos) =>{
                this.setState({videos});
        }
        );
    }
   render(){
         return (
        <div>
         <SearchBar />
         <VideoDetail video = {this.state.videos[0]} />
         <VideoList videos = {this.state.videos} />
        </div>
    );
}
}

ReactDOM.render(<App />,document.querySelector('.container'));



