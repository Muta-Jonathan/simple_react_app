import React from "react";
import { createRoot } from "react-dom/client";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <React.Fragment>
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail
            author="Sam"
            timeAgo="Today at 3:00PM"
            comment="Nice Post 1"
          />
        </ApprovalCard>
        <ApprovalCard>
          {" "}
          <CommentDetail
            author="Tam"
            timeAgo="Today at 7:00PM"
            comment="Nice Post 2"
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Tim"
            timeAgo="Today at 10:00PM"
            comment="Nice Post 1\4"
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Angel"
            timeAgo="Today at 9:00PM"
            comment="Nice Post 5"
          />
        </ApprovalCard>
      </div>
    </React.Fragment>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
