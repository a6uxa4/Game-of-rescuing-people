import CountExperts from '../assets/image/element/CounterForExperts.svg'
import Timer from '../assets/image/element/Timer.svg'
import styled from 'styled-components'

interface TimerProps {
	time: number
}

export const Timers = ({ time }: TimerProps) => {
	return (
		<ContainerExperts>
			<img src={Timer} alt='HeadExperts' />
			<img src={CountExperts} alt='CountExperts' />
			<span>{time}/30</span>
		</ContainerExperts>
	)
}

const ContainerExperts = styled.div`
	font-family: cursive;
	position: absolute;
	top: 75px;
	left: 12px;
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
