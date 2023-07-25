import React, { useState,useEffect } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
const BaseUrl= process.env.BaseUrl || "http://127.0.0.1:3000"

const AdminProfile= () => {
  var profile1
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('admin');
  const [isEditing, setIsEditing] = useState(false);
  
  const [profile,setProfile]=useState();
  console.log(sessionStorage)
  useEffect(()=>{
    axios.get(`${BaseUrl}/admin/profile`,{params:{
      user:"admin",
      param2:sessionStorage.getItem("param2"),
      userId:sessionStorage.getItem("userId")
    }
  }).then(res => {
    // setEmail(res.data.data.email)
    // setUsername(res.data.data.userId)
    // setProfile();
    console.log(res.data.Success)
    if(res.data.Success==="Profile Not found")
      navigate("/headLogin")
    setEmail(res.data.email)
    setUsername(res.data.unique_id)
    setProfile({
  
      "email":email,
      "username":username,
      
    }); 
   })
},[]
  )
  console.log(profile)
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    setProfile({
  
      "email":email,
      "phoneNumber":phoneNumber,
      "username":username,
      
    });
    

    axios.put(`${BaseUrl}/admin/profile`,{params:{
      user:"admin",email:email,phoneNumber:phoneNumber,
      username:username,unique_id:sessionStorage.getItem("userId")
    }
  })
    // Perform save action here, e.g., update the details in a database
  };

  return (
    <div className="card" style={styles.card}>
      <h2 style={styles.heading}>Profile Card</h2>
      {isEditing && (
        <div style={styles.editButtonContainer}>
          <button onClick={handleSaveClick}>Save</button>
        </div>
      )}
      <div style={styles.info}>
        <strong>Email:</strong> {isEditing ? (
          email
        ) : (
          email
        )}
      </div>
      <div style={styles.info}>
        <strong>Phone Number:</strong> {isEditing ? (
          <input
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        ) : (
          phoneNumber
        )}
      </div>
      <div style={styles.info}>
        <strong>Address:</strong> {isEditing ? (
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        ) : (
          address
        )}
      </div>
      <div style={styles.info}>
        <strong>Username:</strong> {isEditing ? (
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        ) : (
          username
        )}
      </div>
      {!isEditing && (
        <div style={styles.editButtonContainer}>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: 'lightblue',
    width: '100%',
    maxWidth: '100%',
    fontFamily: 'Arial',
  },
  heading: {
    marginLeft: '20%',
  },
  info: {
    marginLeft: '20%',
  },
  editButtonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '20%',
    marginTop: '10px',
  },
};


export default AdminProfile