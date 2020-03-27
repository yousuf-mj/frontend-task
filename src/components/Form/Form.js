import React from "react";
import axios from "axios";

import "./Form.scss";

export default class Form extends React.Component {
    state = { title: "" };
    
    handleSubmit = async event => {
        event.preventDefault();
        const url = process.env.REACT_APP_API_URL;

        try{
            const resp = await axios.get(
                url
            );
            this.setState({ title: "" });
        }catch(error){
            console.error({message: 'error with form', error});
            alert('error with form submit')
        }
        
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.title}
                    onChange={event =>
                        this.setState({ title: event.target.value })
                    }
                    placeholder="Filter By Title"
                />
                <input
                    type="text"
                    value={this.state.location}
                    onChange={event =>
                        this.setState({ location: event.target.value })
                    }
                    placeholder="Filter By Location"
                />
                <button>Search</button>
            </form>
        );
    }
}
