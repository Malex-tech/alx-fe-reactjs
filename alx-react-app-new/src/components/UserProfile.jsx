import React from "react";

// This component displays a user's profile information
// It receives props for name, age, and bio
// Example usage: <UserProfile name="John Doe" age={30} bio="Software Engineer" />

const UserProfile = (props) => {
   return (
     <div style={{ border: "1px solid #ccc", padding: "20px", margin: '10px', borderRadius: "5px", maxWidth: "300px", backgroundColor: '#f9f9f9' }}>
       <h2 style={{color: 'blue', fontSize: '24px', marginBottom: '5px' }}>{props.name}</h2>
       <p>Age: <span style={{ fontWeight: 'bold', color: '#333' }}></span>{props.age}</p>
       <p style={{fontStyle: 'italic', color: '#555'}}>Bio: {props.bio}</p>
     </div>
   );
 };

 export default UserProfile;