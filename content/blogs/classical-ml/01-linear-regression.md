---
title: "Understanding Linear Regression"
slug: "linear-regression"
category: "classical-ml"
date: "2025-01-15"
excerpt: "A comprehensive guide to linear regression fundamentals and its assumptions"
order: 1
---

# Understanding Linear Regression

## Introduction

The first algorithm that every machine learning course teaches is linear regression. It's undoubtedly one of the most fundamental and widely used algorithms in statistics and machine learning.

This is primarily because of its simplicity and ease of interpretation. However, despite its prevalence, there is often a surprising oversight - understanding the assumptions that ensure the effectiveness of linear regression.

## The Mathematics Behind It

Linear regression models the relationship between a dependent variable and one or more independent variables by fitting a linear equation to observed data.

### The Linear Equation

The simplest form of linear regression is:

```
y = mx + b
```

Where:
- y is the dependent variable
- x is the independent variable
- m is the slope (coefficient)
- b is the y-intercept

### Cost Function

The cost function measures how well our model fits the data. For linear regression, we use Mean Squared Error (MSE):

```python
def mse(y_true, y_pred):
    return np.mean((y_true - y_pred) ** 2)
```

## Assumptions of Linear Regression

### Assumption #1: Linearity

The relationship between the independent and dependent variables must be linear. This means a change in x should result in a proportional change in y.

### Assumption #2: Normal Distribution of Errors

The residuals (errors) should follow a normal distribution. This is important for hypothesis testing and confidence intervals.

### Assumption #3: Homoscedasticity

The variance of residuals should be constant across all levels of the independent variables. In other words, the spread of residuals should be roughly the same throughout.

### Assumption #4: No Autocorrelation

The residuals should be independent of each other. This is particularly important in time series data where sequential observations might be correlated.

### Assumption #5: No Multicollinearity

When using multiple independent variables, they should not be highly correlated with each other. High multicollinearity can make it difficult to determine the individual effect of each predictor.

## Implementation in Python

Here's a simple implementation using scikit-learn:

```python
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

# Generate sample data
X = np.random.randn(100, 1)
y = 3 * X + 2 + np.random.randn(100, 1) * 0.5

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train model
model = LinearRegression()
model.fit(X_train, y_train)

# Predictions
predictions = model.predict(X_test)
print(f"Coefficient: {model.coef_[0][0]:.2f}")
print(f"Intercept: {model.intercept_[0]:.2f}")
```

## When to Use Linear Regression

Linear regression is ideal when:
- You need a simple, interpretable model
- The relationship between variables is approximately linear
- You want to understand the strength of relationships
- Prediction accuracy is less critical than interpretability

## Conclusion

Linear regression remains a powerful and fundamental tool in any data scientist's toolkit. Understanding its assumptions and limitations is crucial for applying it effectively.

In the next post, we'll explore regularization techniques like Ridge and Lasso regression that help handle multicollinearity and overfitting.
