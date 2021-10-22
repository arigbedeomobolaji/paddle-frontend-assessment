import React from 'react';
import {
	TestimonyWrapper,
	TestimonyInfo,
	Details,
	UserDetail,
	Review,
	StarIcon,
} from './style';
import { Text, Title, Rating, Image, Avatar } from '../../style';

const Testimony = ({ src, name, location, rating = '4.5', primary }) => {
	return (
		<>
			<TestimonyWrapper
				flexDirection='column'
				justifyContent='center'
				width='100%'
				primary={primary}
				md
			>
				<TestimonyInfo
					justifyContent='space-between'
					alignItems='center'
					width='100%'
				>
					<Details justifyContent='flex-start'>
						<Avatar>
							<Image src={src} alt={name} />
						</Avatar>
						<UserDetail
							flexDirection='column'
							alignItems='center'
							justifyContent='center'
						>
							<Title fontSize='0.9rem' padding='0'>
								{name}
							</Title>
							<Text padding='0' fontSize='0.85rem'>
								{location}
							</Text>
						</UserDetail>
					</Details>
					<Review>
						<Rating>{rating}</Rating>
						<StarIcon />
					</Review>
				</TestimonyInfo>
				<Text fontSize='0.95rem'>
					“Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor. Ut
					rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce arcu
					ex”
				</Text>
			</TestimonyWrapper>
		</>
	);
};

export default Testimony;
