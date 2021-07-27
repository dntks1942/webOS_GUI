import {ActivityPanels} from '@enact/moonstone/Panels';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import PropTypes from 'prop-types';
import React from 'react';
import ButtonPanel from '../views/ButtonPanel';
import ItemPanel from '../views/ItemPanel';
import MainPanel from '../views/MainPanel';
import DisplayPanel from '../views/DisplayPanel';
import SoundPanel from '../views/SoundPanel';
import UserPanel from '../views/UserPanel';


class App extends React.Component {
	static propTypes = {
		index: PropTypes.number
	}

	static defaultProps = {
		index: 0
	}

	constructor (props) {
		super(props);
		this.state = {
			index: this.props.index
		};
	}

	handleSelectBreadcrumb = () => this.setState({index: 0})

	handleClick1 = () => this.setState({index: 1})
	handleClick2 = () => this.setState({index: 2})
	handleClick3 = () => this.setState({index: 3})


	render () {
		return (
			<ActivityPanels {...this.props} onSelectBreadcrumb={this.handleSelectBreadcrumb} index={this.state.index}>
				<MainPanel title="설정" onClick1={this.handleClick1} onClick2={this.handleClick2} onClick3={this.handleClick3}/>
				<DisplayPanel title="디스플레이" onClick1={this.handleClick1} />
				<SoundPanel title="사운드" onClick1={this.handleClick1} />
				<UserPanel title="사용자" onClick1={this.handleClick1} />
			</ActivityPanels>
		);
	}
}

export default MoonstoneDecorator(App);
