export const countScore = (value: number) => {
	switch (true) {
		case value >= 8:
			return 'great'
		case value >= 4:
			return 'good'
		case value >= 0:
			return 'satisfaction'
		default:
			return 'satisfaction'
	}
}
