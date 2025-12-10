
import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const ML_PART3_TOPICS: Topic[] = [
  // 7. Advanced Supervised Learning
  {
    id: 'ml-rf',
    title: 'Random Forest',
    parent: '7. Advanced Supervised Learning',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Random Forest</strong> is an "Ensemble" technique that fixes the main problem of Decision Trees: high variance (overfitting). It works on the principle of <strong>Bagging (Bootstrap Aggregating)</strong>.
        </p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">How it Works</h3>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`1. Bootstrapping:
   Create N random subsets of the training data (with replacement).

2. Parallel Training:
   Train a Decision Tree on each subset.
   (Each tree is also limited to a random subset of features at each split)

3. Aggregation:
   [Tree 1] -> "Yes"
   [Tree 2] -> "Yes"  --> Majority Vote --> FINAL: "Yes"
   [Tree 3] -> "No"`}
        </pre>
        <p className="mb-4">By averaging the result of many "weak" and diverse trees, the Random Forest creates a "strong" and robust model.</p>

        <CodeBlock language="python" code={`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.datasets import make_classification

# Generate synthetic data
X, y = make_classification(n_samples=1000, n_features=20, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Initialize
# n_estimators: Number of trees
# max_depth: Max depth of each tree (control complexity)
# n_jobs=-1: Use all CPU cores
rf = RandomForestClassifier(n_estimators=100, max_depth=10, n_jobs=-1)

rf.fit(X_train, y_train)
print(f"Accuracy: {rf.score(X_test, y_test):.4f}")`} />
      </>
    )
  },
  {
    id: 'ml-gbm-xgboost',
    title: 'Gradient Boosting & XGBoost',
    parent: '7. Advanced Supervised Learning',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          While Random Forest builds trees in parallel, <strong>Gradient Boosting</strong> builds them <strong>sequentially</strong>. Each new tree attempts to correct the errors (residuals) made by the previous trees.
        </p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`Step 1: Tree 1 makes predictions.
Step 2: Calculate Errors (Actual - Predicted).
Step 3: Tree 2 is trained to predict these ERRORS, not the target.
Step 4: New Prediction = Tree 1 + (Learning Rate * Tree 2)
... Repeat ...`}
        </pre>
        <p className="mb-4">
          <strong>XGBoost (Extreme Gradient Boosting)</strong> is an optimized implementation of this concept. It is famous for winning Kaggle competitions due to its speed and regularization (L1/L2) which prevents overfitting.
        </p>
        <CodeBlock language="python" code={`import xgboost as xgb

# Convert to DMatrix (optimized data structure for XGBoost)
dtrain = xgb.DMatrix(X_train, label=y_train)
dtest = xgb.DMatrix(X_test, label=y_test)

# Parameters
params = {
    'max_depth': 3,
    'eta': 0.1,  # Learning Rate
    'objective': 'binary:logistic',
    'eval_metric': 'logloss'
}

# Train
model = xgb.train(params, dtrain, num_boost_round=100)

# Predict
preds = model.predict(dtest)
# Convert probabilities to 0 or 1
predictions = [round(value) for value in preds]`} />
      </>
    )
  },
  {
    id: 'ml-svm',
    title: 'Support Vector Machines (SVM)',
    parent: '7. Advanced Supervised Learning',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>SVM</strong> is a powerful classifier that finds the best boundary (hyperplane) to separate classes. It focuses on the data points closest to the boundary, known as <strong>Support Vectors</strong>.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Visualizing the Margin</h3>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`       Class A (O)        Class B (X)

          O      |
        O        | Margin    X
      O  <------>|          X
    [Support]--> |        X  <-- [Support Vector]
    [Vector]     |      X
        O        |    X
                 |
            Hyperplane`}
        </pre>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">The Kernel Trick</h3>
        <p className="mb-4">
          What if data isn't linearly separable (e.g., concentric circles)? SVM projects data into a higher dimension (3D, 4D, etc.) where a linear separator <em>does</em> exist. This math hack is called the Kernel Trick.
        </p>
        <CodeBlock language="python" code={`from sklearn import svm

# Kernels: 'linear', 'poly', 'rbf' (Radial Basis Function - default)
# C: Regularization parameter. Small C = wide margin (allows misclassification). Large C = hard margin.
clf = svm.SVC(kernel='rbf', C=1.0) 

clf.fit(X_train, y_train)
print("SVM Accuracy:", clf.score(X_test, y_test))`} />
      </>
    )
  },

  // 8. Advanced Unsupervised Learning
  {
    id: 'ml-hierarchical',
    title: 'Hierarchical Clustering',
    parent: '8. Advanced Unsupervised Learning',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Unlike K-Means where you pre-define K, <strong>Hierarchical Clustering</strong> builds a tree of clusters. The result is visualized as a <strong>Dendrogram</strong>.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Agglomerative Approach (Bottom-Up)</h3>
        <p className="mb-4">1. Treat each point as a single cluster.<br/>2. Merge the two closest clusters.<br/>3. Repeat until only one cluster remains.</p>
        
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`Dendrogram Visualization:

Height (Distance)
  |
  |        ____|____
  |       |         |
  |     __|__     __|__
  |    |     |   |     |
  |    A     B   C     D

  Cut the tree horizontally to get clusters.
  Cut at Height 2 -> Clusters: {A, B}, {C, D} (2 Clusters)`}
        </pre>
        <CodeBlock language="python" code={`from scipy.cluster.hierarchy import dendrogram, linkage
from matplotlib import pyplot as plt

# 'ward' minimizes the variance of the clusters being merged
linked = linkage(X, 'ward')

# Plot
plt.figure(figsize=(10, 5))
dendrogram(linked)
plt.title('Hierarchical Clustering Dendrogram')
plt.show()`} />
      </>
    )
  },
  {
    id: 'ml-dbscan',
    title: 'DBSCAN',
    parent: '8. Advanced Unsupervised Learning',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>DBSCAN</strong> (Density-Based Spatial Clustering) groups points that are close to each other (high density) and marks points in low-density regions as <strong>Noise/Outliers</strong>.
        </p>
        <p className="mb-4">It solves K-Means' flaw: it can find clusters of arbitrary shapes (like a crescent moon or a ring inside a ring), whereas K-Means assumes spherical clusters.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Epsilon (eps):</strong> The radius of the neighborhood.</li>
            <li><strong>MinPts:</strong> Minimum number of points required to form a dense region.</li>
        </ul>
        <CodeBlock language="python" code={`from sklearn.cluster import DBSCAN

# No need to specify K!
# eps=0.5, min_samples=5
db = DBSCAN(eps=0.5, min_samples=5)
db.fit(X)

labels = db.labels_
# Labels: 0, 1, 2... for clusters.
# -1 represents Noise (Outliers).`} />
      </>
    )
  },
  {
    id: 'ml-pca',
    title: 'PCA (Dimensionality Reduction)',
    parent: '8. Advanced Unsupervised Learning',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Principal Component Analysis (PCA)</strong> reduces the number of dimensions (features) in a dataset while retaining as much information (variance) as possible.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">The Logic</h3>
        <p className="mb-4">It finds new axes (Principal Components) that maximize variance. The first PC captures the most variation, the second captures the second most (orthogonal to the first), and so on.</p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`Original 2D Data:
    .
  .   (Spread diagonally)
.

PCA: Rotates axes to align with the spread.
PC1 -------------------> (Captures 95% info)
PC2 (up) (Captures 5% info - can be dropped)

Result: 2D -> 1D Compression.`}
        </pre>
        <CodeBlock language="python" code={`from sklearn.decomposition import PCA

# Reduce from 20 features to 2 principal components
pca = PCA(n_components=2)
X_reduced = pca.fit_transform(X)

print(f"Explained Variance Ratio: {pca.explained_variance_ratio_}")
# Example Output: [0.85, 0.10] -> First 2 components hold 95% of data's info`} />
      </>
    )
  },

  // 9. Feature Engineering
  {
    id: 'ml-fe-missing',
    title: 'Handling Missing Data',
    parent: '9. Feature Engineering',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Real-world data often has gaps. Models cannot handle `NaN` values. We need strategies to fill them.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Imputation Strategies</h3>
        <ul className="list-disc pl-5 space-y-3 mb-6">
            <li><strong>Mean/Median:</strong> Good for continuous data. Use Median if there are outliers.</li>
            <li><strong>Mode (Frequent):</strong> Used for categorical data.</li>
            <li><strong>KNN Imputation:</strong> Uses the K-Nearest Neighbors algorithm to find similar rows and average their values to fill the missing one. More accurate but computationally expensive.</li>
        </ul>
        <CodeBlock language="python" code={`from sklearn.impute import SimpleImputer, KNNImputer
import numpy as np

# Simple Imputation (Mean)
imputer = SimpleImputer(strategy='mean')
X_imputed = imputer.fit_transform(X_with_nans)

# KNN Imputation (Multivariate)
knn_imp = KNNImputer(n_neighbors=3)
X_knn = knn_imp.fit_transform(X_with_nans)`} />
      </>
    )
  },
  {
    id: 'ml-fe-encoding',
    title: 'Categorical Encoding',
    parent: '9. Feature Engineering',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Converting text labels into numbers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-slate-900 mb-2">Label Encoding</h4>
                <p className="text-sm">Assigns a number (0, 1, 2) to each category.</p>
                <p className="text-xs text-red-600 mt-2">Problem: Model might think 2 > 1 (Ordinal relationship) when none exists.</p>
                <pre className="text-xs mt-2">Red -> 0, Blue -> 1</pre>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-slate-900 mb-2">One-Hot Encoding</h4>
                <p className="text-sm">Creates a binary column for each category.</p>
                <p className="text-xs text-green-600 mt-2">Solution: No ordinal assumption. Good for nominal data.</p>
                <pre className="text-xs mt-2">Is_Red: 1, Is_Blue: 0</pre>
            </div>
        </div>
        <CodeBlock language="python" code={`import pandas as pd

# One-Hot Encoding with Pandas
df = pd.DataFrame({'Color': ['Red', 'Blue', 'Green']})
encoded_df = pd.get_dummies(df, columns=['Color'], drop_first=True)
# drop_first=True prevents multicollinearity (Dummy Variable Trap)`} />
      </>
    )
  },
  {
    id: 'ml-fe-scaling',
    title: 'Feature Scaling',
    parent: '9. Feature Engineering',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Scaling ensures all features contribute equally. Algorithms based on distance (KNN, K-Means, SVM) or gradients (Neural Networks) <strong>require</strong> scaling. Tree-based models (Random Forest) generally do not.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Standardization vs Normalization</h3>
        <ul className="list-disc pl-5 space-y-3 mb-6">
            <li><strong>StandardScaler (Z-score):</strong> Centers data around 0 with a standard deviation of 1. Handles outliers better.
                <br/><code className="text-xs bg-slate-100 p-1">z = (x - mean) / std</code>
            </li>
            <li><strong>MinMaxScaler:</strong> Scales data to a fixed range [0, 1]. Preserves the shape of the original distribution but is sensitive to outliers.
                <br/><code className="text-xs bg-slate-100 p-1">x_norm = (x - min) / (max - min)</code>
            </li>
        </ul>
        <CodeBlock language="python" code={`from sklearn.preprocessing import StandardScaler, MinMaxScaler

# Standardization
scaler = StandardScaler()
X_std = scaler.fit_transform(X)

# Normalization
min_max = MinMaxScaler()
X_norm = min_max.fit_transform(X)`} />
      </>
    )
  },

  // 10. Data Preprocessing
  {
    id: 'ml-data-cleaning',
    title: 'Data Cleaning',
    parent: '10. Data Preprocessing',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          "Garbage in, garbage out." Data cleaning involves removing duplicates, fixing structural errors, and validating data types.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Removing Duplicates:</strong> Essential to prevent bias in the training set.</li>
            <li><strong>Handling Outliers:</strong> Use statistical methods like Z-Score or IQR to detect and cap/remove extreme values.</li>
            <li><strong>Data Type Conversion:</strong> Ensuring numerical columns are not stored as strings.</li>
        </ul>
      </>
    )
  },
  {
    id: 'ml-pipeline',
    title: 'Pipeline Creation',
    parent: '10. Data Preprocessing',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Scikit-learn Pipelines chain together preprocessing and modeling steps to prevent data leakage and simplify deployment.
        </p>
        <CodeBlock language="python" code={`from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('model', LogisticRegression())
])
pipeline.fit(X_train, y_train)`} />
      </>
    )
  },
  {
    id: 'ml-smote',
    title: 'Handling Imbalance (SMOTE)',
    parent: '10. Data Preprocessing',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>SMOTE (Synthetic Minority Over-sampling Technique)</strong> creates synthetic samples for minority classes to balance datasets, rather than just duplicating existing records (which causes overfitting).
        </p>
        <p className="mb-4 text-slate-700">
            It works by selecting a minority example, finding its k-nearest neighbors, and interpolating new points between them.
        </p>
        <CodeBlock language="python" code={`from imblearn.over_sampling import SMOTE

smote = SMOTE(random_state=42)
X_resampled, y_resampled = smote.fit_resample(X_train, y_train)

print(f"Original shape: {y_train.shape}")
print(f"Resampled shape: {y_resampled.shape}")`} />
      </>
    )
  },

  // 11. Model Optimization
  {
    id: 'ml-opt-intro',
    title: 'Hyperparameter Tuning',
    parent: '11. Model Optimization',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          In Machine Learning, there are two types of parameters:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Model Parameters:</strong> Learned from data during training (e.g., weights in neural networks, coefficients in linear regression).</li>
            <li><strong>Hyperparameters:</strong> Set <em>before</em> training to control the learning process (e.g., Learning Rate, Number of Trees in Random Forest, K in KNN).</li>
        </ul>
        <p className="mb-4 text-slate-700">
            <strong>Hyperparameter Tuning</strong> is the process of searching for the optimal set of hyperparameters that maximizes the model's performance.
        </p>
      </>
    )
  },
  {
    id: 'ml-opt-search',
    title: 'Grid Search vs Random Search',
    parent: '11. Model Optimization',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          How do we find the best combination of hyperparameters?
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Grid Search</h3>
        <p className="mb-4">Exhaustively tries <strong>every possible combination</strong> from a predefined list of values. It guarantees finding the best combination in your grid but is computationally expensive.</p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Random Search</h3>
        <p className="mb-4">Samples a fixed number of parameter settings from specified distributions. It is statistically likely to find a good model faster than Grid Search, especially when some hyperparameters are more important than others.</p>

        <CodeBlock language="python" code={`from sklearn.model_selection import GridSearchCV, RandomizedSearchCV
from sklearn.ensemble import RandomForestClassifier
from scipy.stats import randint

# Define the parameter grid
param_grid = {
    'n_estimators': [50, 100, 200],
    'max_depth': [None, 10, 20, 30],
    'min_samples_split': [2, 5, 10]
}

rf = RandomForestClassifier()

# Grid Search
grid_search = GridSearchCV(estimator=rf, param_grid=param_grid, cv=5)
grid_search.fit(X_train, y_train)
print("Best Grid Params:", grid_search.best_params_)

# Random Search (Distribution based)
param_dist = {
    'n_estimators': randint(50, 200),
    'max_depth': randint(1, 30)
}
random_search = RandomizedSearchCV(estimator=rf, param_distributions=param_dist, n_iter=10, cv=5)
random_search.fit(X_train, y_train)
print("Best Random Params:", random_search.best_params_)`} />
      </>
    )
  },
  {
    id: 'ml-opt-bayesian',
    title: 'Bayesian Optimization',
    parent: '11. Model Optimization',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Grid and Random search are "uninformed" methods (they don't learn from past trials). <strong>Bayesian Optimization</strong> builds a probabilistic model (surrogate) of the objective function and uses it to select the most promising hyperparameters to evaluate next.
        </p>
        <p className="mb-4">It balances <strong>Exploration</strong> (trying uncertain regions) and <strong>Exploitation</strong> (focusing on regions known to be good). Libraries like <code>Optuna</code> and <code>Hyperopt</code> are popular for this.</p>
        <CodeBlock language="python" code={`import optuna

def objective(trial):
    # Suggest values for hyperparameters
    n_estimators = trial.suggest_int('n_estimators', 50, 200)
    max_depth = trial.suggest_int('max_depth', 2, 32, log=True)
    
    clf = RandomForestClassifier(n_estimators=n_estimators, max_depth=max_depth)
    return cross_val_score(clf, X, y, n_jobs=-1, cv=3).mean()

study = optuna.create_study(direction='maximize')
study.optimize(objective, n_trials=20)
print(study.best_params)`} />
      </>
    )
  },
  {
    id: 'ml-opt-cv',
    title: 'Cross-Validation',
    parent: '11. Model Optimization',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Evaluating a model on a single test set can be misleading (you might get a lucky or unlucky split). <strong>Cross-Validation (CV)</strong> provides a more robust estimate of model performance.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">K-Fold Cross-Validation</h3>
        <ol className="list-decimal pl-5 space-y-2 mb-6 text-slate-700">
            <li>Split the dataset into <strong>K</strong> equal partitions (folds).</li>
            <li>For each iteration <em>i</em> (from 1 to K):
                <ul className="list-disc pl-5 mt-1">
                    <li>Use Fold <em>i</em> as the <strong>Validation Set</strong>.</li>
                    <li>Use the remaining K-1 folds as the <strong>Training Set</strong>.</li>
                    <li>Train model and calculate score.</li>
                </ul>
            </li>
            <li>Average the K scores to get the final accuracy.</li>
        </ol>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`Dataset: [ 1 | 2 | 3 | 4 | 5 ]

Iter 1:  [ Test | Train | Train | Train | Train ] -> Score 1
Iter 2:  [ Train | Test | Train | Train | Train ] -> Score 2
...
Iter 5:  [ Train | Train | Train | Train | Test ] -> Score 5

Final Score = Average(Score 1...5)`}
        </pre>
      </>
    )
  },
  {
    id: 'ml-opt-bias-variance',
    title: 'Bias-Variance Tradeoff',
    parent: '11. Model Optimization',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          The <strong>Bias-Variance Tradeoff</strong> describes the tension between two sources of error that prevent supervised learning algorithms from generalizing beyond their training set.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
                <h4 className="font-bold text-blue-900 mb-2">Bias (Underfitting)</h4>
                <p className="text-sm text-blue-800">
                    Error introduced by approximating a real-world problem with a too-simple model.
                    <br/><br/>
                    <strong>Symptoms:</strong> High error on training set AND test set.
                    <br/>
                    <strong>Example:</strong> Using a straight line (Linear Regression) to model a curve.
                </p>
            </div>
            <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
                <h4 className="font-bold text-red-900 mb-2">Variance (Overfitting)</h4>
                <p className="text-sm text-red-800">
                    Error introduced by sensitivity to small fluctuations in the training set. The model learns "noise" as if it were signal.
                    <br/><br/>
                    <strong>Symptoms:</strong> Low error on training set, but High error on test set.
                    <br/>
                    <strong>Example:</strong> A Decision Tree grown to full depth.
                </p>
            </div>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">The Sweet Spot</h3>
        <p className="mb-4">
            Total Error = Bias² + Variance + Irreducible Error.
            <br/>
            As model complexity increases, Bias decreases (better fit) but Variance increases (worse generalization). The goal is to find the level of complexity that minimizes the Total Error.
        </p>
      </>
    )
  },
];
