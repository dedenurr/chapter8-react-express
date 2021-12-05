import React from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

const Create = () => {
  const history = useHistory();
  const [player, setPlayer] = React.useState({
    username: '',
    email: '',
    password: '',
    experience: '',
    lvl: '',
  });

  const handleChange = (e, name) => {
    const value = e.target.value;
    setPlayer({ ...player, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // update link post
      const response = await Axios.post('http://localhost:3000/api/player/post', player);
      const { status, message } = response.data;
      if (status === 'success create player') {
        alert(message);
        history.push('/player');
      } else {
        alert(message);
      }
    } catch (error) {
      alert('Network error');
    }
  };

  return (
    <>
      <h2>Halaman Form Create Product</h2>
      <form>
        <label>UserName</label>
        <input type="text" size={50} value={player.username} onChange={(e) => handleChange(e, 'username')} />

        <label>Email</label>
        <input type="email" size={50} value={player.email} onChange={(e) => handleChange(e, 'email')} />

        <label>password</label>
        <input type="text" size={50} value={player.password} onChange={(e) => handleChange(e, 'password')} />

        <label>Experience</label>
        <input type="number" value={player.experience} onChange={(e) => handleChange(e, 'experience')} />

        <label>Level</label>
        <input type="number" value={player.lvl} onChange={(e) => handleChange(e, 'lvl')} />

        <label></label>
        <button onClick={handleSubmit}> submit </button>
      </form>
      <button onClick={() => history.push('/player')}> &laquo; back</button>
    </>
  );
};
export default Create;
