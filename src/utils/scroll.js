import { scroll } from 'quasar';

const { getScrollTarget, setScrollPosition } = scroll;

export const scrollToElement = (id) => {
  if (typeof id === 'string') {
    const el = document.getElementById(id);
    const target = getScrollTarget(el);
    const offset = el.offsetTop + 48;
    const duration = 300;
    setScrollPosition(target, offset, duration);
  }
};
