// import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useSelector  } from "react-redux";
import { useDispatch } from "react-redux";

const Header = () => {
	// const cash = useSelector((store) => store.money  )

	const { money } = useSelector((s) => s);
	const dispach = useDispatch();
	return (
        <center>
		<div className="header">
			<div className="header__logo">
				{/* <h3>{cash}</h3> */}
				<button onClick={() => dispach ({type : "ADD_MONEY"})}>+</button>
				<h3>{money}</h3>
				<button onClick={() => dispach({type: "TAKE_MONEY"})}>-</button>
			</div>
		</div>
        </center>
	);
};
export default Header;
