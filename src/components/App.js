import React, {Component} from 'react';
import ListItem from './ListItem';
import CreateForm from './forms/Create';
import '../scss/app.scss';

class App extends Component {
	constructor() {
    	super();
    	this.state = {
      	stateCreation: false,
      	items: [
        	{
          	title: 'Title1',
          	text: 'about1',
        	},
        	{
          	title: 'Title2',
          	text: 'about2',
        	},
        	{
          	title: 'Title3',
          	text: 'about3',
        	},
      	],
    	};
		
		this.toggleIsCreate =this.toggleIsCreate.bind(this);
    	this.addTask = this.addTask.bind(this);
    	this.editItem = this.editItem.bind(this);
    	this.remove = this.remove.bind(this);

  }
	
	toggleIsCreate(e) {
    	e.preventDefault();
    	this.setState({isCreate: !this.state.isCreate});
  	}
	
	remove(index) {
		let newItems = this.state.items.slice();
		newItems.splice(index, 1);
		this.setState({items: newItems});
  	}
	
	editItem(title, text, index, callback) {
		const item = {title, text};
		const newItems = this.state.items.slice();
		newItems[index] = item;

		this.setState({items: newItems});
    	callback();
	}
	
	addTask(title, text) {
    	const item = {title, text};
    	const newItems = [...this.state.items.slice().reverse(), item].reverse();

    	this.setState({items: newItems});
    	this.setState({isCreate: !this.state.isCreate});
  	}
	
	
	render() {
		
		return(
			<div className="field">
				{this.state.isCreate ?
              <CreateForm handler={this.toggleIsCreate}
                          push={this.addTask}/> :
              null}
				<button onClick={this.toggleIsCreate} className="btn new">
					{ !this.state.isCreate ?
						'New task'
						:
						'Close'
					}
				</button>
				<ul >
				{
                this.state.items.map((item, index) => {
                  return <ListItem key={index}
                                   title={item.title}
                                   text={item.text}
                                   index={index}
                                   remove={this.remove}
                                   editItem={this.editItem}/>;
                })
              }
				</ul>
      		</div>
		);
	}
}

export default App;