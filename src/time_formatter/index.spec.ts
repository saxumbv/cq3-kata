import { timeFormatter } from "./index";
import { TEST_CASE } from "./test_case";

describe("Kata: Time Formatting", () => {
  it("should be formatted in words", () => {
    expect(timeFormatter(TEST_CASE, ['refinement', 'development'])).toBe("1 dag, 4 uur, 47 minuten en 3 seconden");
    expect(timeFormatter(TEST_CASE, ['lunch'])).toBe("0 dagen, 1 uur, 35 minuten en 35 seconden");
    expect(timeFormatter(TEST_CASE, ['koffiedrinken'])).toBe("0 dagen, 0 uur, 48 minuten en 44 seconden");
  });
});
