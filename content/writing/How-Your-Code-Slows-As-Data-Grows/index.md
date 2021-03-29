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


Knowing how much time a task will take is a strong indicator of whether or not to proceed with it. Similarly, knowing the time an algorithm will take is a strong indicator of whether I should use it or not.


### Enter The Big O Notation
Firstly, the Big O notation is just a **notation**. Don't be confused by the parenthesis that reads like a function. Think of it as a label used to describe how fast an algorithm grows. The O stands for the **order of** the function.

![big-O-notation](./big-O-notation.png)

In the Big O Notation, the function f is just the **algorithm** we are analyzing. Just like a function takes some input, in the Big O Notation the input to the function is the **size of the input** to the **algorithm**.

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
Intuitively, f = O(g) means that **f does not grow faster than g**. And f=O(n) is said as *"f is big oh of n"* i.e. f grows linearly in n.

Saying "f=O(g)" is a loose analog of "f <= g". Similarly, there are definitions for >= and =. So we have, 

Big O: f=O(g) means f<=C*g(n) for n>N

Big Omega: f=Ω(g) means g=O(f)

Big Theta: f=Θ(g) means f=O(g) and f=Ω(g)


### Abstracting away the implementation details
When we implement an algorithm as a program and actually run it on a computer, it is very difficult to exactly determine the number of instructions or machine cycles that will be needed. Looking at the source code does not help. This is because there are too many many external factors like hardware, software and programming-language specifics that affect the real world time for a program to run. 

We can abstact away these implementation specifics to simplify how we reason about an algorithm's complexity. So we express the algorithm's running time in terms of the *basic computer steps*.

Say an algorithm has 5n<sup>2</sup>+10n+3 basic steps on an input of size n. So the running time can be written as f(n)=5n<sup>2</sup>+10n+3.

As n -> ∞ the highest order term will determine the rate of growth of the algorithm's run time. So the lower order terms and coefficients can be ignored. We can say, that f=O(n<sup>2</sup>).

>### Question
> **f(n) = O( f(n)<sup>2</sup>)**

>Decide whether it is always true, never true, or sometimes true for asymptotically nonnegative functions f and g. If it is always true or never true, explain why. If it is sometimes true, give one example for which it is true, and one for which it is false.
>### Answer
>Sometimes true. example: f(n)=n and counterexample: f(n) = 1/n.

# References
* [Big O Cheat Sheet](https://www.bigocheatsheet.com/)
* YouTube video from which I stole this post's title is [here](https://www.youtube.com/watch?v=duvZ-2UK0fc)






