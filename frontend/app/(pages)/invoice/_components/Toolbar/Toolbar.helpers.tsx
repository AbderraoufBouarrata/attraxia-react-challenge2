import ArrowForward from '@/app/_assets/icons/Arrow-Forward.svg';
import ArrowBack from '@/app/_assets/icons/Arrow-Back.svg';

export function changeArrowsToIcons() {
    const arrowForward = document.querySelector('.rs-calendar-header-forward');
    const arrowBackward = document.querySelector('.rs-calendar-header-backward');

    arrowForward?.childNodes[0].remove();
    arrowBackward?.childNodes[0].remove();

    const arrowForwardIcon = document.createElement('img');
    const arrowBackwardIcon = document.createElement('img');
    arrowBackwardIcon.src = ArrowBack.src;
    arrowForwardIcon.src = ArrowForward.src;
    arrowForwardIcon.width = 20;
    arrowForwardIcon.height = 20;
    arrowBackwardIcon.width = 20;
    arrowBackwardIcon.height = 20;

    arrowForward?.appendChild(arrowForwardIcon);
    arrowBackward?.append(arrowBackwardIcon);
}

export function getDatesInBetween(dates: Date[]) {
    let date1 = new Date(dates[0]);
    let date2 = new Date(dates[1]);

    // test if date1 is before date2
    if (date1 > date2) {
        const temp: Date = date1;
        date1 = date2;
        date2 = temp;
    }

    // get dates in between
    const datesInBetween: Date[] = [];
    while (date1 <= date2) {
        datesInBetween.push(new Date(date1));
        date1.setDate(date1.getDate() + 1);
    }

    return datesInBetween;
}

export function filterRowsPerDateRange(dateRange: any[], rows: any[]) {
    // Return rows that have dueDate in the dateRange
    return rows.filter((row) => {
        const dueDate = new Date(row.dueDate);

        function compareDates(a: number, b: number) {
            return a - b;
        }
        dateRange.sort(compareDates);
        const startDate = new Date(dateRange[0]);
        const endDate = new Date(dateRange[dateRange.length - 1]);
        return dueDate >= startDate && dueDate <= endDate;
    });
}
