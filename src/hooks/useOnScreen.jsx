import { useEffect, useState } from 'react';

export const useOnScreen = (ref) => { 
    const [isOnScreen, setIsOnScreen] = useState(false);

    const observer = new IntersectionObserver((([entry]) => {
        setIsOnScreen(entry.isIntersecting);
    }), {
        threshold: 0.2,
    })

    useEffect(() => {
        observer.observe(ref.current);
        return () => observer.disconnect();
    })

  return isOnScreen;
}

/*
The main issue is threshold: 0.5. This tells the observer to fire once 50% of the element is visible in the viewport. For your "long" element, since its 300vh tall, and your viewport is 100vh tall, the maximum visibility that it has is 100vh/300vh = 33%, so the observer never fires.

To deal with this, you could adjust the threshold to something smaller like 0.25. That would fix the behavior for the long section, but it would make the active link change early for your shorter sections. So I propose you add 2 observers: 1 for the short sections with a threshold of 0.5 (.forJS:not(.long)), and another for the longer sections with a threshold of 0.25 (.forJS.long).

const links = document.querySelectorAll('.nav-link');
const sectionsShort = [...document.querySelectorAll('.forJS:not(.long)')];
const sectionsLong = [...document.querySelectorAll('.forJS.long')];
const sections = [...document.querySelectorAll('.forJS')];

const callback = entries => {
    links.forEach((link) => link.classList.remove('active'));
    const elem = entries.find((entry) => entry.isIntersecting);
    if (elem) {
        const index = sections.findIndex((section) => section === elem.target);
        links[index].classList.add('active');
    }
}

const observerShort = new IntersectionObserver(callback, {
    rootMargin: '0px',
    threshold: .5,
});
const observerLong = new IntersectionObserver(callback, {
    rootMargin: '0px',
    threshold: .25,
});
sectionsShort.forEach((section) => {
    observerShort.observe(section)
});
sectionsLong.forEach((section) => {
    observerLong.observe(section)
});
*/