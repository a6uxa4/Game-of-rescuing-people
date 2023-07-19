import styled from 'styled-components'
import { DATA_CHARACTER } from '../utils/constants/constants'
import bubble from '../assets/image/element/bubble.svg'

interface CharacterProps {
	onClick: () => void
}

interface ContainerCharacterProps {
	$top: string
	$left: string
}

export const Character = ({ onClick }: CharacterProps) => {
	const CharacterData = DATA_CHARACTER[Math.floor(Math.random() * 10)]
	return (
		<Container
			onClick={onClick}
			$top={CharacterData.top}
			$left={CharacterData.left}>
			<img src={CharacterData.character} alt='character' />
			<img src={bubble} alt='bubble' />
		</Container>
	)
}

const pulseAnimation = styled.div`
	from {
		transform: scale(0.5);
	}
	to {
		transform: scale(1);
	}
`

const Container = styled.div<ContainerCharacterProps>`
	width: fit-content;
	height: fit-content;
	position: absolute;
	top: ${({ $top }) => $top};
	left: ${({ $left }) => $left};
	cursor: pointer;
	z-index: 2;
	animation: ${pulseAnimation} 15s infinite;
	img:nth-child(2) {
		position: absolute;
		bottom: 50%;
		left: 50%;
		transform: translate(-50%, 50%);
		z-index: 1;
	}
`
