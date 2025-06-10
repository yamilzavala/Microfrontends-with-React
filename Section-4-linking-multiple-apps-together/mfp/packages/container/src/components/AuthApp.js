import React, {useRef, useEffect} from 'react';
import {mount as mountAuth} from 'auth/AuthApp'
import {useHistory} from 'react-router-dom'

export default ({onSignIn}) => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const {onParentNavigate} = mountAuth(ref.current, {
            initialPath: history.location.pathname, 
            onNavigate: ({pathname: nextPathname}) => {
                
                if(history.location.pathname !== nextPathname) {
                    history.push(nextPathname)
                }
            },
            onSignIn,
        });

        history.listen(onParentNavigate);
    }, [])

    return <div ref={ref} />;
}