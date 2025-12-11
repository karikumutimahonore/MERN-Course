const ProfileCard = () => {
  const name = "Honore";
  const language = "JavaScript";
  const bio = "I love building web apps with React and exploring new tech.";
  const imageUrl =
    "https://media.istockphoto.com/id/1067347086/photo/cat-with-blue-eyes-looks-at-camera.jpg?s=612x612&w=0&k=20&c=UP1yQs6o0eidm4L2F74DDm02pyeH40MwBwwGRAKhb4E=";
  const hobbies = ["coding", "Gaming", "Reading", "Playing guitar"];

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Welcome to {name} 's profile </h1>
      <img
        style={{
          borderRadius: "50%",
          height: "200px",
          width: "200px",
          marginBottom: "1rem",
        }}
        src={imageUrl}
        alt="profile"
      />
      <p>
        <strong>Favorite Language: {language}</strong>
      </p>

      <p>Bio: {bio}</p>

      <h1>Hobbies</h1>
      <ul>
        {hobbies.map((hobby, index) => {
          return <li key={index}>{hobby}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProfileCard;
