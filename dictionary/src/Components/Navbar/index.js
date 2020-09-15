import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = ({ props, classes }) => {
	return (
		<>
			<AppBar
				style={{
					background: "#5d104a",
					boxShadow: "none"
				}}
			>
				<Toolbar>
					<div style={{ flex: 1 }}>
						<Typography>Vocab</Typography>
					</div>
					<SearchIcon />
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
