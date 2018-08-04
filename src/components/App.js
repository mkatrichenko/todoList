import React, {Component} from 'react';
import TodoItem from './TodoItem';
import CreateForm from './forms/Create';
import '../assets/materialize/scss/materialize.scss';
import '../scss/app.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isCreate: false,
      items: [
        {
          title: 'ololo1',
          text: 'kokoko1',
        },
        {
          title: 'ololo2',
          text: 'kokoko2',
        },
        {
          title: 'ololo3',
          text: 'kokoko3',
        },
      ],
    };

    this.toggleIsCreate = this.toggleIsCreate.bind(this);
    this.pushNewItem = this.pushNewItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    this.setState({items: this.state.items.reverse()});
  }

  toggleIsCreate(e) {
    e.preventDefault();
    this.setState({isCreate: !this.state.isCreate});
  }

  pushNewItem(title, text) {
    const item = {title, text};
    const newItems = [...this.state.items.slice().reverse(), item].reverse();

    this.setState({items: newItems});
    this.setState({isCreate: !this.state.isCreate});
  }

  editItem(title, text, index, callback) {
    const item = {title, text};
    const newItems = this.state.items.slice();
    newItems[index] = item;

    this.setState({items: newItems});
    callback();
  }

  deleteItem(index) {
    let newItems = this.state.items.slice();
    newItems.splice(index, 1);

    this.setState({items: newItems});
  }

  render() {
    return (
        <div id="main">
          {this.state.isCreate ?
              <CreateForm handler={this.toggleIsCreate}
                          push={this.pushNewItem}/> :
              null}
          <div className="fixed-action-btn" onClick={this.toggleIsCreate}>
            <a className="btn-floating btn-large hoverable">
              {
                !this.state.isCreate ?
                    <i className="large material-icons">add</i>
                    :
                    <i className="large material-icons">close</i>
              }

            </a>
          </div>
          <div className="row">
            <ul className="col l6 m8 s10 card__wrapper" style={this.state.isCreate ? {marginTop: '270px'} : null}>
              {
                this.state.items.map((item, index) => {
                  return <TodoItem key={index}
                                   title={item.title}
                                   text={item.text}
                                   index={index}
                                   deleteItem={this.deleteItem}
                                   editItem={this.editItem}/>;
                })
              }
            </ul>
          </div>
        </div>
    );
  }
}

export default App;