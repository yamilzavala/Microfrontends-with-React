import faker from 'faker'


const mount = (el) => {
    const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`
    el.innerHTML = cartText;
}

//Context 1 => running this file in isolation
if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart');
    if(el){
        mount(el);
    }
}

//Context 2 => running this file in production
export { mount };