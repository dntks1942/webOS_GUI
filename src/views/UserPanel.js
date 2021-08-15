import Item from '@enact/moonstone/Item';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import PropTypes from 'prop-types';
import React from 'react';

const UserPanel = kind({
	name: 'UserPanel',

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

	render: ({title, onClick, ...rest}) => (
		<Panel {...rest}>
			<Header title={title} />
			<Item onClick={onClick}>사용자 정보</Item>
			<Item onClick={onClick}>비밀번호변경</Item>
			<Item onClick={onClick}>기타등등</Item>
		</Panel>
	)
});

export default UserPanel;
