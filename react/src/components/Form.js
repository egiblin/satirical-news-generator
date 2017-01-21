import React from 'react';

const Form = props => {
  if (props.clicked){
    return(
      <div className="row search">
          <input id="add_article" type='submit' value="Actually, Nevermind" className="btn" onClick={event => {event.preventDefault(), props.handleAddClicked();}} />
          <form>
            <div className="input-field col s3">
              <input type="text" name="title" placeholder="Enter title here..." onChange={props.handleTitleChange}/>
            </div>
            <div className="input-field col s3">
              <input type="text" name="image_url" placeholder="Enter image URL here..." onChange={props.handleImageChange}/>
            </div>
            <div className="input-field col s3">
              <input type="text" name="body" placeholder="Enter article body here..." onChange={props.handleBodyChange}/>
            </div>
            <div className="row">
              <div className="col s2 offset-s5 center-align">
                <input id="make_news" className="btn" type="submit" value="Make News" name="Submit" onClick={props.handleSubmit}/>
              </div>
            </div>
          </form>
      </div>
    );
  } else {
    return(
    <div className="row search">
      <input id="add-article" type='submit' value="Add New Article" className="btn" onClick={event => {event.preventDefault(), props.handleAddClicked();}} />
    </div>
  );}
};

export default Form;
