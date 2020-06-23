import React from "react";

function Skills(props) {
    const { label, description } = props;
    return (
        <div>
            <h5 className="el-icon">
                <span className="el-icon-label">{label}</span>
            </h5>
            <p>{description}</p>        
        </div>
    );
}

export default Skills;
