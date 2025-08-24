import BaseURL from '../../../utils/BaseURL';

let loginUser = async data => {
  return fetch (`${BaseURL.URL}/loginUser`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify (data),
  });
};

export const requestForForgetPassword = async data => {
  return fetch (`${BaseURL.URL}/request-otp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify (data),
  });
};

export const updatePassword = async data => {
  return fetch (`${BaseURL.URL}/update-password`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify (data),
  });
};

export default loginUser;
