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
import Login from '../views/login';
import Identity from '../views/Identity.json'
import { Component } from 'react';

function getQueryStringObject() {
    var a = window.location.search.substr(1).split('&');
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
        var p = a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
}


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

	handleSelectBreadcrumb = () => this.setState({index: 1})
	handleClick0 = () => this.setState({index: 1}) // 메뉴
	handleClick1 = () => this.setState({index: 2}) // 설정
	handleClick2 = () => this.setState({index: 3}) //디스플레이
	handleClick3 = () => this.setState({index: 4}) //사운드
	handleClick4 = () => this.setState({index: 5}) //사용자
	handleClick5 = () => this.setState({index: 6}) //공기청정기
	handleClick6 = () => this.setState({index: 7}) //블라인더
	handleClick7 = () => this.setState({index: 8}) //에어컨

	check = () => {
		this.setState({})
		var qs = getQueryStringObject();
		var id = document.getElementById("id").value;
		var pw = document.getElementById("pw").value;
		var localid = Identity.ID;
		var localpw = Identity.PW;
		if(localid == id && localpw == pw){
			this.setState({index: 1})
		}
		else{
			this.setState({index: 0})
			window.alert("아이디, 혹은 비밀번호가 틀렸습니다.");
		}
	}


	render () {
		return (
			<ActivityPanels {...this.props} onSelectBreadcrumb={this.handleSelectBreadcrumb} index={this.state.index}>
				<Login onClick={this.check}/>
				<MainPanel onClick1={this.handleClick5} onClick2={this.handleClick6} onClick3={this.handleClick7} onClick4={this.handleClick1} onClick5={this.handleClick0} />
				<Setting title="설정" onClick1={this.handleClick2} onClick2={this.handleClick3} onClick3={this.handleClick4}/>
				<DisplayPanel title="디스플레이" onClick1={this.handleClick2} />
				<SoundPanel title="사운드" onClick1={this.handleClick3} />
				<UserPanel title="사용자" onClick1={this.handleClick4} />
				<Device_1/>
				<Device_2/>
				<Device_3/>

			</ActivityPanels>
		);
	}
}

export default MoonstoneDecorator(App);
