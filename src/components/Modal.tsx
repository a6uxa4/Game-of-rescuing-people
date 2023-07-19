import styled from 'styled-components'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	type: string
}

export const Modal = ({ isOpen, onClose, type }: ModalProps) => {
	if (!isOpen) return null

	const handleBackdropClick = (event: React.MouseEvent<HTMLElement>) => {
		if (event.target === event.currentTarget) {
			onClose()
		}
	}
	return (
		<ModalBackdrop onClick={handleBackdropClick}>
			<ModalContent>
				<div>ABU</div>
			</ModalContent>
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
	background-color: #fff;
	padding: 20px;
	border-radius: 4px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	position: absolute;
	z-index: 9999;
`
