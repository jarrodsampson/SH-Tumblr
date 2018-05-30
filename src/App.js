import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import ScrollToTop from 'react-scroll-up';
import './App.css';
import $ from 'jquery';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tumblrPhotos: [],
      tag: "gaming",
      loading: true
    };
  }

  componentDidMount() {
    this.apiCall();
  }

  apiCall() {
    let apiKey = "QPdARZFwjbG0M0teN9564Apj1kq81wFKkxIb1kurTagPaUEzPY";

    $.getJSON('//api.tumblr.com/v2/tagged?tag=' + this.state.tag + '&api_key=' + apiKey).then(function(res) {
       this.setState({
           tumblrPhotos: res.response,
           loading: false
       });
    }.bind(this));

  }

  loadFunc() {

  }

  render() {
    let photos = this.state.tumblrPhotos;
    console.log(this.state.tumblrPhotos)
    return (
      <div className="App">
        <div className="container">
            <header className="App-header">
              <h1>SkillShare</h1>
              <h2 className="App-title">Searching: {this.state.tag}</h2>
            </header>
            <div className="row">
                <div className={this.state.isLoading ? 'hidden' : ''}>
                    {photos.map(function(photo, i) {
                        let url = "";

                        if (photo.photos)
                        {
                            url = photo.photos[0].original_size.url;
                        }

                        return <div className="col-md-12" key={i}>
                            <LazyLoad height={200}>
                                <img className="thumbs" src={url || "http://via.placeholder.com/350x150"} alt={photo.blog_name} />
                            </LazyLoad>
                        </div>;
                    })}
                </div>
            </div>
        </div>

        <ScrollToTop showUnder={160}>
          <span>UP</span>
        </ScrollToTop>

      </div>
    );
  }
}

export default App;
