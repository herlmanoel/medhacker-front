class FormatttingDates {

    static convertForInputDate(data){
        let dayMonthYear = data.split('T')[0];
        return dayMonthYear;
        // dayMonthYear = dayMonthYear.split('-');
        // return `${dayMonthYear[2]}/${dayMonthYear[1]}/${dayMonthYear[0]}`;
    }

    static convert(data) {
        let dayMonthYear = data.split('T')[0];
        dayMonthYear = dayMonthYear.split('-');
        return `${dayMonthYear[2]}/${dayMonthYear[1]}/${dayMonthYear[0]}`;
    }

}

export { FormatttingDates };