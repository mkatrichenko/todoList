import React, {Component} from 'react';

import {textareaAutoResize} from '../../assets/materialize/js/materialize'

class EditForm extends Component {
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

  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }

  handleChangeText(event) {
    this.setState({text: event.target.value});
  }

  componentDidMount() {
    this.setState({title: this.props.data.title});
    this.setState({text: this.props.data.text});

    textareaAutoResize(this.textareaRef.current);
  }

  render() {
    return (
        <div>
          <div className="card-image">
            <div className="menu-icon__wrapper">
              <ul>
                <li><a className={"btn-floating hoverable" + ((!this.state.title || !this.state.text) ? " disabled" : "")} onClick={(e) => {
                  e.preventDefault();
                  if (this.state.title && this.state.text) {
                    return this.props.editItem(this.state.title, this.state.text,
                        this.props.data.index, this.props.handler);
                  }
                }}><i className="material-icons">save</i></a></li>
                <li><a className="btn-floating hoverable" onClick={this.props.handler}><i className="material-icons">close</i></a></li>
              </ul>
            </div>
          </div>
        <div className="card-content">
          <div className="row">

            <div className="col s12">

              <div className="input-field col s12">
                <input name="title" onChange={this.handleChangeTitle}
                       value={this.state.title} type="text"/>
              </div>

              <div className="input-field col s12">
                <textarea ref={this.textareaRef} name="description" onChange={this.handleChangeText}
                          value={this.state.text} cols="40" rows="4"
                          className="materialize-textarea">
                </textarea>
              </div>

            </div>

          </div>

        </div>
        </div>
    );
  }
}

export default EditForm;