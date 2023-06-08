import React from "react";
import { createRoot } from "react-dom/client";
import CommentDetail from "./CommentDetail";

const App = () => {
    return (
    <React.Fragment>
        <div className="ui container comments">
           <CommentDetail />
           <CommentDetail />
           <CommentDetail />
           <CommentDetail />
           <CommentDetail />
        </div>
    </React.Fragment>
    );
}

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<App/>);