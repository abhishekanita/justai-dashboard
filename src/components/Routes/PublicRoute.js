import React, { useEffect, useState, useContext } from 'react';
import {Route, Redirect, useHistory} from 'react-router-dom'
import {Store} from 'store'
import {getUser} from 'services/auth'
import { loginSuccess, loginFailure } from 'store/actions/auth';
import { updateWorkplace } from 'store/actions/workplace';
import BeatSpinner from 'components/Forms/Spinners'



const PublicRoute = ({component: Component, restricted, ...rest}) => {
    
    const {state, dispatch } = useContext(Store);
    const [loading, setLoading] = useState(true);
    const [didMount, setDidMount] = useState(true);


    useEffect(() => {
        setDidMount(true);
        fetching();
        return () => setDidMount(false);
    //eslint-disable-next-line
    }, [])

    const fetching = async () => {
        if(state.user.isLoggedIn === null){
            try{
                const user = await getUser();
                loginSuccess(user, dispatch)
            } catch(err){
                loginFailure(dispatch)
            }
        } 
    }

    useEffect(() => {
        if(state.user.isLoggedIn === true){
            setLoading(false)
        } 
        else if(state.user.isLoggedIn === false){
            setLoading(false)
        }
        // eslint-disable-next-line
    }, [state.user])


    if(!didMount) {
        return null;
    }  


    return (
        <React.Fragment>
        {!loading ? <Route {...rest} render = {
            (props) => {
                if((state.user.isLoggedIn ) && restricted){
                    return <Redirect to={{pathname: '/app', state: props.location}} />
                } else return <Component {...props} />
            }} 
        /> : <BeatSpinner loading = {true} />}
        </React.Fragment>
    );
};

export default PublicRoute
