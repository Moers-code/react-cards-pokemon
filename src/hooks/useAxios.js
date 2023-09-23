import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import axios from "axios";
const useAxios = () => {
	const [cardList, setcardList] = useState([]);
	const makeReq = async (url) => {
		const res = await axios.get(url);
		setcardList((cardList) => [...cardList, { ...res.data, id: uuid() }]);
	};
	return [cardList, makeReq];
};
export default useAxios;
