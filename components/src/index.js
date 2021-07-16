import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail.js";
import ApprovalCard from "./ApprovalCard";

//creating a react component
const App = () => {
  return (
    
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!!</h4>
          Are you sure you want to do this!!
        </div>
      </ApprovalCard>
      <ApprovalCard >
        <CommentDetail
          author="Bunty"
          time="Today at 4:32 PM"
          image={faker.image.avatar()}
          text="Fantastic!!"
        />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail
          author="Ghanty"
          time="Today at 2:12 PM"
          image={faker.image.avatar()}
          text="Great!"
        />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail
          author="Sunty"
          time="Today at 11:38 AM"
          image={faker.image.avatar()}
          text="Awesome"
        />
      </ApprovalCard>
    
      <ApprovalCard>
        <CommentDetail
          author="Gunty"
          time="Yesterday at 11:32 PM"
          image={faker.image.avatar()}
          text="Wow!!!"
        />
      </ApprovalCard>
      ;
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
