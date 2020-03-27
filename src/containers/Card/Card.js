import React from "react";
import PropTypes from "prop-types";

import "./Card.scss";
import {
    Title,
    Details,
    Button,
    CompanyLogo,
    Description
} from "../../components";

const Card = props => {
    return (
        <div className="job-card">
            <Title title={props.title} />
            <div className="job-details">
                <Details
                    salary={props.salary}
                    type={props.type}
                    location={props.location}
                    company={props.company}
                />
                <CompanyLogo logo={props.logo} company={props.company} />
            </div>
            <Description description={props.description} />
            <Button />
        </div>
    );
};

Card.propTypes = {
    props: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        salary: PropTypes.string,
        type: PropTypes.string,
        location: PropTypes.string,
        description: PropTypes.string,
        logo: PropTypes.string
    })
};

export default Card;
