import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import Switch from '@enact/moonstone/Switch';
import {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@enact/moonstone/Button';
import BodyText from '@enact/moonstone/BodyText';
import Input from '@enact/moonstone/Input';


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

	render: ({onClick1, onClick2, onClick3, ...rest}) => (
		<Panel {...rest}>
			<Header title={"로그인"}>
			</Header>
            <div>
				<BodyText>ID </BodyText>
				<Input placeholder="ID" />
			</div>
			<div>
				<BodyText>PW </BodyText>
				<Input placeholder="password" />
			</div>
			<div>
				<Button onClick={onClick}>로그인</Button>
			</div>
		</Panel>
	)
});

export default MainPanel;
