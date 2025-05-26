import React from 'react'
import ReactDom from 'react-dom'
import App from './App';

const mount = (el) => {
    ReactDom.render(<App/>, el)
}

//Context 1 => running this file in isolation
if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    if(devRoot){
        mount(devRoot);
    }
}

//Context 2 => running this file in production
export { mount };
