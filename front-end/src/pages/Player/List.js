import React from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const List = () => {
  const [players, setPlayers] = React.useState([]);
  const history = useHistory();

  React.useEffect(() => {
    Axios('http://localhost:3000/api/players')
      .then((response) => {
        const { status, message, data } = response.data;
        if (status === 'success get all list players') {
          setPlayers(data);
        } else {
          alert(message);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  return (
    <>
      <h2>Halaman List Player</h2>
      <a href="/player/create">+ Create</a>
      <table>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Email</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {players &&
            players.map((player, index) => {
              return (
                <tr key={index}>
                  <td>
                    <a href={`/player/single/${player._id}`}>{player.username}</a>
                  </td>
                  <td className="center">{player.email}</td>
                  <td className="center">{player.lvl}</td>
                  <td className="center">
                    <a href={`/player/update/${player._id}`}>Update</a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
export default List;
