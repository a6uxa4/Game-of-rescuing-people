import CountExperts from '../assets/image/element/CounterForExperts.svg'
import HeadExperts from '../assets/image/element/headerExpertsforCounter.svg'
import styled from 'styled-components'

interface CounterExpertsProps {
	experts: number
}

export const CounterExperts = ({ experts }: CounterExpertsProps) => {
	return (
		<ContainerExperts>
			<img src={HeadExperts} alt='HeadExperts' />
			<img src={CountExperts} alt='CountExperts' />
			<span>{experts}/10</span>
		</ContainerExperts>
	)
}

const ContainerExperts = styled.div`
	font-family: cursive;
	position: absolute;
	top: 20px;
	left: 5px;
	font-size: 20px;
	font-weight: 700;
	img:nth-child(1) {
		position: relative;
		top: -10px;
		left: 45px;
	}
	span {
		position: relative;
		top: -18px;
		right: 80px;
	}
`
