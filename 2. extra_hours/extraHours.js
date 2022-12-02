function countHours(year, holidays) {
    countHours = 0;
    holidays.forEach(holiday => {
        let dateInput = holiday.split('/');
        holyDate = new Date(year, parseInt(dateInput[0])-1, parseInt(dateInput[1]))
        if(![0,6].includes(holyDate.getDay())){
            console.log('entrando...');
            countHours++;
        }
    });
    return countHours*2;
}