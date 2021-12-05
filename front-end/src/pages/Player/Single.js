import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Axios from 'axios';

const Single = () => {
  const history = useHistory();
  const { playerId } = useParams();
  const [player, setPlayer] = React.useState({
    username: '',
    email: '',
    password: '',
    experience: '',
    lvl: '',
  });

  React.useEffect(() => {
    Axios.get(`http://localhost:3000/api/player/${playerId}`)
      .then((response) => {
        const { status, message, data } = response.data;
        if (status === 'success single player') {
          setPlayer(data);
        } else {
          alert(message);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, [playerId]);

  const handleDelete = async (id) => {
    if (window.confirm('yakin mau dihapus??')) {
      try {
        const response = await Axios.delete('http://localhost:3000/api/player/delete/' + id);
        const { message } = response.data;
        alert(message);
        history.push('/player');
      } catch (error) {
        alert('Network Error');
      }
    }
  };

  return (
    <>
      <h2>Halaman Single Player</h2>
      {player && (
        <>
          <div>UserName: {player.username}</div>
          <div>Email: {player.email}</div>
          <div>Password: {player.password}</div>
          <div>Experience: {player.experience}</div>
          <div>Level: {player.lvl}</div>
          <button onClick={() => handleDelete(player._id)}> delete </button>
        </>
      )}

      <button onClick={() => history.push('/player')}>&laquo;back</button>
    </>
  );
};

export default Single;
