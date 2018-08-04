import React, {Component} from 'react';
import EditForm from './forms/Edit';

import '../scss/todo-item.scss'

class TodoItem extends Component {
  constructor() {
    super();

    this.state = {
      isEdit: false,
    };
    this.actionBtnRef = React.createRef();

    this.toggleIsEdit = this.toggleIsEdit.bind(this);
  }

  componentDidMount() {

  }

  toggleIsEdit() {
    this.setState({isEdit: !this.state.isEdit});
  }

  render() {
    return (
        <li className="card hoverable">
          {
            this.state.isEdit ?
                (<EditForm data={{
                  title: this.props.title,
                  text: this.props.text,
                  index: this.props.index,
                }} handler={this.toggleIsEdit}
                 editItem={this.props.editItem}/>)
                :
                (<div>
                  <div className="card-image">
                    <div ref={this.actionBtnRef} className="menu-icon__wrapper">
                      {/*TODO: Complete float drop-left menu*/}
                      {/*<a className="btn-floating btn-large hoverable">*/}
                        {/*<i className="large material-icons">menu</i>*/}
                      {/*</a>*/}
                      <ul>
                        <li><a className="btn-floating hoverable" onClick={this.toggleIsEdit}><i className="material-icons">edit</i></a></li>
                        <li><a className="btn-floating hoverable" onClick={() => this.props.deleteItem(this.props.index)}><i className="material-icons">delete</i></a></li>
                      </ul>
                    </div>

                  </div>
                  <div className="card-content">
                    <p className="card-title">{this.props.title}</p>
                    <p>{this.props.text}</p>
                  </div>
                </div>)
          }
        </li>
    );
  }
}

export default TodoItem;