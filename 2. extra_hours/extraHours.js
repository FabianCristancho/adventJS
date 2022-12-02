function countHours(year, holidays) {
    countHours = 0;
    holidays.forEach(holiday => {
        let dateInput = holiday.split('/');
        holyDate = new Date(year, parseInt(dateInput[0])-1, parseInt(dateInput[1]))
        if(![0,6].includes(holyDate.getDay())){
            countHours++;
        }
    });
    return countHours*2;
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

console.log(countHours(year, holidays))
