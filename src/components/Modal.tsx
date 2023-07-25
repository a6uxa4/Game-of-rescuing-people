import styled from 'styled-components'
import { useEffect, useState } from 'react'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	type: string
}

export const Modal = ({ isOpen, onClose, type }: ModalProps) => {
	const [typeContent, setTypeContent] = useState<JSX.Element | null>(null)

	useEffect(() => {
		if (type === 'pause') {
			const content = <div>pause</div>
			setTypeContent(content)
		}
		if (type === 'great') {
			const content = <div>great</div>
			setTypeContent(content)
		}
		if (type === 'good') {
			const content = <div>good</div>
			setTypeContent(content)
		}
		if (type === 'satisfaction') {
			const content = <div>satisfaction</div>
			setTypeContent(content)
		}
	}, [type])

	const handleBackdropClick = (event: React.MouseEvent<HTMLElement>) => {
		if (event.target === event.currentTarget) {
			onClose()
		}
	}

	if (!isOpen) return null

	return (
		<ModalBackdrop onClick={handleBackdropClick}>
			<ModalContent>{typeContent}</ModalContent>
		</ModalBackdrop>
	)
}

const ModalBackdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
`

const ModalContent = styled.div`
	width: 450px;
	height: 200px;
	border: 3px solid #93c7f8;
	border-style: groove;
	background-color: #fff;
	border-radius: 4px;
	position: absolute;
	z-index: 9999;
`
