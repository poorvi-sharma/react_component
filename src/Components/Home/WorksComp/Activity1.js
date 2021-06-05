import React, { useRef } from "react";

const Activity1 = (props) => {
  const commentSection = useRef(null);
  const gotoCommentSection = () => {
    window.scrollTo({
      top: commentSection.current.offsetTop,
      behavior: "smooth",
    });
  };
  const styles = { marginTop: "600px", marginBottom: "600px" };
  return (
    <>
      <h1>
        this is Activity1 page
        <button onClick={gotoCommentSection}>go to comment 2</button>
      </h1>
      <h1 style={styles}>comment1</h1>
      <h1 style={styles} ref={commentSection} id="2no">
        comment2
      </h1>
      <h1 style={styles}>comment3</h1>
    </>
  );
};
export default Activity1;
