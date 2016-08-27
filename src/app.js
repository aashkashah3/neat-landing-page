import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Landing} from './components/landing';
import './styles/main.scss';
const MOUNT_NODE = document.getElementById('reactRoot');

render(
	<Landing/>,
	MOUNT_NODE
);
