
function ProfilePicture() {
  const imageUrl = "./src/assets/101.jpg";
  const handleClick = (e) => e.target.style.display = "none";
  return (<img className="card-image" onClick={(e) => handleClick(e)} src={imageUrl}></img>);
}
export default ProfilePicture;