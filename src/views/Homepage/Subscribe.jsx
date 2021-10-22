// jshint ignore:start

import React from 'react';
import Button from '../../components/helpers/Button';
import ItemWrapper from '../../components/helpers/ItemWrapper';
import { Text } from '../../style';
import { AppInfoWrapper, ShowcaseContent, ShowcaseTitle } from './style';

const AppInfo = () => {
	return (
		<>
			<AppInfoWrapper width='80%' margin='-2rem' md>
				<ShowcaseContent
					flexDirection='column'
					justifyContent='center'
					alignItems='flex-start'
					md
				>
					<ShowcaseTitle width='80%' fontSize='1.6rem'>
						Subscribe Now And <br /> Great Sepcial Features~
					</ShowcaseTitle>
					<Text width='60%' fontSize='0.85rem'>
						Praesent mollis lobortis nisi nec laoreet
					</Text>
				</ShowcaseContent>
				<ItemWrapper width='60%' justifyContent='center' alignItems='center'>
					<Button width='70%' fontSize='1.4' primary isLarge>
						Subscribe Now
					</Button>
				</ItemWrapper>
			</AppInfoWrapper>
		</>
	);
};

export default AppInfo;
