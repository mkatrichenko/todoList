import React, {Component} from 'react';
import '../../scss/create.scss';

class CreateForm extends Component {
	
	constructor() {
    super();

    	this.state = {
      	title: '',
      	text: '',
    	};
		
		this.textRef = React.createRef();
		this.titleHandler = this.titleHandler.bind(this);
		this.textHandler = this.textHandler.bind(this);
	}
	titleHandler(event) {
		this.setState({title: event.target.value});
	}
		
	textHandler(event) {
		this.setState({text: event.target.value});
	}
	
		
	render() {
		return (
			<div className="creator">
				<div className="input_container">
					<input type="text" className="title_input"
					placeholder="title"
					onChange={this.titleHandler}/>
					<input type="text" className="about_input"
					ref={this.textRef}
					placeholder="description"
					onChange={this.textHandler}/>
				</div>
				<div className="button-wrapper">
					<button className={"btn" + ((!this.state.title || !this.state.text) ? " disabled" : "")}
					onClick={(e) => {
                     e.preventDefault();
                     if (this.state.title && this.state.text) {
                       return this.props.push(this.state.title, this.state.text);
                     }
                   }}>Create</button>
					<button onClick={this.props.handler} className="btn success">Cancel</button>
				</div>
			</div>
		)
	}
		

	
}

export default CreateForm;