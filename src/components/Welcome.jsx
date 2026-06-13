const Welcome = ({ onGetPostsClick }) => {
  return (
    <center>
      <h1 className="Welcome">Welcome to my social media app!</h1>
      
      <button className="btn btn-primary" onClick={onGetPostsClick}>Get Started</button>
    </center>
  );
  }
  export default Welcome;