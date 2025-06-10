import React from 'react'
import ReactDom from 'react-dom'
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    if(onNavigate) {
        history.listen(onNavigate);
    }
    
    ReactDom.render(<App history={history} onSignIn={onSignIn}/>, el)

    return {
        onParentNavigate({pathname: nextPathname}) {
            console.log('nextPathname: ', nextPathname);
            if(history.location.pathname !== nextPathname) {
                history.push(nextPathname)
            }
        }
    }
}

//Context 1 => running this file in isolation
if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth-dev-root');
    if(devRoot){
        mount(devRoot, { defaultHistory: createBrowserHistory()});
    }
}

//Context 2 => running this file in production
export { mount };
