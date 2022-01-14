
export function getMonthWeeks(target = new Date(), offset = 0) {
    const date = new Date(target);
	const year = date.getFullYear(), month = date.getMonth();
	const days = new Date(year, month+1, 0).getDate();

	let first = new Date(year, month, 1 - offset).getDay();
    let weeks = [];
    let week = Array(7);
	let i=0, j=0;
	while (i < days) {
		for (j=0, week=Array(7); j < 7;) {
			while (j < first) {
                week[j++] = 0
            }

			week[j++] = ++i > days ? 0 : i;
			first = 0;
		}
		weeks.push(week);
	}

	return weeks;
}
