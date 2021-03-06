import { renderHook } from '@testing-library/react-hooks';
import useScrollThreshold from './useScrollThreshold';

describe('HOOK: useScrollThreshold', () => {
  let origAddEventListener: () => void, origScrollY: number, origRAF: () => void;

  beforeEach(() => {
    origAddEventListener = global.document.addEventListener;
    origRAF = global.requestAnimationFrame;
    origScrollY = global.scrollY;

    global.document.addEventListener = jest.fn();
    global.requestAnimationFrame = (cb: () => void) => cb();
  });

  afterEach(() => {
    global.document.addEventListener = origAddEventListener;
    global.requestAnimationFrame = origRAF;
    global.scrollY = origScrollY;
  });

  it('registers a scroll listener when called', () => {
    renderHook(useScrollThreshold);

    expect(global.document.addEventListener).toHaveBeenCalledTimes(1);
    expect(global.document.addEventListener.mock.calls[0]).toMatchSnapshot();
  });

  it.each`
    scrollY | threshold | isAbove
    ${0}    | ${10}     | ${false}
    ${20}   | ${10}     | ${true}
    ${10}   | ${10}     | ${false}
  `(
    'user scrolled:  $scrollY, threshold was: $threshold, notifies above: $isAbove',
    ({ scrollY, threshold, isAbove }) => {
      global.scrollY = scrollY;

      const {
        result: { current: isOverTheTreshold },
      } = renderHook(() => useScrollThreshold(threshold));

      expect(isOverTheTreshold).toBe(isAbove);
    },
  );
});
