
import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const ML_PART2_TOPICS: Topic[] = [
  // 4. Supervised Learning
  {
    id: 'ml-supervised-linear',
    title: 'Linear Regression',
    parent: '4. Supervised Learning',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Linear Regression</strong> is the foundational algorithm for regression tasks. It models the relationship between a dependent variable (y) and one or more independent variables (X) by fitting a linear equation to observed data.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">The Mathematical Model</h3>
        <p className="mb-4">It aims to find the line of best fit that minimizes the sum of squared errors (residuals) between predicted and actual values.</p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`Equation: y = mx + c

Where:
  y : Target Variable (Prediction)
  x : Input Feature
  m : Slope (Weight/Coefficient) - Rate of change
  c : Intercept (Bias) - Value of y when x is 0

Visual Representation:
      |      /
  (y) |    /   <-- Regression Line
      |  / .   <-- Data Point (Error is distance to line)
      |/_______
          (x)`}
        </pre>
        <CodeBlock language="python" code={`from sklearn.linear_model import LinearRegression
import numpy as np

# Data: Years of Experience (X) vs Salary (y)
X = np.array([[1], [2], [3], [4], [5]]) 
y = np.array([30000, 40000, 50000, 60000, 70000]) 

# 1. Initialize Model
model = LinearRegression()

# 2. Train (Fit) to learn 'm' and 'c'
model.fit(X, y)

# 3. Predict for 6 years of experience
years = 6
prediction = model.predict([[years]])
print(f"Predicted Salary for {years} years: \${prediction[0]}")

print(f"Slope (m): {model.coef_[0]}")
print(f"Intercept (c): {model.intercept_}")`} />
      </>
    )
  },
  {
    id: 'ml-supervised-logistic',
    title: 'Logistic Regression',
    parent: '4. Supervised Learning',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Logistic Regression</strong> is used for <strong>Classification</strong> problems (e.g., Spam vs Not Spam). Unlike Linear Regression which outputs continuous values, Logistic Regression applies a transformation to output a probability between 0 and 1.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">The Sigmoid Function</h3>
        <p className="mb-4">The core component is the Sigmoid (or Logistic) function, which maps any real value into the range [0, 1].</p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`Formula: S(z) = 1 / (1 + e^-z)

        1 |       _______  (Class 1)
Prob      |      /
(0 to 1) .5|     |  <-- Decision Boundary
          |    /
        0 |_______|_______ (Class 0)
                 z

If S(z) >= 0.5 -> Predict Class 1
If S(z) < 0.5  -> Predict Class 0`}
        </pre>
        <CodeBlock language="python" code={`from sklearn.linear_model import LogisticRegression

# Data: [Age] -> [Bought Insurance? (0=No, 1=Yes)]
X = [[22], [25], [47], [52], [46], [56], [55], [60], [62], [61]]
y = [0, 0, 1, 0, 1, 1, 1, 1, 1, 1]

model = LogisticRegression()
model.fit(X, y)

# Predict probability
age = 23
prob = model.predict_proba([[age]])
print(f"Prob. of buying at age {age}: {prob[0][1]:.2f}") 
# Output might be low, e.g., 0.02`} />
      </>
    )
  },
  {
    id: 'ml-supervised-trees',
    title: 'Decision Trees',
    parent: '4. Supervised Learning',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Decision Trees</strong> classify data by asking a sequence of questions. They split the dataset into smaller subsets based on feature values until they reach a decision. They are easy to interpret but prone to overfitting.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Anatomy of a Tree</h3>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`Goal: Should I play Tennis?

        [ Outlook == Sunny? ]  <-- Root Node
           /          \
        Yes            No
        /                \
  [ Humidity > 70? ]    [ Wind == Strong? ] <-- Internal Nodes
     /      \             /       \
   No       Yes          No        Yes
  /          \          /           \
[Play]    [Don't]    [Play]       [Don't] <-- Leaf Nodes (Final Decision)`}
        </pre>
        <CodeBlock language="python" code={`from sklearn.tree import DecisionTreeClassifier
from sklearn import datasets

# Load Iris dataset
iris = datasets.load_iris()
X, y = iris.data, iris.target

# max_depth=3 restricts tree growth to prevent overfitting
clf = DecisionTreeClassifier(max_depth=3)
clf.fit(X, y)

# Predict class for a new flower
new_flower = [[5.1, 3.5, 1.4, 0.2]]
print(clf.predict(new_flower))`} />
      </>
    )
  },

  // 5. Unsupervised Learning
  {
    id: 'ml-unsupervised-kmeans',
    title: 'K-Means Clustering',
    parent: '5. Unsupervised Learning',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>K-Means</strong> is an iterative algorithm that partitions a dataset into <em>K</em> distinct, non-overlapping subgroups (clusters). Each data point belongs to the cluster with the nearest mean (centroid).
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">The Algorithm Step-by-Step</h3>
        <ol className="list-decimal pl-5 space-y-2 mb-6 text-slate-700">
            <li><strong>Initialization:</strong> Pick <em>K</em> random points as initial centroids.</li>
            <li><strong>Assignment:</strong> Assign every data point to the nearest centroid (using Euclidean distance).</li>
            <li><strong>Update:</strong> Recalculate the centroid of each cluster (mean of all points in the cluster).</li>
            <li><strong>Repeat:</strong> Repeat steps 2 and 3 until centroids stop moving (convergence).</li>
        </ol>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`Iteration 1:
   .  X  .       .  Y  .
 (Random Centroids X and Y)

Iteration 2 (Points reassigned):
   ( . . ) -> X    ( . . . ) -> Y

Iteration 3 (Centroids move to center):
      X              Y
   ( . . )        ( . . . )`}
        </pre>
        <CodeBlock language="python" code={`from sklearn.cluster import KMeans
import numpy as np

# Sample Data: [Annual Income, Spending Score]
X = np.array([
    [15, 39], [15, 81], [16, 6], [16, 77], [17, 40],
    [80, 20], [82, 15], [85, 25]
])

# We choose K=2
kmeans = KMeans(n_clusters=2, random_state=0)
kmeans.fit(X)

print("Cluster Centers:\\n", kmeans.cluster_centers_)
print("Labels:", kmeans.labels_)`} />
      </>
    )
  },

  // 6. Model Evaluation
  {
    id: 'ml-evaluation-metrics',
    title: 'Classification Metrics',
    parent: '6. Model Evaluation',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Accuracy is often not enough, especially with imbalanced datasets (e.g., detecting a rare disease). We use the <strong>Confusion Matrix</strong> to calculate more granular metrics.
        </p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">The Confusion Matrix</h3>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`                 PREDICTED
               Positive   Negative
             +----------+----------+
A   Positive |    TP    |    FN    |
C            | (Hit)    | (Miss)   |
T            +----------+----------+
U   Negative |    FP    |    TN    |
A            | (Alarm)  | (Quiet)  |
L            +----------+----------+

TP: True Positive  (Correctly identified Yes)
TN: True Negative  (Correctly identified No)
FP: False Positive (Type I Error - False Alarm)
FN: False Negative (Type II Error - Missed Detection)`}
        </pre>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Key Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
                <h4 className="font-bold text-blue-900 mb-2">Precision</h4>
                <p className="text-sm text-blue-800 mb-2">
                    "Of all the items we PREDICTED as positive, how many were actually positive?"
                </p>
                <code className="bg-white px-2 py-1 rounded text-xs font-bold">TP / (TP + FP)</code>
                <p className="text-xs mt-2">Crucial when False Positives are costly (e.g., Email Spam Filter).</p>
            </div>
            <div className="p-4 bg-green-50 border border-green-100 rounded-xl">
                <h4 className="font-bold text-green-900 mb-2">Recall (Sensitivity)</h4>
                <p className="text-sm text-green-800 mb-2">
                    "Of all the ACTUAL positive items, how many did we find?"
                </p>
                <code className="bg-white px-2 py-1 rounded text-xs font-bold">TP / (TP + FN)</code>
                <p className="text-xs mt-2">Crucial when False Negatives are dangerous (e.g., Cancer Diagnosis).</p>
            </div>
        </div>
        
        <div className="p-4 bg-purple-50 border border-purple-100 rounded-xl mb-6">
            <h4 className="font-bold text-purple-900 mb-2">F1-Score</h4>
            <p className="text-sm text-purple-800 mb-2">
                The harmonic mean of Precision and Recall. It provides a single score that balances both concerns.
            </p>
            <code className="bg-white px-2 py-1 rounded text-xs font-bold">2 * (Precision * Recall) / (Precision + Recall)</code>
        </div>

        <CodeBlock language="python" code={`from sklearn.metrics import confusion_matrix, classification_report

y_true = [0, 1, 0, 1, 0, 0, 1, 1]
y_pred = [0, 1, 0, 0, 0, 1, 1, 1]

# Generate Confusion Matrix
cm = confusion_matrix(y_true, y_pred)
print("Confusion Matrix:\n", cm)

# Generate Full Report
print("\nClassification Report:\n", classification_report(y_true, y_pred))`} />
      </>
    )
  },
  {
    id: 'ml-evaluation-regression',
    title: 'Regression Metrics',
    parent: '6. Model Evaluation',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          For regression problems (predicting numbers), we measure the distance between the predicted value and the actual value.
        </p>
        <ul className="list-disc pl-5 space-y-4 mb-6 text-slate-700">
            <li>
                <strong>MAE (Mean Absolute Error):</strong> The average of the absolute differences. Easy to interpret.
                <br/><code className="text-xs bg-slate-100 p-1">MAE = (1/n) * Σ|y_true - y_pred|</code>
            </li>
            <li>
                <strong>MSE (Mean Squared Error):</strong> The average of squared differences. Penalizes large errors heavily.
                <br/><code className="text-xs bg-slate-100 p-1">MSE = (1/n) * Σ(y_true - y_pred)²</code>
            </li>
            <li>
                <strong>RMSE (Root Mean Squared Error):</strong> The square root of MSE. Brings the unit back to the original target's unit.
            </li>
        </ul>
        <CodeBlock language="python" code={`from sklearn.metrics import mean_absolute_error, mean_squared_error
import numpy as np

y_true = [3.0, -0.5, 2.0, 7.0]
y_pred = [2.5, 0.0, 2.0, 8.0]

mae = mean_absolute_error(y_true, y_pred)
mse = mean_squared_error(y_true, y_pred)
rmse = np.sqrt(mse)

print(f"MAE: {mae}, MSE: {mse}, RMSE: {rmse}")`} />
      </>
    )
  },
  {
    id: 'ml-evaluation-bias-variance',
    title: 'Bias-Variance & Overfitting',
    parent: '6. Model Evaluation',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          The central challenge in ML is generalizing to new data. This is governed by the <strong>Bias-Variance Tradeoff</strong>.
        </p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">The Tradeoff Visualized</h3>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`Error Rate
  ^
  |           Total Error
  |          /
  |         /    /-- Test Error (Variance)
  |        /   /
  |       /  /
  |      / /
  |     //
  |    //   \\
  |   //      \\-- Training Error (Bias)
  |  //
  L__________________________>
     Model Complexity

Left (Simple Model): High Bias (Underfitting)
Right (Complex Model): High Variance (Overfitting)
Middle: Optimal Balance`}
        </pre>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Fixing Overfitting with Regularization</h3>
        <p className="mb-4">Regularization adds a penalty to the loss function to discourage complex models (large coefficients).</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>L1 (Lasso):</strong> Adds absolute value of magnitude of coefficient as penalty term. Can shrink weights to 0 (Feature Selection).</li>
            <li><strong>L2 (Ridge):</strong> Adds squared magnitude of coefficient as penalty term. Shrinks weights close to 0 but not exactly 0.</li>
        </ul>

        <CodeBlock language="python" code={`from sklearn.linear_model import Ridge, Lasso

# Ridge Regression (L2 Regularization)
# alpha is the regularization strength (lambda)
ridge_model = Ridge(alpha=1.0)
ridge_model.fit(X_train, y_train)

# Lasso Regression (L1 Regularization)
lasso_model = Lasso(alpha=0.1)
lasso_model.fit(X_train, y_train)

print("Ridge Score:", ridge_model.score(X_test, y_test))
print("Lasso Score:", lasso_model.score(X_test, y_test))`} />
      </>
    )
  }
];
