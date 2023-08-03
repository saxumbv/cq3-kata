import type { Grid, Path } from './types';

export const TEST_CASE_A: Grid = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
export const TEST_CASE_B: Grid = [
	[1, 2, 3],
	[8, 9, 4],
	[7, 6, 5],
];
export const TEST_CASE_C: Grid = [
	[1, 2, 3, 1],
	[4, 5, 6, 4],
	[7, 8, 9, 7],
	[7, 8, 9, 7],
];

export const ANSWER_A: Path = [1, 2, 3, 6, 9, 8, 7, 4, 5];
export const ANSWER_B: Path = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const ANSWER_C: Path = [1, 2, 3, 1, 4, 7, 7, 9, 8, 7, 7, 4, 5, 6, 9, 8];
