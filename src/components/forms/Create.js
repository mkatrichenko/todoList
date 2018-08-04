import React, {Component} from 'react';
import {textareaAutoResize} from '../../assets/materialize/js/materialize';

import '../../scss/create.scss';

class CreateForm extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      text: '',
    };

    this.textareaRef = React.createRef();

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  componentDidMount() {
    textareaAutoResize(this.textareaRef.current);
  }

  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }

  handleChangeText(event) {
    this.setState({text: event.target.value});
  }

  render() {
    return (
        <form action="" className="form-create">
          <div className="card col s12 row">
            <div className="block__centered center-align col l7 m9 s11">
              <div className="input-field col s12">
                <input name="title" type="text"
                       placeholder="title"
                       onChange={this.handleChangeTitle}/>
              </div>

              <div className="input-field col s12">
            <textarea ref={this.textareaRef} name="description" cols="40"
                      rows="4"
                      placeholder="description"
                      className="materialize-textarea"
                      onChange={this.handleChangeText}>
          </textarea>
              </div>
              <div className="button__wrapper">
                <a className={"waves-effect waves-light btn-large" + ((!this.state.title || !this.state.text) ? " disabled" : "")}
                   onClick={(e) => {
                     e.preventDefault();
                     if (this.state.title && this.state.text) {
                       return this.props.push(this.state.title, this.state.text);
                     }
                   }}>
                  <i className="material-icons left">create</i>
                  Create New
                </a>

                <a className="waves-effect waves-light btn-large"
                   onClick={this.props.handler}><i
                    className="material-icons left">close</i>Cancel</a>
              </div>

            </div>
          </div>
        </form>
    );
  }
}

export default CreateForm;
