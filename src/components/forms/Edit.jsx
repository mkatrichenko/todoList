import React, {Component} from 'react';

class Edit extends Component {
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
	
	 componentDidMount() {
    	this.setState({title: this.props.data.title});
    	this.setState({text: this.props.data.text});
  	}
	
	render() {
		return (
			<div className="box">
			<input  name="title" onChange={this.titleHandler}
						value={this.state.title}
						type="text"
					/>
			
        		<textarea
					name="description"
					ref={this.textRef}
					value={this.state.text}
					onChange={this.textHandler}>
				</textarea>
        		<button onClick={this.save} 
					className="btn  new "
					onClick={(e) => {
                  		e.preventDefault();
                  		if (this.state.title && this.state.text) 	{
                    		return this.props.editItem(
								this.state.title,
								this.state.text,
                        		this.props.data.index, 		this.props.handler);
                  		}
                	}}>
					Save
				</button>
				<button  className="btn success" onClick={this.props.handler}>
					Close
				</button>
      		</div>
		)
	}
}

export default Edit;