import { snail } from './index';
import { ANSWER_A, TEST_CASE_A, ANSWER_B, TEST_CASE_B, ANSWER_C, TEST_CASE_C } from './test_cases';

describe('Kata: Snail', () => {
	it('should return the correct path for a given grid', () => {
		expect(snail(TEST_CASE_A)).toEqual(ANSWER_A);
		expect(snail(TEST_CASE_B)).toEqual(ANSWER_B);
		expect(snail(TEST_CASE_C)).toEqual(ANSWER_C);
	});
});
