import { createBrowserRouter } from 'react-router-dom'
import Register from '../pages/register/Register'
import Signin from '../pages/signin'
import Home from '../pages/home'
import AddRecord from '../pages/addRecord'
import RecordListYear from '../pages/recordList/year'
import RecordListMonth from '../pages/recordList/month'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/sign-in',
        element: <Signin />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/add-record',
        element: <AddRecord />
    },
    {
        path: '/recodr-list',
        children: [
            {
                path: 'year',
                element: <RecordListYear />
            },
            {
                path: 'month',
                element: <RecordListMonth />
            },
        ]
    }
])

export default router