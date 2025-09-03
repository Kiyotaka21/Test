interface BallonI {
    id: number
    isPublic: boolean
}

/**
 * @description имитация fetch. возвращает количество шариков
 * @param {Number} id ID шарика по цвету
 * @returns {Number} количество шариков
 * @example const res = await fetchBallonAmount(202);
 */
async function fetchBallonAmount(id: BallonI['id']): Promise<number> {
	const RANDOM_TIMEOUT: number = Math.ceil(Math.random() * 10000); // 1-9 секунд
	const RANDOM_AMOUNT: number = Math.ceil(Math.random() * id); // случайное число

	return new Promise(resolve => setTimeout(() => resolve(RANDOM_AMOUNT), RANDOM_TIMEOUT));
}

// данные о шариках
const BALLONS: { [key: string]: BallonI } = {
	red: {
		id: 202,
		isPublic: true,
	},
	blue: {
		id: 356,
		isPublic: false,
	},
	yellow: {
		id: 451,
		isPublic: false,
	},
	black: {
		id: 35,
		isPublic: true,
	},
	green: {
		id: 191,
		isPublic: true,
	},
	white: {
		id: 911,
		isPublic: true,
	},
};

async function getPublicBallons(): Promise<number> {
    const ballonKeys = Object.keys(BALLONS);
    const publicBallons = ballonKeys.filter(key => BALLONS[key].isPublic);
    const fetchPromises = publicBallons.map(key => {
        fetchBallonAmount(BALLONS[key].id)
    })

    try {
        const amounts = await Promise.all(fetchPromises)
        const total = amounts.reduce((sum, amount) => sum + amount, 0)
        return total

    } catch (error) {
        console.error('404', error);
        return 0
    }
}
