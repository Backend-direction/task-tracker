import Root from "./root";
import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../components/error-page/error-page";

import Dashboard, { loader as dashboardLoader} from './dashboard';
import Projects, { loader as projectsLoader } from './projects';
import Project, { loader as projectLoader } from './project';
import Settings from './settings';
import Upgrade from './upgrade';
import Logout from './logout'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { 
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <div>Oops! There was an error.</div>,
      }, 
      {
        path: 'projects',
        element: <Projects />,
        loader: projectsLoader,
        errorElement: <div>Oops! There was an error.</div>,
      },
      {
        path: 'projects/:project_id',
        element: <Project />,
        loader: projectLoader,
        errorElement: <div>Oops! There was an error.</div>,
      },
      {
        path: 'projects/:project_id/:story_id',
        element: <Project />,
        errorElement: <div>Oops! There was an error.</div>,
      },
      {
        path: 'projects/:project_id/:story_id/:task_id',
        element: <Project />,
        errorElement: <div>Oops! There was an error.</div>,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'upgrade',
        element: <Upgrade />,
      },
      {
        path: 'logout',
        element: <Logout />,
      },
    ],
  },
]);