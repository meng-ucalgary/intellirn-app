import React from "react";

function EdForm(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <label>Topic</label>
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Topic Name"
                        onChange={(newTopic) => props.setTopic(newTopic)}
                    />
                </div>
            </div>
        </div>
    );
}

export default EdForm;