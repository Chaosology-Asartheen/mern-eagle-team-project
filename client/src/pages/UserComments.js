//CommentBox is main file and we export to index.js
import React from "react";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import DATA from "../data";

// TODO:
// 1. Sign olunca Usrcomment e gidecek. Navbar olsun. button(Show All comment)
// 2. Navbar login olduğunu belirtir Profile Avatar.
// 3. Navbar a Log out  button u ekle.

const UserComments =()=> {

  return (
    <div className="container">
    <div className="comments">
        <h3> User Comments:</h3>
        <CommentList data={DATA} />
        <div className="form">
        <CommentForm />
        {/* 
TODO: ADD COMMENTS from comment list

TODO: ADD SEND COMMENTS FORM-- Comment Form
*/}
  </div>
      </div>
    </div>
  );
}

export default UserComments;

// Extras :
// TODO: add to project default facebook main page .
// Only clickabe button shoulde be comment button to go our comment page
// To make a facebook main page use UI-UX tool like Material design , ...
