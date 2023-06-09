import {gravatarUrl, calculateNumberOfImages} from './utils';

describe('gravatarUrl', () => {
  it('should generate a random gravatar URL', () => {
    jest.spyOn(Math, 'random').mockImplementationOnce(() => 0.6);
    const size = 50;

    expect(gravatarUrl(size)).toEqual(
      'http://www.gravatar.com/avatar/45f3bb02369192b682c05839f1191d02?d=identicon&s=50',
    );
  });
});

describe('calculateNumberOfImages', () => {
  it('should return the number of images required to fill its container', () => {
    expect(calculateNumberOfImages()).toEqual(275);
  });

  it('should create images when scrolling', () => {
    expect(calculateNumberOfImages({offsetX: 100, offsetY: 900})).toEqual(507);
  });
});
