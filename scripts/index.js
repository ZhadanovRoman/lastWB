

let interval;
const contentContainer = document.querySelector('.content__container');

const activityFn = () => {
    contentContainer.innerHTML = accord;

};

const mapFn = () => {
    contentContainer.innerHTML = map;
    initMap();

};

const timerFn = () => {
    contentContainer.innerHTML = timer;


};

const timerOn = () => {
    let secondsCount = JSON.parse(sessionStorage.getItem('seconds')) || 0;
    let minutesCount = JSON.parse(sessionStorage.getItem('minutes')) || 0;
    let hoursCount = JSON.parse(sessionStorage.getItem('hours')) || 0;

    interval = setInterval(() => {
        secondsCount++;
        if (secondsCount === 60) {
            minutesCount++;
            secondsCount = 0;
            if (minutesCount === 60) {
                hoursCount++;
                minutesCount = 0;
                if (hoursCount === 24) {
                    hoursCount = 0;
                }
            }
        }

        sessionStorage.setItem('seconds', JSON.stringify(secondsCount));
        sessionStorage.setItem('minutes', JSON.stringify(minutesCount));
        sessionStorage.setItem('hours', JSON.stringify(hoursCount));

        if (location.hash === LINK.TIMER) {
            let secondsTab = document.querySelector('.timer__seconds');
            secondsTab.textContent = secondsCount >= 10 ? secondsCount : '0' + secondsCount;

            let minutesTab = document.querySelector('.timer__minutes');
            minutesTab.textContent = minutesCount >= 10 ? minutesCount : '0' + minutesCount;

            let hoursTab = document.querySelector('.timer__hours');
            hoursTab.textContent = hoursCount >= 10 ? hoursCount : '0' + hoursCount;
        }
    }, 1000);
}

const linksBtn = document.querySelectorAll('.header__page');

linksBtn.forEach(el => {
    el.addEventListener('click', (e) => {
        linksBtn.forEach(el => {
            el.parentNode.classList.remove('header__link-active')
        })

        e.preventDefault();
        el.parentNode.classList.add('header__link-active')

        if (e.currentTarget.tagName !== 'A') return;

        const state = {
            page: e.currentTarget.getAttribute('href')
        };
        history.pushState(state, null, state.page);
        renderPage(state.page);
    });
});


const renderPage = (link) => {
    switch (link) {
        case LINK.HOME:
            activityFn();
            break;
        case LINK.MAP:
            mapFn();
            break;
        case LINK.TIMER:
            timerFn();
            break;
        default:
            activityFn();
            break;
    }
};


const center = [44.546759, 33.533831];
function initMap() {
    ymaps.ready(() => {
        window.myMap = new ymaps.Map("map", {
            center: center,
            zoom: 16,
            controls: ["zoomControl"]
        });

        const myPlacemark = new ymaps.Placemark(window.myMap.getCenter());
        window.myMap.geoObjects.add(myPlacemark);

        document.querySelector('.spinner-border').style.display = 'none';
    });
}

window.onpopstate = () => {
    renderPage(hash);
};

document.addEventListener('DOMContentLoaded', () => {

    renderPage(location.hash);
    timerOn();
    selectedPage();
});

const selectedPage = () => {
    linksBtn.forEach(el => {
        if (el.getAttribute('href') === location.hash) {
            el.parentNode.classList.add('header__link-active')
        }
    })
}