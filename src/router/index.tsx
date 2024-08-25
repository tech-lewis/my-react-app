import { Navigate, RouteObject } from 'react-router-dom'
import RouterHome from '../components/Home'
import About from '../components/About'
import Message from '../pages/Message'
import Detail from '../pages/Message/Detail'
const routes: RouteObject[] = [
	{
		path: '/home',
		element: <RouterHome />,
		children: [
			{
				path: 'message',
				element: <Message />,
				children: [
					{
						path: 'detail',
						element: <Detail />,
					},
					{
						path: 'detail/:id/:title',
						element: <Detail />,
					}
				]
			}	
		]
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: '/',
		element: <Navigate to={'/home'} replace />
	}
]
export default routes