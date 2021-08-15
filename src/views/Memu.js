import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import Switch from '@enact/moonstone/Switch';
import {useState} from 'react';
import PropTypes from 'prop-types';
import Item from '@enact/moonstone/Item';
import Button from '@enact/moonstone/Button';
import BodyText from '@enact/moonstone/BodyText';


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

	render: ({title, onClick1, onClick2, onClick3, ...rest}) => (
		<Panel {...rest}>
			<Header title={title}>
			</Header>
            <div>
                <Item onClick={onClick1}>에어컨</Item>
                <TextOnOff></TextOnOff>
            </div>
            <div>
                <Item onClick={onClick1}>블라인더</Item>
                <TextOnOff></TextOnOff>
            </div>
            <div>
                <Item onClick={onClick1}>공기청정기</Item>
                <TextOnOff></TextOnOff>
            </div>

            <div>
                <Button> 설정 </Button>
                <Button> 음성인식 </Button>
            </div>
			<div>
				<BodyText>미세먼지 : </BodyText>
				<BodyText>시간 : </BodyText>
				<BodyText>온도 : </BodyText>
				<BodyText>조도 : </BodyText>
			</div>
		</Panel>
	)
});

export default MainPanel;
