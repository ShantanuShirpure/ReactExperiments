import _ from 'lodash';
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
        this.state={
            videos:[],
            selectedVideo : null
        };
        this.videoSearch('surfboards');
    }

   videoSearch(term){      
        YTSearch({key :API_KEY, term:term},(videos) =>{
                this.setState({videos, selectedVideo: videos[0]});
        });
    
    }
   render(){
       const videoSearch = _.debounce((term) =>{this.videoSearch(term)}, 300);
         return (
        <div>
         <SearchBar onSearchTermChange={videoSearch} />
         <VideoDetail video = {this.state.videos[0]} />
         <VideoList videos = {this.state.videos} />
        </div>
    );
}
}

ReactDOM.render(<App />,document.querySelector('.container'));



