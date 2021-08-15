import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import Switch from '@enact/moonstone/Switch';
import {useState} from 'react';
import PropTypes from 'prop-types';
import Item from '@enact/moonstone/Item';
import Button from '@enact/moonstone/Button';
import BodyText from '@enact/moonstone/BodyText';
import Data from './Data.json';

const clockTitle = document.querySelector(".clock");

function getTime() {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	clockTitle.textContent = `${hours < 10? `0${hours}`: hours}
	:${minutes < 10? `0${minutes}`: minutes}
	:${seconds < 10? `0${seconds}`: seconds}`;
}
function init() {
	getTime();
	setInterval(getTime, 1000);
}


function TextOnOff() {
	let [isSelected, isSelectedChange] = useState(false);
	return (
	   <>
	   <div>
		  <span>
			 <Switch onToggle={ (e)=>{isSelectedChange(e.selected); console.log(isSelected)}}/></span>
		  <span>
		  {  isSelected === true
			 ? <span>On</span>
			 : <span>Off</span>
		  }
		  </span>
	   </div>
	   </>
	);
}

function CurrentState() {
    var currentState = Data;

    return (
        <div>
            <BodyText>현재 시간 : {currentState.currentTime}</BodyText>
            <BodyText>미세먼지 농도 : {currentState.fineDust}</BodyText>
            <BodyText>온도 : {currentState.temperature}</BodyText>
            <BodyText>조도 : {currentState.illuminance}</BodyText>
        </div>

    );
}

const MainPanel = kind({
	name: 'MainPanel',

	propTypes: {
		/**
		 * A function to run on click event
		 * @type {Function}
		 */
		onClick: PropTypes.func,


		/**
		 * A title string appear on header
		 * @type {String}
		 */
		title: PropTypes.string
	},

	render: ({title, onClick1, onClick2, onClick3, onClick4, onClick5, ...rest}) => (
		<Panel {...rest}>
			<Header title={title}>
			</Header>
            <div>
                <Item onClick={onClick1}>공기청정기</Item>
                <TextOnOff></TextOnOff>
            </div>
            <div>
                <Item onClick={onClick2}>블라인더</Item>
                <TextOnOff></TextOnOff>
            </div>
            <div>
                <Item onClick={onClick3}>에어컨</Item>
                <TextOnOff></TextOnOff>
            </div>

            <div>
                <Button onClick={onClick4}> 설정 </Button>
                <Button onClick={onClick5}> 음성인식 </Button>
            </div>
			<div>
				<CurrentState></CurrentState>
			</div>
		</Panel>
	)
});

export default MainPanel;
