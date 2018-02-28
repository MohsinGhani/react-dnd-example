import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Lists from './Lists'
import {observe} from './Game'


const rootel =  document.getElementById('root')

observe((cardPosition)=>{
    ReactDOM.render(<Lists cardPosition={cardPosition}/>, rootel);
})

registerServiceWorker();
