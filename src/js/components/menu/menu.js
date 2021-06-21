import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import MenuItems from './menu-items';
import { itemsState } from 'js/store/items';

const AppMenu = () => {
	const [items] = useRecoilState(itemsState);
	const [open, setOpen] = useState(false);

	const menuItems = items.map(({ route, title, type }) =>
		type === 'SubHeader' ? (
			<div key={title}>
				<Divider />
				<Subheader style={{ color: '#ee3467', fontSize: '26px' }}>
					{title}
				</Subheader>
			</div>
		) : (
			<MenuItems
				key={route}
				route={route}
				title={title}
				close={() => {
					setOpen(false);
				}}
			/>
		)
	);

	return (
		<div>
			<AppBar
				title={<span style={{ color: '#FFFFFF' }}>Funathon</span>}
				iconClassNameRight="muidocs-icon-navigation-expand-more"
				onLeftIconButtonClick={() => setOpen(o => !o)}
				style={{ backgroundColor: '#ee3467' }}
			/>
			<Drawer
				docked={false}
				open={open}
				onRequestChange={() => setOpen(o => !o)}
				style={{
					width: 1000,
				}}
				width="25%"
			>
				{menuItems}
			</Drawer>
		</div>
	);
};

export default AppMenu;
