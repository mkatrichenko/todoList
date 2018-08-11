import React, {Component} from 'react';
import Edit from './forms/Edit';

class ListItem extends Component {
	constructor() {
    	super();

    	this.state = {
      		isEdit: false,
    	};
		
   	 	this.actionBtnRef = React.createRef();

    	this.toggleIsEdit = this.toggleIsEdit.bind(this);
		this.rendNorm = this.rendNorm.bind(this);
		this.rendEdit = this.rendEdit.bind(this);
  	}
	
	toggleIsEdit() {
    	this.setState({isEdit: !this.state.isEdit});
  	}
	
	rendEdit = () => {
		return(
			<Edit 	data={{
			 			title: this.props.title,
                  		text: this.props.text,
                  		index: this.props.index,}}
                  	handler={this.toggleIsEdit}
					editItem={this.props.editItem} />
		)	
	};

	rendNorm = () => {
		return(
			<div className={"box" + ((this.props.isDone) ? " done" : "")} >
        		<div className="text">
					{this.props.title}
				</div>
        		<p>
					{this.props.text}
				</p>
        		<div 
					ref={this.actionBtnRef}
					className="button-wrapper">
       				<button onClick={() => 
						this.props.toggleIsDone(this.props.title, this.props.text,
						this.props.isDone, this.props.index)}className="btn">
      						{this.props.isDone ?
							'Undone'
							:
							'Done'
							}
       						
       				</button>
        			<button onClick={this.toggleIsEdit} className="btn">Edit</button>
        			<button onClick={() => this.props.remove(this.props.index)}
					className="btn">Remove</button>
        		</div>
      		</div>
		)
	}
	
	render() {
		
		return(
			<div>
			{ this.state.isEdit ?
			 this.rendEdit()
			 :
			 this.rendNorm()
			}
			</div>
		)
	}
}

export default ListItem;