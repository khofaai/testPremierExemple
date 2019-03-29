import React, { Component } from 'react';

class TestForm extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
		  name: '',
		};
	  }
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={}
          name="name"
          onChange={this.handleChange}
        />
        <input
          type="submit"
          className="btn"
          value="Submit"
        />
      </form>
		);
	}
}

export default TestForm;