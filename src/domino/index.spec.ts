import { dotsOnDominoBones } from './index';
import { ANSWER_A, TEST_CASE_A, ANSWER_B, TEST_CASE_B, ANSWER_C, TEST_CASE_C } from './test_cases';

describe('Kata: Domino', () => {
	it('should return the correct path for a given grid', () => {
		expect(dotsOnDominoBones(TEST_CASE_A)).toEqual(ANSWER_A);
		expect(dotsOnDominoBones(TEST_CASE_B)).toEqual(ANSWER_B);
		expect(dotsOnDominoBones(TEST_CASE_C)).toEqual(ANSWER_C);
	});
});
