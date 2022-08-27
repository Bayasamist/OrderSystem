import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import axios from 'axios';

export const PrivateOutlet = () => {
  const auth = true;
  return auth ? <Outlet /> : <Navigate to='/' />;
};

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    headers: {
      Authorization: token,
    },
  });
};
