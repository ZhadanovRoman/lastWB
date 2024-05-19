const contentContainer = document.querySelector('.content__container');

const activityFn = () => {
    if(contentContainer)contentContainer.innerHTML = accord;
    
};

const mapFn = () => {
    if(contentContainer)contentContainer.innerHTML = map;
    initMap();
};

const timerFn = () => {
    if(contentContainer)contentContainer.innerHTML = timer;
};

const timerOn = () => {
    const getTime = () => new Date().getTime();
    const startTime = JSON.parse(sessionStorage.getItem('startTime'));
    interval = setInterval(() => {
        const timer = getTime() - startTime
        const totalSeconds = Math.floor(timer / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        if (location.hash === LINK.TIMER) {
            const timerDiplay = document.querySelector('.timer__display');
            timerDiplay.innerHTML = `${hours[0] >= 10 ? hours : '0' + hours}:${minutes >= 10 ? minutes : '0' + minutes}:${seconds >= 10 ? seconds : '0' + seconds}`
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
       
        const state = {
            page: e.currentTarget.getAttribute('href')
        };
        history.pushState(state, null, state.page);
        renderPage(state.page);
    });
});


const renderPage = (link) => {
    switch (link) {
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
    renderPage(location.hash);
};

document.addEventListener('DOMContentLoaded', () => {
    if (!JSON.parse(sessionStorage.getItem('startTime'))) {
        sessionStorage.setItem('startTime', JSON.stringify(new Date().getTime()));
    }
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