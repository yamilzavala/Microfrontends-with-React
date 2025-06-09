import React from 'react'
import ReactDom from 'react-dom'
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (el, { onNavigate, defaultHistory }) => {
    const history = defaultHistory || createMemoryHistory();

    if(onNavigate) {
        history.listen(onNavigate);
    }
    
    ReactDom.render(<App history={history}/>, el)

    return {
        onParentNavigate({pathname: nextPathname}) {
            if(history.location.pathname !== nextPathname) {
                history.push(nextPathname)
            }
        }
    }
}

//Context 1 => running this file in isolation
if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    if(devRoot){
        mount(devRoot, { defaultHistory: createBrowserHistory()});
    }
}

//Context 2 => running this file in production
export { mount };
