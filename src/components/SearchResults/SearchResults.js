import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

import {Card} from "../../containers/Card";
import "./SearchResults.scss"

export default class SearchResults extends React.Component {
    state = {
        jobs: []
    };

    componentDidMount() {
        const url = process.env.REACT_APP_API_URL;
        axios.get(url).then(res => {
            const jobs = res.data;
            this.setState({ jobs });
        });
    }

    render() {
        return (
            <div className="search-results" >
                {this.state.jobs.map(job => (
                    <Card
                        id={job.id}
                        title={job.title}
                        salary={job.salary}
                        type={job.title}
                        location={job.location}
                        description={job.description}
                        logo={job.logo}
                        company={job.company}
                    />
                ))}
            </div>
        );
    }
}
