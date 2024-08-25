import { Navigate, RouteObject } from 'react-router-dom'
import RouterHome from '../components/Home'
import Message from '../pages/Message'
import Detail from '../pages/Message/Detail'
import Mall from '../pages/Mall'
import UserManagment from '../pages/UserManagment'
import Other from '../pages/Other/index'
import PageOne from '../pages/Other/PageOne'
import PageTwo from '../pages/Other/PageTwo'

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
		path: '/other',
		element: <Other />,
		children: [
			{
				path: 'pageOne',
				element: <PageOne />
			},
			{
				path: 'pageTwo',
				element: <PageTwo />
			}	
		]
	},
	{
		path: '/mall',
		element: <Mall />
	},
	{
		path: '/user',
		element: <UserManagment />
	},
	// {
	// 	path: '/about',
	// 	element: <About />
	// },
	{
		path: '/',
		element: <Navigate to={'/home'} replace />
	}
]
export default routes