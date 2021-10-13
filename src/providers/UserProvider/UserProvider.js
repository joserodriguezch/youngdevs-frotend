import axios from 'axios';
import authHeaderProvider from '../../shared/auth/authHeadersHelper';

import config from '../../config/env';

const getUserData = async (authProviderUserId, email) => {
  const postUserURL = `${config.apiURL}/user?authProviderUserId=${authProviderUserId}&email=${email}`;
  try {
    const result = await axios.get(postUserURL, undefined,
      {
        headers: await authHeaderProvider.getAuthHeaders(),
      });
    return result.data;
  } catch (error) {
    return error;
  }
};

export default {
  getUserData,
};
