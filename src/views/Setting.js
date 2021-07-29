import Button from '@enact/moonstone/Button';
import Item from '@enact/moonstone/Item';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import PropTypes from 'prop-types';
import React from 'react';

const Setting = kind({
	name: 'Setting',

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
			<Item onClick={onClick1}>디스플레이</Item>
			<Item onClick={onClick2}>사운드</Item>
			<Item onClick={onClick3}>사용자</Item>
		</Panel>
	)
});

export default Setting;
