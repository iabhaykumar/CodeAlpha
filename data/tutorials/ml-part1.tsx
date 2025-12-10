
import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const ML_PART1_TOPICS: Topic[] = [
  // 1. Introduction
  {
    id: 'ml-intro',
    title: 'What is Machine Learning?',
    parent: '1. Introduction',
    content: (
      <>
        <p className="text-lg text-slate-700 mb-4">
          Machine Learning (ML) is a paradigm shift in computing where we move from <strong>Rule-Based Programming</strong> to <strong>Data-Driven Learning</strong>. Instead of explicitly coding the rules ("if x > 5 then y"), we provide the computer with data and allow it to discover the rules itself.
        </p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Paradigm Shift: The Black Box</h3>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`TRADITIONAL PROGRAMMING:
  Input Data  +  Rules (Code)  ==>  Output (Answers)
  (e.g., "If email contains 'Free', mark as spam")

MACHINE LEARNING:
  Input Data  +  Output (Answers)  ==>  Rules (Model)
  (e.g., "Here are 1000 spam emails and 1000 good emails. Find the pattern.")`}
        </pre>
        <p className="mb-4">
          This capability allows us to solve problems that are too complex for manual rule-creation, such as Face Recognition, Language Translation, and Self-Driving Cars.
        </p>
      </>
    )
  },
  {
    id: 'ml-types',
    title: 'Types of Machine Learning',
    parent: '1. Introduction',
    content: (
      <>
        <p className="mb-4">Machine Learning is categorized by the nature of the signal or feedback available to the learning system.</p>
        
        <div className="space-y-8">
          <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl">
            <h4 className="text-lg font-bold text-blue-900 mb-3">1. Supervised Learning (Task Driven)</h4>
            <p className="text-sm text-blue-800 mb-4">
              The algorithm learns from <strong>Labeled Data</strong>. It tries to learn a function that maps an input to an output based on example input-output pairs.
            </p>
            <ul className="list-disc pl-5 text-sm text-blue-800 space-y-2">
              <li><strong>Regression:</strong> Predicting a continuous quantity.
                <br/><em>Example:</em> Predicting House Price (Output: $450,000).
              </li>
              <li><strong>Classification:</strong> Predicting a discrete category label.
                <br/><em>Example:</em> Is this email Spam? (Output: Yes/No). Is this image a Cat or Dog?
              </li>
            </ul>
          </div>

          <div className="p-6 bg-green-50 border border-green-100 rounded-xl">
            <h4 className="text-lg font-bold text-green-900 mb-3">2. Unsupervised Learning (Data Driven)</h4>
            <p className="text-sm text-green-800 mb-4">
              The algorithm learns from <strong>Unlabeled Data</strong>. It looks for previously undetected patterns in a data set with no pre-existing labels and with a minimum of human supervision.
            </p>
            <ul className="list-disc pl-5 text-sm text-green-800 space-y-2">
              <li><strong>Clustering:</strong> Grouping inherent structures in data.
                <br/><em>Example:</em> Customer Segmentation (Grouping customers by purchasing behavior).
              </li>
              <li><strong>Dimensionality Reduction:</strong> Reducing the number of variables.
                <br/><em>Example:</em> Compressing image data while keeping structure (PCA).
              </li>
            </ul>
          </div>

          <div className="p-6 bg-purple-50 border border-purple-100 rounded-xl">
            <h4 className="text-lg font-bold text-purple-900 mb-3">3. Reinforcement Learning (Reaction Driven)</h4>
            <p className="text-sm text-purple-800 mb-4">
              An agent learns to behave in an environment, by performing actions and seeing the results of actions. It learns via a system of <strong>Rewards</strong> and <strong>Penalties</strong>.
            </p>
            <pre className="bg-white/60 p-3 rounded text-xs font-mono text-purple-900">
{`Loop:
1. Agent observes State (S).
2. Agent takes Action (A).
3. Environment gives Reward (R) and new State (S').
4. Agent updates Policy to maximize total future Reward.`}
            </pre>
          </div>
        </div>
      </>
    )
  },

  // 2. Core Concepts
  {
    id: 'ml-concepts-data-structure',
    title: 'Data Representation',
    parent: '2. Core Concepts',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Before a machine can learn, data must be converted into a numerical format. We use linear algebra concepts to represent this data.
        </p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Features (X) and Labels (y)</h3>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`Structure of a Tabular Dataset:

      Features (Independent Variables)      Label (Target)
      [ X1,    X2,    X3 ... Xn ]           [ y ]
      -------------------------------------------
Row 1 | 25,  40000,  Bachelor's |  ----->   | No  | (Did not buy)
Row 2 | 45,  85000,  Master's   |  ----->   | Yes | (Bought)
Row 3 | 32,  50000,  PhD        |  ----->   | Yes | (Bought)

X: The Matrix of inputs (Rows = Samples, Cols = Features)
y: The Vector of outputs we want to predict.`}
        </pre>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Data Shapes (Tensors)</h3>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
            <li><strong>Scalar (0D Tensor):</strong> A single number. (e.g., `42`)</li>
            <li><strong>Vector (1D Tensor):</strong> An array of numbers. A single row of data. (e.g., `[25, 40000]`)</li>
            <li><strong>Matrix (2D Tensor):</strong> A table of numbers. The entire dataset. Shape: `(Samples, Features)`.</li>
            <li><strong>3D Tensor:</strong> Often used for Time-Series or Images. Example: An RGB image is `(Height, Width, 3)`.</li>
        </ul>
      </>
    )
  },
  {
    id: 'ml-concepts-learning-process',
    title: 'The Learning Process',
    parent: '2. Core Concepts',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          How does the machine actually "learn"? It's an iterative optimization process involving three key components: The Model, The Loss Function, and The Optimizer.
        </p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">The Training Loop</h3>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`1. Initialization:
   Start with random weights (parameters) for the model.

2. Forward Pass (Prediction):
   Pass data (X) through the model to get predictions (ŷ).
   ŷ = Model(X)

3. Loss Calculation (Error):
   Compare predictions (ŷ) with actual answers (y).
   Loss = Distance(ŷ, y)  (e.g., (ŷ - y)^2 )

4. Backward Pass (Optimization):
   Adjust the weights slightly to reduce the Loss.
   Weights_new = Weights_old - (Learning_Rate * Gradient)

5. Repeat:
   Do this thousands of times until Loss is minimized.`}
        </pre>
        <p className="mb-4 text-slate-700">
            <strong>Goal:</strong> Find the set of weights that minimizes the Loss Function across all training data.
        </p>
      </>
    )
  },
  {
    id: 'ml-concepts-fit',
    title: 'Overfitting vs Underfitting',
    parent: '2. Core Concepts',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          The ultimate goal of ML is <strong>Generalization</strong>: performing well on new, unseen data. Two common pitfalls prevent this.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-xl">
                <h4 className="font-bold text-yellow-900 mb-2">1. Underfitting</h4>
                <p className="text-xs text-yellow-800 font-mono mb-2">High Bias</p>
                <p className="text-sm text-yellow-800">
                    The model is too simple to capture the underlying pattern of the data. It performs poorly on both training and testing data.
                    <br/><br/>
                    <em>Analogy:</em> Trying to fit a straight line through a curve.
                </p>
            </div>
            <div className="p-4 bg-green-50 border border-green-100 rounded-xl">
                <h4 className="font-bold text-green-900 mb-2">2. Good Fit</h4>
                <p className="text-xs text-green-800 font-mono mb-2">Optimal</p>
                <p className="text-sm text-green-800">
                    The model captures the underlying pattern but ignores the random noise. It generalizes well to new data.
                </p>
            </div>
            <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
                <h4 className="font-bold text-red-900 mb-2">3. Overfitting</h4>
                <p className="text-xs text-red-800 font-mono mb-2">High Variance</p>
                <p className="text-sm text-red-800">
                    The model memorizes the training data, including noise and outliers. It has 100% accuracy on training data but fails on test data.
                    <br/><br/>
                    <em>Analogy:</em> Memorizing the textbook but failing the exam questions.
                </p>
            </div>
        </div>
      </>
    )
  },
  {
    id: 'ml-concepts-splitting',
    title: 'Data Splitting',
    parent: '2. Core Concepts',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          To honestly evaluate a model, we cannot test it on the same data used to train it. That would be cheating (like giving a student the exam answers to study). We split data into three sets.
        </p>
        
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`Total Dataset (100%)
|
+--- Training Set (70-80%)
|    Used to learn the parameters (weights).
|    The model sees this data repeatedly.
|
+--- Validation Set (10-15%)
|    Used to tune hyperparameters (settings).
|    Acts as a "practice exam" during training.
|    Helps prevent overfitting.
|
+--- Test Set (10-15%)
|    HELD OUT completely until the very end.
|    Used only ONCE to evaluate final performance.
|    The "Final Exam".`}
        </pre>
        <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
            <h4 className="font-bold text-red-900 mb-1">Data Leakage</h4>
            <p className="text-red-800 text-sm">
                Never let information from the Test Set leak into the Training Set. For example, if you scale your data, calculate the Mean/Std ONLY on the training set, then apply those same values to the test set. Scaling the whole dataset at once causes leakage.
            </p>
        </div>
      </>
    )
  },

  // 3. Python Libraries for ML (Preserved)
  {
    id: 'ml-numpy',
    title: 'NumPy for Numerical Data',
    parent: '3. Python Libraries',
    content: (
      <>
        <p className="mb-4"><strong>NumPy</strong> (Numerical Python) is the foundation. It introduces `ndarrays` (n-dimensional arrays) which are like super-charged Python lists.</p>
        <CodeBlock language="python" code={`import numpy as np

# 1. Creating Arrays
arr = np.array([1, 2, 3, 4, 5])
matrix = np.array([[1, 2], [3, 4]])

# 2. Vectorization (Math on entire array)
# Normal list: [x * 2 for x in list]
# NumPy:
print(arr * 2)        # [2, 4, 6, 8, 10]
print(arr + 10)       # [11, 12, 13, 14, 15]

# 3. Boolean Indexing (Filtering)
print(arr > 3)        # [False, False, False, True, True]
print(arr[arr > 3])   # [4, 5] (Selects elements > 3)

# 4. Shape & Statistics
print(matrix.shape)   # (2, 2)
print(np.mean(arr))   # 3.0`} />
      </>
    )
  },
  {
    id: 'ml-pandas',
    title: 'Pandas for Data Manipulation',
    parent: '3. Python Libraries',
    content: (
      <>
        <p className="mb-4"><strong>Pandas</strong> builds on NumPy to provide <strong>DataFrames</strong>. Think of a DataFrame as a programmable Excel spreadsheet.</p>
        <CodeBlock language="python" code={`import pandas as pd

data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'David'],
    'Age': [25, 30, 35, 40],
    'Salary': [50000, 60000, 70000, 80000]
}
df = pd.DataFrame(data)

print(df.head(2)) # First 2 rows
print(df['Salary']) # Select one column

# Filtering: "Select employees earning more than 55k"
rich_employees = df[df['Salary'] > 55000]
print(rich_employees)`} />
      </>
    )
  },
  {
    id: 'ml-matplotlib',
    title: 'Matplotlib for Visualization',
    parent: '3. Python Libraries',
    content: (
      <>
        <p className="mb-4"><strong>Matplotlib</strong> is the plotting library. Visualizing data is critical to understand patterns before modeling.</p>
        <CodeBlock language="python" code={`import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.figure(figsize=(8, 4))
plt.plot(x, y, label='Sine Wave', color='blue', linestyle='--')
plt.title('Simple Plot Example')
plt.xlabel('Time')
plt.ylabel('Amplitude')
plt.legend()
plt.grid(True)
plt.show()`} />
      </>
    )
  },
];
