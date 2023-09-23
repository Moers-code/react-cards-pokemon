import React, { useState } from "react";

import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./hooks/useAxios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
	const [cardList, makeReq] = useAxios([]);
	const addCard = async () => {
		await makeReq("https://deckofcardsapi.com/api/deck/new/draw/");
	};
	return (
		<div className="PlayingCardList">
			<h3>Pick a card, any card!</h3>
			<div>
				<button onClick={addCard}>Add a playing card!</button>
			</div>
			<div className="PlayingCardList-card-area">
				{cardList.map((card) => (
					<PlayingCard key={card.id} front={card.cards[0].image} />
				))}
			</div>
		</div>
	);
}

CardTable.defaultProps = {};

export default CardTable;
