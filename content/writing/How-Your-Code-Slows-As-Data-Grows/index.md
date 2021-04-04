---
title: How Your Code Slows As Data Grows
date: "2021-03-26T15:33:36Z"
description: "A framework to compare algorithms."
featuredImage: ./dummy.png
---

<style>
body {
text-align: justify}
</style>


Knowing how much time a task will take is a strong indicator of whether or not to proceed with it. Similarly, knowing the time an algorithm will take is a strong indicator of whether to use it or not.


### Enter The Big O Notation
Firstly, the Big O notation is just a **notation**. It is not a function. Don't be confused by the parenthesis that make it read like a function. The O stands for **"order of"**. Think of it as a label used to describe **how fast an algorithm grows**. 

![big-O-notation](./big-O-notation.png)

In the Big O Notation, the function f is just the **algorithm** we are analyzing. And the input n to the function f is the **size of the input** to the **algorithm**.

Now we have a framework to compare different algorithms as a function of the input size. 

When using the Big O Notation to analyze algorithms we are really just forming an idea of how complex the algorithm is. So this analysis of algorithms is called **complexity analysis**. Here complexity refers to any finite resource- time, memory, network input/output, etc. But if you think about it any finite resource ties back to time- which is the ultimate finite resource.

### More Formally,
Think of f(n) and g(n) as the running times of two algorithms on inputs of size n. 

Suppose f(n) and g(n) are two functions from positive integers to positive reals. We write
**f(n) = O(g(n))**
(or f(n) = O(g(n)) for n -> ∞ to be more precise) **if and only if** there exist constants N and
C such that,
**|f(n)| <= C |g(n)| for all n>N**.


### More Intuitively,
Intuitively, f = O(g) means that **f does not grow faster than g**. 

Saying "f=O(g)" is a loose analog of "f <= g". Similarly, there are definitions for >= and =. So we have, 

**Big O**: f=O(g) means f<=C*g(n) for n>N

**Big Omega**: f=Ω(g) means g=O(f)

**Big Theta**: f=Θ(g) means f=O(g) and f=Ω(g)


### Abstracting away the implementation details
When we implement an algorithm as a program and actually run it on a computer, it is very difficult to exactly determine the number of instructions or machine cycles that will be needed. Looking at the source code does not help. This is because there are too many many external factors like hardware, software and programming-language specifics that affect the real world time for a program to run. 

We can abstact away these implementation specifics to simplify how we reason about an algorithm's complexity. So we express the algorithm's running time in terms of the *basic computer steps*.

Say an algorithm has 5n<sup>2</sup>+10n+3 basic steps on an input of size n. So the running time can be expressed as a function of the input size i.e. f(n)=5n<sup>2</sup>+10n+3.

As n -> ∞ the highest order term will determine the rate of growth of the algorithm's run time. So the lower order terms and coefficients become negligible. We can say, that f=O(n<sup>2</sup>), said as *"f is big oh of n square"*.

>### Trick Question
> **f(n) = O( f(n)<sup>2</sup>)**

>Decide whether it is always true, never true, or sometimes true for asymptotically nonnegative functions f and g. If it is always true or never true, explain why. If it is sometimes true, give one example for which it is true, and one for which it is false.
>### Answer
>Sometimes true. example: f(n)=n and counterexample: f(n) = 1/n.

### Some Perspective
Assume we have a budget of one week and one operation requires 1 milli second. Now, one week has 604,800,000 milli seconds. That is aprroximately 604 Million milli seconds. Let's say we have a bunch of different tasks that require different algorithms. 

For instance, we might have a linear search task with O(n) time complexity and a sorting task with a worst-case complexity of O(n<sup>2</sup>). We still have only one week and the same processing power for any algorithmic task. The maximum input size that can be processed by any algorithm in a week is shown in the following table.  

|Algorithm|Time Complexity|Maximum Objects Best Processed  |
|--|--|--|
| Linear Search| O(n) | 604 Million |
| Sorting| O(nlogn) | 604 Million |
| Sorting worst-case| O(n<sup>2</sup>) | 25,000 |
| Set cover| O(2<sup>n</sup>) | 29 |

To elaborate, let's consider the set cover task. Don't worry about the details of the set cover problem now, just know that it has a time complexity of O(2<sup>n</sup>). In a week we have approximately 604 Million milli seconds of processing power. So we ask, *"what is the largest n for which 2<sup>n</sup> in within the 604 Million milli second mark?"*. The answer to that question is, n = log<sub>2</sub>(604,800,000) = 29. In a week we can only solve the set cover problem for an input size of n = 29. Such is the curse of time complexity.

As a final example, with a algorithmic time complexity of O(n<sup>2</sup>), we will be able to process n = $\sqrt{604,800,000}$ = 25,000. So in one week we can sort through a maximum of 25,000 items.

Isn't the one week requirement to process 25,000 items absurd these days? Yes, it is. Firstly, the processors today are way faster than the 1 operation per milli second processor in the example. Indeed, according to [Moore's Law](https://en.wikipedia.org/wiki/Moore%27s_law) we can expect the speed and capability of our processors to increase every couple of years, and they will become cheaper. Secondly, the algorithms are designed to be highly optimzed for specific tasks.

# References
* [Big O Cheat Sheet](https://www.bigocheatsheet.com/)
* YouTube video from which I stole this post's title is [here](https://www.youtube.com/watch?v=duvZ-2UK0fc)






