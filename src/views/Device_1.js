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


const Device_1 = kind({
	name: 'Device_1',

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
                <BodyText>공기청정기 </BodyText>
                <TextOnOff></TextOnOff>
            </div>
		</Panel>
	)
});

export default Device_1;
