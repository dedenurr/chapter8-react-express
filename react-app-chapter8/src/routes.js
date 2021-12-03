import React from 'react';

const Home = React.lazy(() => import('./pages/Home'));
const PlayerList = React.lazy(() => import('./pages/Player/List'));
const PlayerSingle = React.lazy(() => import('./pages/Player/Single'));
const PlayerCreate = React.lazy(() => import('./pages/Player/Create'));
const PlayerUpdate = React.lazy(() => import('./pages/Player/Update'));

const routes = [
  { path: '/player/single/:playerId', Component: PlayerSingle },
  { path: '/player/create', Component: PlayerCreate },
  { path: '/player/update/:playerId', Component: PlayerUpdate },
  { path: '/player', Component: PlayerList },
  { path: '/', Component: Home },
];

export default routes;
