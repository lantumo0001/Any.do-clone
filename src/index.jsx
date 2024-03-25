import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Signup from './pages/Signup'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/signup',
		element: <Signup />,
	},
	{
		path: '/home',
		element: <Home />,
	}
])
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router ={router} />
	</React.StrictMode>
)