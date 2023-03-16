import React from "react";

const Title = () => {
    console.log("Title component");
    return (
        <div>
            <h1>Title Component</h1>
        </div>
    );
};

export default React.memo(Title);