import React from 'react';
import SignUp from './components/signUp/SignUp';
import Plant from './components/plant/Plant';
import CreatePlant from './components/createPlant/CreatePlant';

export default {
    routeProps: [
        {
            path: '/register',
            Component: SignUp,
            isPrivate: false,
            header: false,
            footer: false,
        },
        {
            path: '/plant/:id',
            Component: Plant,
            isPrivate: false,
            header: true,
            footer: true,
        },
        {
            path: '/create-plant',
            Component: CreatePlant,
            isPrivate: true,
            isStaff: true,
            header: true,
            footer: true,
        }
    ]
}