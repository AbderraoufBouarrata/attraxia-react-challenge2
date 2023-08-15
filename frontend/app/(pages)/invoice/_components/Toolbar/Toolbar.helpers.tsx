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
