import React from 'react';
import 'babel-polyfill';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import AppWrapper from 'js/components/app';
import Menu from 'js/components/menu';
import PagesRoutes from './routes';
import config from 'config';

export default () => (
	<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
		<RecoilRoot>
			<AppWrapper>
				<Router>
					<div>
						<Menu />
						<Switch>
							<PagesRoutes />
						</Switch>
					</div>
				</Router>
			</AppWrapper>
		</RecoilRoot>
	</MuiThemeProvider>
);
