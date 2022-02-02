# Deep Learning and Deep Neural Networks

Markdown notes for github [here](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

Sadly math via latex is not implemented.

[This](https://stackoverflow.com/a/67711933/1008596) answer shows how to implement math as an image on github.  A comment says that `+` is an escape character in URL, so use `%2B` instead.

<img src="https://render.githubusercontent.com/render/math?math=x_{1,2} = \frac{-b \pm \sqrt{b^2-4ac}}{2b}">



URLS for latex

* [wikibooks](https://en.wikibooks.org/wiki/LaTeX/Mathematics)
* [here](https://gist.github.com/LKS90/252ac41bd4a173be35b0)
* [collab](https://colab.research.google.com/github/bebi103a/bebi103a.github.io/blob/master/lessons/00/intro_to_latex.ipynb)

## Activation Functions


Activation functions are simply mapping functions.  They map node outputs
to a space non linearly.  This is important for two reasons.

* If the DNN was all linear operations, all the layers could be collapased
into a single layer due to linearlity.  Adding a non linear output
prevents that.  The additional complexity of having multiple layers
enables the network to find additional features.

* The mapping function aspect enables a continous range of input to be
mapped to a narrower range.

### Sigmoid

Maps output between 0 and 1

The first choice historically.  


<img src="https://render.githubusercontent.com/render/math?math=f(x) = \frac{1}{ 1 %2B e^-x}">



Drawbacks

* complex to compute
* output is not centered around 0

### TanH

Maps output between -1 and 1

Similar to Sigmoid but zero centered.

<img src="https://render.githubusercontent.com/render/math?math=f(x) = \frac{2}{ 1 %2B e^-2x} - 1">



### ReLU

Maps output between 0 and inf

This a popular choice since its computationally easy to implement.

f(x) = 0 for x < 0  and 1 for x >= 0

<img src="https://render.githubusercontent.com/render/math?math=f(x) = \begin{cases}0  \:\: \for x < 0\\x \:\: \for x>= 0\end{cases}">




![dnn](imgs/dnn_activation_functions.png)


## Loss Function


The loss function chosen is Mean Squared Error.  It is used
during back propagation.

<img src="https://render.githubusercontent.com/render/math?math=MSE =  \frac{1}{n} \sum_{i=1}^n (y_i - \bar{y_i})^2">
