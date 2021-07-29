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
import Setting from '../views/Setting';
import Device_1 from '../views/Device_1';
import Device_2 from '../views/Device_2';
import Device_3 from '../views/Device_3';



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
	handleClick0 = () => this.setState({index: 0}) // 메뉴
	handleClick1 = () => this.setState({index: 1}) // 설정
	handleClick2 = () => this.setState({index: 2}) //디스플레이
	handleClick3 = () => this.setState({index: 3}) //사운드
	handleClick4 = () => this.setState({index: 4}) //사용자
	handleClick5 = () => this.setState({index: 5}) //공기청정기
	handleClick6 = () => this.setState({index: 6}) //블라인더
	handleClick7 = () => this.setState({index: 7}) //에어컨

	  render () {

    const mystyle = {
        color: "black",
        backgroundColor: "white",
        fontFamily: "Arial"
    };

		return (
			      <ActivityPanels style={mystyle} {...this.props} onSelectBreadcrumb={this.handleSelectBreadcrumb} index={this.state.index}>
				    <MainPanel style={mystyle} title="Home" onClick1={this.handleClick5} onClick2={this.handleClick6} onClick3={this.handleClick7} onClick4={this.handleClick1} onClick5={this.handleClick0} />
				    <Setting style={mystyle} title="설정" onClick1={this.handleClick2} onClick2={this.handleClick3} onClick3={this.handleClick4}/>
				    <DisplayPanel style={mystyle} title="디스플레이" onClick1={this.handleClick1} />
				    <SoundPanel style={mystyle} title="사운드" onClick1={this.handleClick1} />
				    <UserPanel style={mystyle} title="사용자" onClick1={this.handleClick1} />
				<Device_1/>
				<Device_2/>
				<Device_3/>

			</ActivityPanels>
		);
	}
}

export default MoonstoneDecorator(App);
