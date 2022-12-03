import React, { useEffect, useState, useContext } from 'react';
import {Route, Redirect, useHistory} from 'react-router-dom'
import {Store} from 'store'
import {getUser} from 'services/auth'
import { loginSuccess, loginFailure } from 'store/actions/auth';
import BeatSpinner from '../Forms/Spinners'
import Dashboard from 'pages/Dashboard/Layout';

const ProtectedRoute =  ({ component: Component,  role, dashboard, ...rest }) => {
    
    
    const {state, dispatch} = useContext(Store);
    const [loading, setLoading] = useState(true);
    const [didMount, setDidMount] = useState(true);


    useEffect(() => {
        setDidMount(true);
        if(state.user.isLoggedIn === null) fetchUser();
        return () => setDidMount(false);
    }, [])
    

    const fetchUser = async () => {
        try{
            const user = await getUser();
            console.log(user)
            loginSuccess(user, dispatch)
        } catch(err){
            loginFailure(dispatch)
            console.log('login fail')
            setLoading(false)
        }
    }

    useEffect(() => {
        if(state.user.isLoggedIn === true){
            console.log('loading completed')
            setLoading(false)
        } 
        else if(state.user.isLoggedIn === false){
            console.log('loading completed')
            setLoading(false)
        }
    }, [state.user])


    if(!didMount) {
        return null;
    }  


    return(
        <React.Fragment>
        {(true || !loading) ? <Route {...rest} render = {
            (props) => {
                if(state.user.isLoggedIn === true){
                    if(
                        !rest.path.includes('/app') 
                        ){
                        return <Redirect to={{pathname: `/app`, state: props.location}} />
                    }
                    else {
                        if(dashboard) return <Dashboard><Component {...props} /></Dashboard>
                        else return <Component {...props} />
                    }
                } else if(state.user.isLoggedIn === false){
                    return <Redirect to={{pathname: '/', state: props.location}} />
                }
            }
        }/> : <BeatSpinner loading = {true} />}
        </React.Fragment>
    )
}

export default ProtectedRoute;


