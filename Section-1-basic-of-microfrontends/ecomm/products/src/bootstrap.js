import faker from "faker";

let mount = (el) => {
    let products = ''
    
    for(let i = 0; i < 5; i++){
        const name = faker.commerce.productName()
        products += `<div>${name}</div>`
    }
    
    el.innerHTML = products;
}

//Context 1 => running tis file in isolation
if(process.env.NODE_ENV === 'development') {
    //assuming that our container does not have an element with an id of 'dev-products'
    const el = document.querySelector('#dev-products');
    if(el){
        //we're probably running in isolation
        mount(el);
    }
}

//Context 2 => running this file in production
export { mount };