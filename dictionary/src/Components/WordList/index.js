import { Box, Divider, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { DummyWordList } from "../../Configs";
import { Fab, List, ListItem } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

class WordList extends Component {
	render() {
		return (
			<div
				style={{
					backgroundColor: "white",
					margin: "60px 0px",
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20
				}}
			>
				<Box display="flex" flexDirection="column">
					<Box display="flex" style={{ padding: "8px 20px" }}>
						<Typography>Words List</Typography>
					</Box>
					<Divider />
					<List>
						{DummyWordList.map(item => (
							<>
								<ListItem divider={true} button={true}>
									<Box style={{ padding: "15px 20px" }}>
										<Typography>{item.word}</Typography>
										<Typography
											style={{
												fontSize: 12,
												marginTop: 5
											}}
										>
											{item.meaning}
										</Typography>
									</Box>
								</ListItem>
							</>
						))}
					</List>
				</Box>
				<Fab
					color="primary"
					aria-label="add"
					style={{
						position: "fixed",
						right: "6vw",
						bottom: "2vh",
						zIndex: "1",
						background: "#5d104a"
					}}
				>
					<AddIcon />
				</Fab>
			</div>
		);
	}
}

export default WordList;
