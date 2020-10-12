import React from "react";
import "./index.css";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Icon from "@material-ui/core/Icon";
import { CSSTransition } from "react-transition-group";

const faqComponent = (props) => {
	const { faqOpenHandler, text, boxOpen, boxText } = props;
	return (
		<>
			<div className="faqComponent" onClick={faqOpenHandler}>
				<div>{text}</div>
				<Icon className={boxOpen ? "fas fa-plus" : "fas fa-minus"} />
				{/* <FontAwesomeIcon icon={boxOpen ? faMinus : faPlus} /> */}
			</div>

			<CSSTransition in={boxOpen} classNames="faq-animation" timeout={500} unmountOnExit>
				<div className="faqComponent" style={{ marginTop: "1.5px" }}>
					{boxText}
				</div>
			</CSSTransition>
		</>
	);
};

export default faqComponent;
