import axios from 'axios';
import { logout } from '../context/auth';

const ROOT_URL = 'http://localhost:5000/auth';

export default async function verifyToken(dispatch, token) {
  if (!token) return;
  const tokenStatus = await axios.post(
    `${ROOT_URL}/accessToken`,
    { token: token },
    {
      validateStatus: function (status) {
        return status < 500;
      },
    }
  );

  if (tokenStatus.data.success) {
    return;
  }
  return logout(dispatch);
}
