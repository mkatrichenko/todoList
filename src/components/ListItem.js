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
  	}
	
	toggleIsEdit() {
    	this.setState({isEdit: !this.state.isEdit});
  	}
	
	render() {
		return (
			<div>
			{ this.state.isEdit ?
			 	(<Edit data={{
			 		title: this.props.title,
                  	text: this.props.text,
                  	index: this.props.index,
				}} handler={this.toggleIsEdit}
				editItem={this.props.editItem} />)
			:
			(<div className="box">
        		<div className="text">
					{this.props.title}
				</div>
        		<p>
					{this.props.text}
				</p>
        		<div 
					ref={this.actionBtnRef}
					className="button-wrapper">
        			<button onClick={this.toggleIsEdit} className="btn light">Edit</button>
        			<button onClick={() => this.props.remove(this.props.index)}
					className="btn red">Remove</button>
        		</div>
      		</div>)
			}
			
		</div>
		)
	}
}

export default ListItem;