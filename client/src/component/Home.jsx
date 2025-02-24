import Containercard from "./Containercard.jsx";

function Home() {
  return (
    <div className="home-container">
      

      {/* Content Overlay */}
      <div className="content">
        <Containercard title="Recent" />
        <br />
        <Containercard title="Recommendation" />
        <br />
      </div>
    </div>
  );
}

export default Home;
