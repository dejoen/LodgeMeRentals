import BaseURL from '../../utils/BaseURL';

export const uploadData = async (file, token) => {
  return fetch (`${BaseURL.URL}/verify-agent-documment`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify ({verificationDocument: file}),
  });
};

export const publishHouse = async (data, token) => {
  return fetch (`${BaseURL.URL}/publish-house`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify ({
      houseOverview: data.HouseOverview,
      aboutHouse: data.AboutHouse,
      houseFeatures: data.HouseFeatures,
      mediaUpload: data.MediaUpload,
      rentalPrice: data.RentalPrice,
    }),
  });
};

export const getAllHousespublished = async token => {
  return fetch (`${BaseURL.URL}/all-houses`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};

export const getAllHousesPublishedAgent = async (token, publisherId) => {
  return fetch (`${BaseURL.URL}/my-houses-publised`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify ({publisherId}),
  });
};

export const getMessagesBetweenUsers = async (token, receiverId) => {
  return fetch (`${BaseURL.URL}/message/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify ({receiverId}),
  });
};

export const getMessages = async token => {
  return fetch (`${BaseURL.URL}/message/messages`, {
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};

export const getNotitifications = async token => {
  return fetch (`${BaseURL.URL}/message/notifications`, {
    method: 'Get',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};

export const getMarketInsigts = async token => {
  return fetch (`${BaseURL.URL}/market-insight/all`, {
    method: 'Get',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};

export const addNewMarketInsight = async (data, token) => {
  return fetch (`${BaseURL.URL}/market-insight/new`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify (data),
  });
};
