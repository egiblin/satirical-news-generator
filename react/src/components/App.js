import React, { Component } from 'react';
import Article from './Article';
import Form from './Form';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      title: "",
      image_url: "",
      body: "",
      addClicked: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleAddClicked = this.handleAddClicked.bind(this);
  }

  handleAddClicked(event) {
    if (this.state.addClicked === false){
      this.setState({addClicked: true});
    } else {
      this.setState({addClicked: false});
    }
  }

  handleTitleChange(event) {
    let newTitle = event.target.value;
    this.setState({ title: newTitle });
  }

  handleImageChange(event) {
    let newImage = event.target.value;
    this.setState({ image_url: newImage });
  }

  handleBodyChange(event){
    let newBody = event.target.value;
    this.setState({ body: newBody });
  }

  handleSubmit(event) {
    event.preventDefault();
    let fetchBody = { title: this.state.title, image_url: this.state.image_url, body: this.state.body };
    let newArticles = [];
    fetch('/api/v1/articles',
      { method: "POST",
      body: JSON.stringify(fetchBody) })
      .then(function(response) {
        newArticles = response.json();
        return newArticles;
      }).then((response) => this.setState({
        articles: response,
        title: "",
        image_url: "",
        body: "",
        addClicked: false
      }));
  }

  componentDidMount(){
    $.ajax({
        method: "GET",
        url: "/articles.json",
      })
      .done(data => {
        this.setState({
          articles: data
        });
      });
  }

  render() {
    let clicked = this.state.addClicked;
    let articles = this.state.articles.map(article => {
      return(
        <Article
          key={article.id}
          id={article.id}
          title={article.title}
          image_url={article.image_url}
          body={article.body}
         />
      );
    });
    return(
      <div>
        <img id='header' src='http://i.imgur.com/hW9KaCG.png'></img>
        <Form
          handleSubmit={this.handleSubmit}
          handleTitleChange={this.handleTitleChange}
          handleImageChange={this.handleImageChange}
          handleBodyChange={this.handleBodyChange}
          handleAddClicked={this.handleAddClicked}
          clicked={clicked}
        />
        {articles.reverse()}
      </div>
    );
  }

}


export default App;
