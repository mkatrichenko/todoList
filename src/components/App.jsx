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
			isDone: false,
        	},
        	{
          	title: 'Title2',
          	text: 'about2',
			isDone: true,
        	},
        	{
          	title: 'Title3',
          	text: 'about3',
			isDone: false,
        	},
			{
          	title: 'Title4',
          	text: 'about4',
			isDone: true,
        	},
        	{
          	title: 'Title5',
          	text: 'about5',
			isDone: false,
        	},
      	],
			undoneItems:[],
			doneItems:[],
    	};
		
		this.toggleIsCreate =this.toggleIsCreate.bind(this);
		this.toggleIsDone =this.toggleIsDone.bind(this);
    	this.addTask = this.addTask.bind(this);
    	this.editItem = this.editItem.bind(this);
    	this.remove = this.remove.bind(this);
    	this.createUndoneArr = this.createUndoneArr.bind(this);
    	this.createDoneArr = this.createDoneArr.bind(this);
    	this.arrCreator = this.arrCreator.bind(this);

  }
	
	toggleIsCreate(e) {
    	e.preventDefault();
    	this.setState({isCreate: !this.state.isCreate});
  	}
	
	toggleIsDone(title, text, isDone, index) {
		var item = {title, text, isDone:!isDone};
		if(!isDone){
			let newItems = this.state.undoneItems.slice();
			newItems.splice(index, 1);
			
			const newDoneItems = [...this.state.doneItems.slice().reverse(), item].reverse();
			
			this.setState({undoneItems: newItems});
			this.setState({doneItems: newDoneItems});
		}
		if(isDone){
			let newItems = this.state.doneItems.slice();
			newItems.splice(index, 1);
			
			const newUndoneItems = [...this.state.undoneItems.slice().reverse(), item].reverse();
			
			this.setState({doneItems: newItems});
			this.setState({undoneItems: newUndoneItems});
		}
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
	createUndoneArr(){
		var undoneArr =[];
				this.state.items.forEach(function(item, i, arr) {
  					if(!item.isDone){
						undoneArr.push(item);
					}
				});
		return undoneArr;
	}
	
	createDoneArr(){
		let doneArr =[];
				this.state.items.forEach(function(item, i, arr) {
  					if(item.isDone){
						doneArr.push(item);
					}
				});
		return doneArr;
	}
	arrCreator(){
		var undoneArr =[];
		this.state.items.forEach(function(item, i, arr) {
  			if(!item.isDone){
				undoneArr.push(item);
			}
		});
		
		let doneArr =[];
				this.state.items.forEach(function(item, i, arr) {
  					if(item.isDone){
						doneArr.push(item);
					}
				});
		this.state.undoneItems = undoneArr;
		this.state.doneItems = doneArr;
	}
	componentWillUpdate() {
    	this.arrCreator();
  	}
	componentWillMount() {
    	this.arrCreator();
  	}
	componentDidMount(){
		this.arrCreator();
	}
	render()
		{
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
				<div className="container">
				<ul className="undone-list">
				{
				
					this.state.undoneItems.map((item, index) => {
                  		return <ListItem key={index}
                                   title={item.title}
                                   text={item.text}
                                   isDone={item.isDone}
                                   index={index}
                                   toggleIsDone={this.toggleIsDone}
                                   remove={this.remove}
                                   editItem={this.editItem}/>;
                	})
              	}
				</ul>
    			<ul className="done-list">
				{	
				
					this.state.doneItems.map((item, index) => {
                  		return <ListItem key={index}
                                   title={item.title}
                                   text={item.text}
                                   isDone={item.isDone}
                                   index={index}
                                   toggleIsDone={this.toggleIsDone}
                                   remove={this.remove}
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