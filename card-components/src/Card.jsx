import profilePic from "./assets/101.jpg"
function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture"></img>
      <h2 className="card-title">Oshino Shinobu</h2>
      <p className="card-text">I watch Youtube videos and write codes</p>
    </div>
  );
}
export default Card;