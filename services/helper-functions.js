export function getCurrentDate() {
	const thisDay = new Date();
	const currYear = thisDay.getFullYear();
	const currMonth = thisDay.getMonth();
	const currDate = thisDay.getDate();
	
	return `${currYear}-${currMonth}-${currDate}`;
}

export function getCurrentTime() {
	const thisDay = new Date();
	const currentHour = thisDay.getHours();
	const currentMinut = thisDay.getMinutes();
	const currentSecond = thisDay.getSeconds();
	
	return `${currentHour}:${currentMinut}:${currentSecond}`;
}

export function makeListItemID() {
	function makeUID() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}
	
	function makeGUID() {
		return makeUID() + makeUID() + '-' + makeUID() + '-' + makeUID() + '-' + makeUID() + makeUID() + makeUID();
	}
	const key = makeGUID();
	return key;
}