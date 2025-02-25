package io.kotest.matchers.floats

import io.kotest.matchers.Matcher
import io.kotest.matchers.MatcherResult
import io.kotest.matchers.MatcherResult.Companion.invoke
import io.kotest.matchers.shouldBe
import io.kotest.matchers.shouldNotBe
import kotlin.math.abs

/**
 * Asserts that this [Float] is in the interval [[a]-[tolerance] , [b]+[tolerance]]
 *
 * Verifies that this [Float] is greater than or equal to ([a] - [tolerance]) and less than or equal to ([b] + [tolerance])
 *
 * Opposite of [Float.shouldNotBeBetween]
 *
 * ```
 * 0.5.shouldBeBetween(0.2, 0.7, 0.0)   // Assertion passes
 * 0.5.shouldBeBetween(0.2, 0.3, 0.0)   // Assertion fails
 * 0.5.shouldBeBetween(0.2, 0.3, 0.2)   // Assertion passes
 * 0.5.shouldBeBetween(0.2, 0.3, 0.1)   // Assertion fails
 * ```
 */
fun Float.shouldBeBetween(a: Float, b: Float, tolerance: Float): Float {
   this shouldBe between(a, b, tolerance)
   return this
}

/**
 * Asserts that this [Float] is NOT in the interval [[a]-[tolerance] , [b]+[tolerance]]
 *
 * Verifies that this [Float] is not:
 * - Greater than or equal to ([a] - [tolerance])
 * - Less than or equal to ([b] + [tolerance])
 *
 * If and only if both the assertions are true, which means that this [Float] is in the interval, this assertion fails.
 *
 * Opposite of [Float.shouldBeBetween]
 *
 *
 * ```
 * 0.5.shouldNotBeBetween(0.2, 0.7, 0.0)   // Assertion fails
 * 0.5.shouldNotBeBetween(0.2, 0.3, 0.0)   // Assertion passes
 * 0.5.shouldNotBeBetween(0.2, 0.3, 0.2)   // Assertion fails
 * 0.5.shouldNotBeBetween(0.2, 0.3, 0.1)   // Assertion passes
 * ```
 */
fun Float.shouldNotBeBetween(a: Float, b: Float, tolerance: Float): Float {
   this shouldNotBe between(a, b, tolerance)
   return this
}

/**
 * Matcher that matches floats and intervals
 *
 * Verifies that a specific [Float] is in the interval [[a] - [tolerance] , [b] + [tolerance]].
 *
 * For example:
 *
 * 0.5 is in the interval [0.4 , 0.6], because 0.4 <= 0.5 <= 0.6.
 *
 * This matcher also includes the bonds of the interval, so:
 *
 * 0.5 is in the interval [0.5, 0.6] because 0.5 <= 0.5 <= 0.6.
 *
 * The parameter [tolerance] is used to allow a slightly wider range, to include possible imprecision, and can be 0.0.
 *
 * 0.5 is in the interval [0.6, 0.7] when there's a tolerance of 0.1, because (0.6 - 0.1) <= 0.5 <= (0.7 + 0.1)
 *
 * ```
 *  0.5 shouldBe between(0.1, 1.0, 0.0)     // Assertion passes
 *  0.5 shouldNotBe between(1.0, 2.0, 0.1)  // Assertion passes
 * ```
 *
 * @see [Float.shouldBeBetween]
 * @see [Float.shouldNotBeBetween]
 */
fun between(a: Float, b: Float, tolerance: Float): Matcher<Float> = object : Matcher<Float> {
  override fun test(value: Float): MatcherResult {
    val differenceToMinimum = value - a
    val differenceToMaximum = b - value

    if (differenceToMinimum < 0 && abs(differenceToMinimum) > tolerance) {
      return invoke(
         false,
         { "$value should be bigger than $a" },
         { "$value should not be bigger than $a" })
    }

    if (differenceToMaximum < 0 && abs(differenceToMaximum) > tolerance) {
      return invoke(
         false,
         { "$value should be smaller than $b" },
         { "$value should not be smaller than $b" })
    }

    return invoke(
       true,
       { "$value should be smaller than $b and bigger than $a" },
       { "$value should not be smaller than $b and should not be bigger than $a" })
  }
}
