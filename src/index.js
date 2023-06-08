import React from "react";
import { createRoot } from "react-dom/client";
import { faker } from '@faker-js/faker';

const App = () => {
    return (
    <React.Fragment>
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar"  src={faker.image.avatar()}/>
                </a>
                <div className="content">
                   <a href="/" className="author">Sam</a>
                   <div className="metadata">
                    <span className="date"> Today at 7:00PM </span>
                    </div> 
                    <div className="text">
                        Nice blog post
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
    );
}

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<App/>);