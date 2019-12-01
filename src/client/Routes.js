import React from 'react';
import Home, { loadData } from './components/Home';

export default [
    {
        loadData,
        path: '/',
        component: Home,
        exact: true
    }
];