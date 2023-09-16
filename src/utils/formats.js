// Date => DD/MM/YYYY
const dateToString = (date) => {
	const dateFormated = date.toISOString().split('T')[0].split('-').reverse().join('/');
	return dateFormated;
};

// DD/MM/YYYY => Date
const stringToDate = (date) => {
	const dateFormated = date.split('/').reverse().join('-');
	return new Date(dateFormated);
};

module.exports = { dateToString, stringToDate };
