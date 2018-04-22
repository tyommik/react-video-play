import * as React from 'react';
import * as ReactDom from 'react-dom';
import {AppComponent} from "./main-layout";
import '../styl/style'

window.onload = () => {
    ReactDom.render(
        React.createElement(AppComponent),
        document.getElementById('app')
    );
};