// jshint ignore:start

import React from 'react';
import DnsIcon from '@material-ui/icons/Dns';
import PersonIcon from '@material-ui/icons/Person';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Title, Text, Icon, Data } from '../../style';
import { AppInfoWrapper, Info } from './style';

const AppInfo = () => {
	return (
		<>
			<AppInfoWrapper width='70%' margin='auto' md>
				<Info justifyContent='center' alignItems='center' width='80%'>
					<Icon>
						<PersonIcon />
					</Icon>
					<Data>
						<Title fontSize='1.2rem' padding='0' small>
							90+
						</Title>
						<Text padding='0'>Users</Text>
					</Data>
				</Info>
				<Info justifyContent='center' alignItems='center' width='80%'>
					<Icon>
						<LocationOnIcon />
					</Icon>
					<Data>
						<Title fontSize='1.2rem'>30+</Title>
						<Text>Locations</Text>
					</Data>
				</Info>
				<Info justifyContent='center' alignItems='center' width='80%'>
					<Icon>
						<DnsIcon />
					</Icon>
					<Data>
						<Title fontSize='1.2rem'>50+</Title>
						<Text>Servers</Text>
					</Data>
				</Info>
			</AppInfoWrapper>
		</>
	);
};

export default AppInfo;
