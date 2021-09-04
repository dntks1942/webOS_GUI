import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import Switch from '@enact/moonstone/Switch';
import {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@enact/moonstone/Button';
import BodyText from '@enact/moonstone/BodyText';
import Input from '@enact/moonstone/Input';
import LS2Request from '@enact/webos/LS2Request';

var webOSBridge = new LS2Request();

const getclistSuccess = (msg) => {
    console.log(msg);
}

const getclistFailure = (msg) => {
    console.log(msg);
}

const clist = () => {
    var parms = {
        "id": "camera1"
    }
    var lsRequest = {
        "service":"luna://com.webos.service.camera2",
        "method":"getCameraList",
        "parameters": parms,
        "onSuccess": getclistSuccess,
        "onFailure": getclistFailure
    };
    webOSBridge.send(lsRequest);
}

const Login = kind({
	name: 'Login',
	
	propTypes: {
		/**
		 * A function to run on click event
		 * @type {Function}
		 */
		onClick: PropTypes.func,
		onChange1: PropTypes.func,
		onChange2: PropTypes.func,


		/**
		 * A title string appear on header
		 * @type {String}
		 */
		title: PropTypes.string
	},

	render: ({onClick, onChange1, onChange2, ...rest}) => (
		<Panel {...rest}>
			<Header title={"로그인"}>
			</Header>
			<form>
				<div>
					<BodyText>ID </BodyText>
					<input id="id" name="id" type="text" placeholder="ID"/>
				</div>

				<div>
					<BodyText>PW </BodyText>
					<input id="pw" name="pw" type="password" placeholder="password"/>
				</div>
			
				<div>
					<Button onClick={onClick}>로그인</Button>
				</div>

          <div>
          <Button onClick={clist}>Click me</Button>
        </div>
			</form>
		</Panel>
	)
});

export default Login;