import Item from '@enact/moonstone/Item';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import PropTypes from 'prop-types';
import React from 'react';

const SoundPanel = kind({
	name: 'SoundPanel',

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
			<Item onClick={onClick}>사운드조절</Item>
			<Item onClick={onClick}>알림소리설정</Item>
		</Panel>
	)
});

export default SoundPanel;
