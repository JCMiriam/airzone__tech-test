import '@testing-library/jest-dom';

jest.mock('@/assets/icons/icon-bag.svg?react', () => require('./__mocks__/svgMock.tsx'));
jest.mock('@/assets/icons/icon-cool.svg?react', () => require('./__mocks__/svgMock.tsx'));
jest.mock('@/assets/icons/icon-heat.svg?react', () => require('./__mocks__/svgMock.tsx'));
jest.mock('@/assets/icons/icon-leaving.svg?react', () => require('./__mocks__/svgMock.tsx'));
jest.mock('@/assets/icons/icon-night.svg?react', () => require('./__mocks__/svgMock.tsx'));
jest.mock('@/assets/icons/icon-power.svg?react', () => require('./__mocks__/svgMock.tsx'));
jest.mock('@/assets/icons/icon-sofa.svg?react', () => require('./__mocks__/svgMock.tsx'));
jest.mock('@/assets/icons/icon-sunrise.svg?react', () => require('./__mocks__/svgMock.tsx'));

