
import App from '../App';
import React from 'react';
import {Provider} from "react-redux";
import {store} from "../app/store";
import {createRoot} from "react-dom/client";


describe('App', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        const root = createRoot(div);
        root.render(<React.StrictMode><Provider store={store}><App/></Provider></React.StrictMode>)
        root.unmount();
    });

});
