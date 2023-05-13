//------------------------- SHOW/HIDE TURQUOISE OVERLAY BACKGROUND -------------------------//
    let overlayBgHover = document.querySelector('.ntf__header button');
    let viewIconHover = document.querySelector('.ntf__header__view');

    // mouseover & mouseout => when hovering over the element (mouseover) & after hovering finish (mouseout)
    overlayBgHover.addEventListener('mouseover', () => {
        viewIconHover.classList.remove('opacity_0');
    })

    overlayBgHover.addEventListener('mouseout', () => {
        viewIconHover.classList.add('opacity_0');
    })

//------------------------- TURQUOISE COLOR ON HOVER -------------------------//
    let titleHover = document.querySelector('.ntf__content__title a');
    let authorHover = document.querySelector('.ntf__footer__credit p > a');

    // mouseover & mouseout callback functions
    const hoverInColor = (element) => {
        element.classList.add('hoverColor');
    }

    const hoverOutColor = (element) => {
        element.classList.remove('hoverColor');
    }

    // array of elements that will use 'hoverInColor' & 'hoveOutColor'
    const arrayHoverColor = [titleHover, authorHover];

    // adding addEventListeners
    for(element of arrayHoverColor) {
        element.addEventListener('mouseover', (event) => hoverInColor(event.target));
        element.addEventListener('mouseout', (event) => hoverOutColor(event.target)); 
    }


