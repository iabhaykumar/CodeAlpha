
import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const ML_PART5_TOPICS: Topic[] = [
  // 17. Big Data & Distributed Processing (DEEP DETAILS)
  {
    id: 'ml-bigdata-hadoop',
    title: 'Hadoop Ecosystem',
    parent: '17. Big Data & Distributed Processing',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Apache Hadoop</strong> is the framework that started the Big Data revolution. It solved two fundamental problems: storing massive amounts of data (larger than a single hard drive) and processing it.
        </p>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">1. HDFS (Hadoop Distributed File System)</h3>
        <p className="mb-4">HDFS breaks large files into blocks (default 128MB) and distributes them across a cluster of commodity hardware. It ensures reliability through <strong>Replication</strong> (default 3 copies).</p>
        <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-700">
          <li><strong>NameNode (Master):</strong> Stores metadata (file names, permissions, block locations). It is the single point of failure (in classic architecture).</li>
          <li><strong>DataNode (Worker):</strong> Stores the actual data blocks.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">2. MapReduce (Processing Engine)</h3>
        <p className="mb-4">A programming model for processing large data sets. It moves computation to the data, rather than data to computation.</p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`Task: Count word frequency in a library of books.

[ PHASE 1: SPLIT ]
- Data is divided into chunks across 3 nodes.

[ PHASE 2: MAP (Local Processing) ]
- Node A: ["apple", "banana", "apple"] -> ("apple", 1), ("banana", 1), ("apple", 1)
- Node B: ["banana", "carrot"]         -> ("banana", 1), ("carrot", 1)

[ PHASE 3: SHUFFLE & SORT (Network Heavy) ]
- System groups data by key. All "apple" go to one reducer, "banana" to another.
- Group 1: "apple"  -> [1, 1]
- Group 2: "banana" -> [1, 1]
- Group 3: "carrot" -> [1]

[ PHASE 4: REDUCE (Aggregation) ]
- Sum the values list.
- ("apple", 2), ("banana", 2), ("carrot", 1)`}
        </pre>
      </>
    )
  },
  {
    id: 'ml-bigdata-spark',
    title: 'Apache Spark',
    parent: '17. Big Data & Distributed Processing',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Apache Spark</strong> is a unified analytics engine for large-scale data processing. It overcomes MapReduce's limitation (writing to disk after every step) by performing processing <strong>In-Memory (RAM)</strong>, making it 100x faster for some workloads.
        </p>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Spark DataFrames</h3>
        <p className="mb-4">Inspired by Pandas, Spark DataFrames provide a structured API for querying data using SQL-like operations. Unlike Pandas, they are distributed across the cluster.</p>

        <CodeBlock language="python" code={`from pyspark.sql import SparkSession
from pyspark.sql.functions import col, avg

# Initialize Spark Session (Driver)
spark = SparkSession.builder.appName("DeepDive").getOrCreate()

# 1. Read Data (Lazy)
df = spark.read.csv("transactions.csv", header=True, inferSchema=True)

# 2. Transformations (Lazy - builds DAG)
# Filter high value transactions and group by category
processed_df = df.filter(col("amount") > 1000) \\
                 .groupBy("category") \\
                 .agg(avg("amount").alias("avg_spend"))

# 3. Action (Triggers Execution on Executors)
processed_df.show()`} />

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Spark MLlib</h3>
        <p className="mb-4">Spark's Machine Learning library. It allows you to build scalable ML pipelines (Feature Estimators + Transformers) that run distributed.</p>
      </>
    )
  },

  // 18. MLOps (DEEP DETAILS)
  {
    id: 'ml-mlops-deployment',
    title: 'Model Deployment',
    parent: '18. MLOps',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Deployment involves exposing your trained model so other systems can use it.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">FastAPI for Serving</h3>
        <p className="mb-4">FastAPI is the modern standard for Python APIs due to its speed (async) and automatic validation (Pydantic).</p>
        <CodeBlock language="python" code={`from fastapi import FastAPI
from pydantic import BaseModel
import joblib

app = FastAPI()
model = joblib.load("model.pkl")

class InputData(BaseModel):
    features: list

@app.post("/predict")
def predict(data: InputData):
    prediction = model.predict([data.features])
    return {"prediction": prediction[0]}`} />

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Docker Containerization</h3>
        <p className="mb-4">Docker ensures the model runs the same way in production as it did on your laptop by packaging code, libraries, and OS settings.</p>
        <CodeBlock language="dockerfile" code={`FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0"]`} />
      </>
    )
  },
  {
    id: 'ml-mlops-tracking',
    title: 'Tracking & Versioning (MLflow & DVC)',
    parent: '18. MLOps',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Reproducibility is the biggest challenge in ML. We need to track Code, Data, and Metrics.
        </p>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">MLflow</h3>
        <p className="mb-4">Logs parameters, metrics, and artifacts (models) during experiments.</p>
        <CodeBlock language="python" code={`import mlflow

mlflow.start_run()
mlflow.log_param("alpha", 0.5)
mlflow.log_metric("accuracy", 0.92)
mlflow.sklearn.log_model(model, "model")
mlflow.end_run()`} />

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">DVC (Data Version Control)</h3>
        <p className="mb-4">Git is for code, DVC is for data. It stores large data files in S3/GCS but tracks a small `.dvc` pointer file in Git.</p>
        <CodeBlock language="bash" code={`# 1. Track a large dataset
dvc add data.csv

# 2. This creates data.csv.dvc (metadata). Commit this to Git.
git add data.csv.dvc
git commit -m "Add dataset v1"

# 3. Push data to storage
dvc push`} />
      </>
    )
  },
  {
    id: 'ml-mlops-monitoring',
    title: 'Model Monitoring',
    parent: '18. MLOps',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          In traditional software, code doesn't degrade. In ML, models degrade because the world changes. Monitoring detects this decay.
        </p>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Types of Drift</h3>
        <ul className="list-disc pl-5 space-y-4 mb-6 text-slate-700">
          <li>
            <strong>Data Drift (Covariate Shift):</strong> The distribution of input data (X) changes, but the relationship to the target (y) remains the same.
            <br /><em>Example:</em> A model trained on summer purchase data receives winter data.
          </li>
          <li>
            <strong>Concept Drift:</strong> The relationship between X and y changes. The definition of "Right" changes.
            <br /><em>Example:</em> "Urgent" in emails might be spam today but legitimate work email tomorrow.
          </li>
        </ul>
        <p className="text-sm bg-yellow-50 p-3 rounded border border-yellow-100 text-yellow-900">
          <strong>Detection:</strong> Use statistical tests like Kolmogorov-Smirnov (KS) or Population Stability Index (PSI) to compare live data distributions vs training data distributions.
        </p>
      </>
    )
  },

  // 19. Data Engineering Basics (NEW & DETAILED)
  {
    id: 'de-etl',
    title: 'ETL Concepts',
    parent: '19. Data Engineering Basics',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Data Engineering builds the foundation for Data Science. <strong>ETL</strong> stands for Extract, Transform, Load.
        </p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`SOURCE (Raw Data)
   |
[ EXTRACT ] -> Pull data from APIs, SQL DBs, Logs
   |
[ TRANSFORM ] -> Clean, Normalize, Aggregate (Python/Spark)
   |
[ LOAD ] -> Save to Data Warehouse (Snowflake/BigQuery)
   |
DESTINATION (Analytics/ML)`}
        </pre>
        <p className="mb-4">
          <strong>Modern Trend (ELT):</strong> Extract → Load → Transform. Load raw data into the warehouse first, then use the warehouse's power (SQL) to transform it. Tools like <strong>dbt</strong> facilitate this.
        </p>

      </>
    )
  },
  {
    id: 'de-sql-ds',
    title: 'SQL for Data Science',
    parent: '19. Data Engineering Basics',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Beyond basic `SELECT *`, Data Engineers use advanced SQL for analytical queries.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Window Functions</h3>
        <p className="mb-4">Perform calculations across a set of table rows that are somehow related to the current row.</p>
        <CodeBlock language="sql" code={`-- Rank employees by salary within each department
SELECT 
    name, 
    department, 
    salary,
    RANK() OVER (PARTITION BY department ORDER BY salary DESC) as rank
FROM employees;`} />

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">CTEs (Common Table Expressions)</h3>
        <p className="mb-4">Temporary result sets that make queries readable.</p>
        <CodeBlock language="sql" code={`WITH HighSales AS (
    SELECT region, SUM(amount) as total
    FROM sales
    GROUP BY region
    HAVING total > 10000
)
SELECT * FROM HighSales;`} />
      </>
    )
  },
  {
    id: 'de-airflow',
    title: 'Airflow & Orchestration',
    parent: '19. Data Engineering Basics',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Apache Airflow</strong> is a platform to programmatically author, schedule, and monitor workflows. Workflows are defined as code (Python) in a <strong>DAG (Directed Acyclic Graph)</strong>.
        </p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`DAG: "Daily_Sales_Report"

[ Task A: Fetch Data ] 
         |
         v
[ Task B: Clean Data ]
         |
    _____v_____
   /           \
[ Task C: ML ]  [ Task D: BI Report ]`}
        </pre>
        <CodeBlock language="python" code={`from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime

def print_hello():
    print("ETL Started!")

with DAG('my_dag', start_date=datetime(2024, 1, 1)) as dag:
    task1 = PythonOperator(
        task_id='hello_task',
        python_callable=print_hello
    )
    # Define dependencies
    # task1 >> task2`} />
      </>
    )
  },

  // 20. Data Visualization (Advanced)
  {
    id: 'ml-viz-seaborn',
    title: 'Seaborn Internals',
    parent: '20. Data Visualization (Advanced)',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Seaborn</strong> is built on top of Matplotlib but integrates closely with Pandas data structures. It performs statistical estimation automatically.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Statistical Estimation</h3>
        <p className="mb-4">When you plot a bar chart or line chart in Seaborn, it doesn't just plot the mean; by default, it calculates and plots the <strong>95% Confidence Interval</strong> using bootstrapping.</p>
        <CodeBlock language="python" code={`import seaborn as sns
import matplotlib.pyplot as plt

# The FacetGrid: A powerful tool for multi-plot grids
tips = sns.load_dataset("tips")

# Create a grid of histograms
# Rows: Smoker vs Non-Smoker
# Cols: Time (Lunch vs Dinner)
g = sns.FacetGrid(tips, row="smoker", col="time", margin_titles=True)
g.map(sns.histplot, "total_bill")

plt.show()
# Result: 4 histograms comparing distributions across different subsets`} />
      </>
    )
  },
  {
    id: 'ml-viz-interactive',
    title: 'Interactive Viz (Plotly/Dash)',
    parent: '20. Data Visualization (Advanced)',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Plotly.js</strong> (the engine behind Python Plotly) generates declarative JSON. This means when you create a chart, you are creating a JSON description of the chart, which the browser renders.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Dash Architecture</h3>
        <p className="mb-4">Dash ties a Flask backend (Python) to a React frontend (JavaScript) via JSON packets. It allows you to build full-stack analytic web apps in pure Python.</p>
        <CodeBlock language="python" code={`from dash import Dash, html, dcc, Input, Output

app = Dash(__name__)

app.layout = html.Div([
    # Dropdown Component
    dcc.Dropdown(id='demo-dropdown', options=['NYC', 'MTL', 'SF'], value='NYC'),
    # Output Div
    html.Div(id='display-selected-value')
])

# Callback: The "Reactive" glue
@app.callback(
    Output('display-selected-value', 'children'),
    Input('demo-dropdown', 'value')
)
def update_output(value):
    return f'You selected {value}'

if __name__ == '__main__':
    app.run_server(debug=True)`} />
      </>
    )
  },
  {
    id: 'ml-viz-bi',
    title: 'BI Workflow (Tableau/PowerBI)',
    parent: '20. Data Visualization (Advanced)',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Modern Business Intelligence follows a specific workflow often referred to as the <strong>Modern Data Stack</strong>.
        </p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`1. Ingestion (ETL/ELT):
   [ Sources: SQL, APIs, Logs ] --> [ Fivetran / Airbyte ]

2. Storage (Data Warehouse):
   --> [ Snowflake / BigQuery / Redshift ]

3. Transformation (Modeling):
   --> [ dbt (Data Build Tool) ]
   (Clean, Join, and Aggregate data into "Gold" tables)

4. Visualization (Consumption):
   --> [ PowerBI / Tableau ]
   (Connects to Gold tables to build Dashboards)`}
        </pre>
        <p className="mb-4">
          In ML, BI tools are often used for <strong>Explanatory Analysis</strong> (explaining what happened) whereas ML models do <strong>Predictive Analysis</strong> (what will happen).
        </p>
      </>
    )
  },

  // 21. Statistics & Math (Preserved)
  {
    id: 'ml-math-prob',
    title: 'Probability & Bayes',
    parent: '21. Statistics & Math for ML',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Probability</strong> is the measure of the likelihood that an event will occur. In Machine Learning, almost everything is probabilistic (e.g., "There is an 80% probability this image is a cat").
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">Key Concepts</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
          <li><strong>Independent Events:</strong> The outcome of one event does not affect the other (e.g., Rolling two dice). <br /><code className="text-xs bg-slate-100 p-1">P(A and B) = P(A) * P(B)</code></li>
          <li><strong>Dependent Events:</strong> The outcome of one affects the other (e.g., Drawing cards without replacement). <br /><code className="text-xs bg-slate-100 p-1">P(A and B) = P(A) * P(B|A)</code></li>
          <li><strong>Conditional Probability P(A|B):</strong> Probability of event A happening <em>given</em> that event B has already occurred.</li>
        </ul>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">Bayes' Theorem</h3>
        <p className="mb-2 text-slate-700">This is the foundation of Naive Bayes classifiers. It describes the probability of an event based on prior knowledge of conditions that might be related to the event.</p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`Formula:
P(A|B) = [ P(B|A) * P(A) ] / P(B)

- P(A|B): Posterior (What we want to find)
- P(B|A): Likelihood (Probability of evidence given hypothesis)
- P(A): Prior (Initial probability of hypothesis)
- P(B): Evidence (Total probability of evidence)

Example: Spam Filter
P(Spam | Word "Free") = [ P("Free" | Spam) * P(Spam) ] / P("Free")`}
        </pre>
      </>
    )
  },
  {
    id: 'ml-math-dist',
    title: 'Probability Distributions',
    parent: '21. Statistics & Math for ML',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          A <strong>Probability Distribution</strong> is a function that describes the likelihood of obtaining the possible values that a random variable can assume.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">Crucial Distributions in ML</h3>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
          <li><strong>Normal (Gaussian) Distribution:</strong> The "Bell Curve". Symmetric. Defined by Mean (μ) and Standard Deviation (σ).
            <br /><em>Why it matters:</em> Many ML algorithms (Linear Regression, Gaussian Naive Bayes) assume data is normally distributed.
            <br /><code className="text-xs text-slate-500">Rule: 68% data within 1σ, 95% within 2σ, 99.7% within 3σ.</code>
          </li>
          <li><strong>Bernoulli Distribution:</strong> Discrete distribution having two possible outcomes labeled by n=0 and n=1 (e.g., Coin toss). Basis for Logistic Regression.</li>
          <li><strong>Uniform Distribution:</strong> All outcomes are equally likely (e.g., Rolling a fair die). Used in random initialization of weights.</li>
          <li><strong>Poisson Distribution:</strong> Expresses the probability of a given number of events occurring in a fixed interval of time (e.g., Number of emails received per hour).</li>
        </ul>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">Central Limit Theorem (CLT)</h3>
        <p className="text-sm bg-blue-50 p-3 rounded border border-blue-100 text-blue-900">
          The CLT states that the distribution of sample means approximates a normal distribution as the sample size becomes larger, regardless of the population's actual distribution. This allows us to make statistical inferences about a population using sample data.
        </p>
      </>
    )
  },
  {
    id: 'ml-math-hypothesis',
    title: 'Hypothesis Testing',
    parent: '21. Statistics & Math for ML',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Hypothesis Testing</strong> is a method to test an assumption regarding a population parameter.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
          <li><strong>Null Hypothesis (H0):</strong> The default assumption (e.g., "The new drug has NO effect").</li>
          <li><strong>Alternative Hypothesis (H1):</strong> The theory we want to prove (e.g., "The new drug improves recovery").</li>
        </ul>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">Errors in Judgment</h3>
        <table className="w-full text-sm text-left border-collapse border border-slate-300 mb-4">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-300 p-2">Decision</th>
              <th className="border border-slate-300 p-2">H0 is TRUE (No Effect)</th>
              <th className="border border-slate-300 p-2">H0 is FALSE (Real Effect)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 p-2 font-bold">Reject H0</td>
              <td className="border border-slate-300 p-2 text-red-600">Type I Error (False Positive)</td>
              <td className="border border-slate-300 p-2 text-green-600">Correct Outcome</td>
            </tr>
            <tr>
              <td className="border border-slate-300 p-2 font-bold">Fail to Reject</td>
              <td className="border border-slate-300 p-2 text-green-600">Correct Outcome</td>
              <td className="border border-slate-300 p-2 text-red-600">Type II Error (False Negative)</td>
            </tr>
          </tbody>
        </table>
        <p className="text-sm text-slate-600">Example: Convicting an innocent person is a Type I error. Letting a guilty person go free is a Type II error.</p>
      </>
    )
  },
  {
    id: 'ml-math-pvalue',
    title: 'p-values & Confidence Intervals',
    parent: '21. Statistics & Math for ML',
    content: (
      <>
        <h3 className="text-xl font-bold text-slate-800 mb-2">p-value</h3>
        <p className="mb-4 text-slate-700">
          The <strong>p-value</strong> is the probability of observing results at least as extreme as the ones in your sample, assuming the Null Hypothesis is true.
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
          <h4 className="font-bold text-yellow-900 mb-1">Interpretation</h4>
          <p className="text-yellow-800 text-sm">
            <strong>p &le; 0.05 (Alpha):</strong> Strong evidence against H0. We reject the Null Hypothesis.
            The result is "Statistically Significant".<br />
            <strong>p &gt; 0.05:</strong> Weak evidence. We fail to reject H0.
          </p>

        </div>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">Confidence Interval (CI)</h3>
        <p className="mb-4 text-slate-700">
          A range of values derived from sample statistics that is likely to contain the value of an unknown population parameter.
        </p>
        <p className="mb-4 text-slate-700">
          Example: "We are 95% confident that the true average height of the population is between 170cm and 175cm."
        </p>
      </>
    )
  },
  {
    id: 'ml-math-corr',
    title: 'Correlation & Covariance',
    parent: '21. Statistics & Math for ML',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          These metrics quantify the relationship between two variables.
        </p>
        <ul className="list-disc pl-5 space-y-4 mb-4 text-slate-700">
          <li>
            <strong>Covariance:</strong> Indicates the <em>direction</em> of the linear relationship.
            <br />- Positive: Variables move together (Height increases, Weight increases).
            <br />- Negative: Variables move inversely.
            <br />- <em>Drawback:</em> Not normalized. Hard to interpret magnitude.
          </li>
          <li>
            <strong>Correlation (Pearson's r):</strong> A normalized version of covariance. Ranges from <strong>-1 to +1</strong>.
            <br />- <strong>+1:</strong> Perfect positive linear relationship.
            <br />- <strong>0:</strong> No linear relationship.
            <br />- <strong>-1:</strong> Perfect negative linear relationship.
          </li>
        </ul>
        <CodeBlock language="python" code={`import pandas as pd
import seaborn as sns

df = pd.DataFrame({
    'study_hours': [1, 2, 3, 4, 5],
    'marks': [50, 60, 70, 80, 90]
})

# Calculate Correlation Matrix
corr_matrix = df.corr()
print(corr_matrix)
# Result: 1.0 (Perfect correlation)

# Visualize
sns.heatmap(corr_matrix, annot=True)`} />
      </>
    )
  },
  {
    id: 'ml-math-linalg',
    title: 'Linear Algebra Basics',
    parent: '21. Statistics & Math for ML',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Linear Algebra is the language of Machine Learning. It deals with vectors and matrices to handle data efficiently.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
          <li><strong>Scalar:</strong> A single number (e.g., 5). Represents magnitude.</li>
          <li><strong>Vector:</strong> An array of numbers (e.g., [x, y, z]). Represents a point or direction in space. A row in a dataset is a vector.</li>
          <li><strong>Matrix:</strong> A 2D array of numbers. Represents a dataset (Rows=Samples, Cols=Features).</li>
          <li><strong>Tensor:</strong> N-dimensional arrays (e.g., A color image is a 3D tensor: Height x Width x RGB Channels). Essential for Deep Learning (TensorFlow/PyTorch).</li>
        </ul>
      </>
    )
  },
  {
    id: 'ml-math-matrix',
    title: 'Matrix Operations',
    parent: '21. Statistics & Math for ML',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Neural networks are essentially a series of massive matrix operations.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">Dot Product</h3>
        <p className="mb-4">The sum of the products of corresponding entries. Used to calculate the weighted sum in a neuron.</p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`Vector A = [1, 2]
Vector B = [3, 4]

Dot Product (A . B) = (1*3) + (2*4) = 3 + 8 = 11`}
        </pre>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">Matrix Multiplication</h3>
        <p className="mb-4">To multiply matrix A (m x n) by matrix B (n x p), the number of columns in A must equal the number of rows in B. The result is (m x p).</p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">Eigenvectors & Eigenvalues</h3>
        <p className="mb-4">Crucial for <strong>PCA (Principal Component Analysis)</strong>. They identify the "principal directions" (Eigenvectors) where the data varies the most, and the magnitude of that variance (Eigenvalues).</p>
      </>
    )
  },
  {
    id: 'ml-math-calc',
    title: 'Calculus (Gradients)',
    parent: '21. Statistics & Math for ML',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Calculus is the study of continuous change. In ML, we use it to <strong>optimize</strong> our models (minimize error).
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">Derivatives & Gradients</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
          <li><strong>Derivative:</strong> The slope of a function at a specific point. It tells us "If we change input x slightly, how much does output y change?".</li>
          <li><strong>Gradient:</strong> A vector containing partial derivatives for all variables. It points in the direction of the steepest <strong>increase</strong> of the function.</li>
        </ul>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">Gradient Descent</h3>
        <p className="mb-4">To minimize the Loss Function (Error), we move in the direction <strong>opposite</strong> to the gradient.</p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`Algorithm:
1. Start with random weights (w).
2. Calculate the Gradient (slope) of Loss at w.
3. Update weights:
   w_new = w_old - (Learning_Rate * Gradient)
4. Repeat until slope is near 0 (Minimum reached).`}
        </pre>
      </>
    )
  },

  // 22. Reinforcement Learning (Preserved)
  {
    id: 'ml-rl-intro',
    title: 'Agent & Environment',
    parent: '22. Reinforcement Learning',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Reinforcement Learning (RL) is a paradigm of learning via interaction. It models decision making as a <strong>Markov Decision Process (MDP)</strong>.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">The MDP Tuple (S, A, R, P, γ)</h3>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
          <li><strong>State (S):</strong> Current situation (e.g., Chess board position).</li>
          <li><strong>Action (A):</strong> Move made by the Agent (e.g., Move pawn e4).</li>
          <li><strong>Reward (R):</strong> Immediate feedback from Environment (e.g., +1 for checkmate, -1 for losing queen).</li>
          <li><strong>Transition Probability (P):</strong> Probability of moving to State S' from S after taking Action A.</li>
          <li><strong>Discount Factor (γ - Gamma):</strong> Importance of future rewards (0 to 1). Higher means Agent cares about long-term strategy.</li>
        </ul>
      </>
    )
  },
  {
    id: 'ml-rl-qlearning',
    title: 'Q-Learning',
    parent: '22. Reinforcement Learning',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Q-Learning is a model-free algorithm that learns the quality of actions. It maintains a <strong>Q-Table</strong> of size `[States x Actions]`. The cell `Q(S, A)` represents the expected total future reward of taking Action A in State S.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">The Bellman Equation</h3>
        <p className="mb-4">The core update rule that makes learning possible.</p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`Q(S, A) = Q(S, A) + α * [ R + γ * max(Q(S', a)) - Q(S, A) ]

Where:
α (Alpha): Learning Rate (How fast we accept new info)
R: Immediate Reward
γ * max(Q(S', a)): Estimated value of the NEXT state (The future promise)`}
        </pre>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Exploration vs Exploitation</h3>
        <p className="mb-4">The <strong>Epsilon-Greedy</strong> strategy:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>With probability <strong>ε (Epsilon)</strong>: Choose a random action (Explore).</li>
          <li>With probability <strong>1-ε</strong>: Choose the best known action (Exploit).</li>
        </ul>
      </>
    )
  },
  {
    id: 'ml-rl-dqn',
    title: 'Deep Q-Learning (DQN)',
    parent: '22. Reinforcement Learning',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Classic Q-Learning fails when the State space is massive (e.g., pixels in a video game = infinite states). We cannot build a table that big.
        </p>
        <p className="mb-4">
          <strong>Solution:</strong> Use a Neural Network (DQN) to <em>approximate</em> the Q-value function.
          <code> NN(State) → [Q-values for all actions] </code>.
        </p>


        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Stability Tricks</h3>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
            <h4 className="font-bold text-blue-900 mb-2">Experience Replay</h4>
            <p className="text-sm text-blue-800">
              Instead of learning from the immediate move (which is correlated and unstable), store moves in a memory buffer and sample a random batch to train.
            </p>
          </div>
          <div className="p-4 bg-purple-50 border border-purple-100 rounded-xl">
            <h4 className="font-bold text-purple-900 mb-2">Target Network</h4>
            <p className="text-sm text-purple-800">
              Use a separate, slowly updating copy of the network to calculate the "Future Target". This prevents the "moving target" problem where updates spiral out of control.
            </p>
          </div>
        </div>
      </>
    )
  },

  // 23. End-to-End Pipeline (Preserved)
  {
    id: 'ml-e2e-collection',
    title: 'Data Collection',
    parent: '23. End-to-End ML Pipeline',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          The quality of your model is capped by the quality of your data.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Sampling Strategies</h3>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
          <li><strong>Stratified Sampling:</strong> Ensures subgroups (e.g., Age groups, Genders) are represented proportionally. Crucial for imbalanced classification.</li>
          <li><strong>Reservoir Sampling:</strong> Technique to sample `k` items from a stream of unknown length.</li>
        </ul>
        <CodeBlock language="python" code={`from sklearn.model_selection import StratifiedShuffleSplit

# Stratified Split Example
split = StratifiedShuffleSplit(n_splits=1, test_size=0.2, random_state=42)
for train_index, test_index in split.split(data, data["income_cat"]):
    strat_train_set = data.loc[train_index]
    strat_test_set = data.loc[test_index]`} />
      </>
    )
  },
  {
    id: 'ml-e2e-cleaning',
    title: 'Data Cleaning',
    parent: '23. End-to-End ML Pipeline',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Fixing errors, handling outliers, and formatting data.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Outlier Detection</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
          <li>
            <strong>Z-Score:</strong> Points &gt; 3 standard deviations from mean.
          </li>
          <li>
            <strong>IQR Method:</strong>
            Points outside <code>[Q1 - 1.5 * IQR, Q3 + 1.5 * IQR]</code>.
            (Robust to extreme values).
          </li>
        </ul>

        <CodeBlock language="python" code={`# IQR Outlier Removal
Q1 = df['price'].quantile(0.25)
Q3 = df['price'].quantile(0.75)
IQR = Q3 - Q1

lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

df_clean = df[(df['price'] >= lower_bound) & (df['price'] <= upper_bound)]`} />
      </>
    )
  },
  {
    id: 'ml-e2e-eda',
    title: 'Exploratory Data Analysis (EDA)',
    parent: '23. End-to-End ML Pipeline',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          EDA is about understanding the physics of your data before modeling.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Checklist</h3>
        <ol className="list-decimal pl-5 space-y-2 mb-6 text-slate-700">
          <li><strong>Univariate Analysis:</strong> Distribution of single variables (Histograms, Box Plots). Is the data skewed?</li>
          <li><strong>Bivariate Analysis:</strong> Relationship between Feature vs Target (Scatter plots, Correlation matrix). Is the feature predictive?</li>
          <li><strong>Multivariate Analysis:</strong> Interactions between multiple variables (Pair plots).</li>
        </ol>
      </>
    )
  },
  {
    id: 'ml-e2e-feature-eng',
    title: 'Feature Engineering',
    parent: '23. End-to-End ML Pipeline',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Creating new features that expose patterns to the model more clearly. "Better features win over better algorithms."
        </p>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
          <li><strong>Binning:</strong> Converting continuous data (Age) into buckets (Child, Adult, Senior) to handle non-linearity.</li>
          <li><strong>Log Transformation:</strong> Applying `log(x+1)` to skewed data (like Income) to make it more Normal (Gaussian).</li>
          <li><strong>Interaction Features:</strong> Creating `Feature A * Feature B` (e.g., `Room * Size` for House Price).</li>
        </ul>
      </>
    )
  },
  {
    id: 'ml-e2e-deployment',
    title: 'Deployment Strategies',
    parent: '23. End-to-End ML Pipeline',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Putting the model into production.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Serving Patterns</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-slate-200 rounded-lg">
            <h4 className="font-bold text-slate-900 mb-2">Real-time (Online)</h4>
            <p className="text-sm">Model is wrapped in a REST API (FastAPI/Flask). Client sends request, Model predicts instantly. Low latency required.</p>
          </div>
          <div className="p-4 border border-slate-200 rounded-lg">
            <h4 className="font-bold text-slate-900 mb-2">Batch (Offline)</h4>
            <p className="text-sm">Model runs on a schedule (e.g., nightly) processing millions of records at once. Results stored in DB for later retrieval.</p>
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Canary Deployment</h3>
        <p className="mb-4">Roll out the new model to 5% of users first. Monitor metrics. If stable, increase traffic gradually.</p>
      </>
    )
  },
  {
    id: 'ml-e2e-monitoring',
    title: 'Monitoring & Maintenance',
    parent: '23. End-to-End ML Pipeline',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          The job isn't done after deployment.
        </p>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
          <li><strong>Service Metrics:</strong> Latency, Throughput, Error Rate, Memory Usage.</li>
          <li><strong>Model Metrics:</strong> Accuracy, Precision/Recall (requires Ground Truth, which might arrive late).</li>
          <li><strong>Data Quality:</strong> Are we receiving nulls? Has the schema changed?</li>
          <li><strong>Retraining Policy:</strong> Automated triggers (e.g., "If accuracy drops below 90%, retrain").</li>
        </ul>
      </>
    )
  },

  // 24. Model Explainability (XAI)
  {
    id: 'ml-xai',
    title: 'Model Explainability (XAI)',
    parent: '24. Explainable AI (XAI)',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          As models become more complex (like Deep Neural Networks), they often become "Black Boxes". <strong>Explainable AI (XAI)</strong> ensures that the results of the solution can be understood by humans. This builds trust and meets regulatory requirements.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Key Techniques</h3>
        <ul className="list-disc pl-5 space-y-4 mb-6 text-slate-700">
          <li><strong>SHAP (SHapley Additive exPlanations):</strong> Based on Game Theory. It assigns each feature an importance value for a particular prediction. It tells you <em>how much</em> each feature contributed to pushing the prediction away from the baseline.</li>
          <li><strong>LIME (Local Interpretable Model-agnostic Explanations):</strong> It approximates any black-box model with a simple, interpretable model (like Linear Regression) locally around the prediction you want to explain.</li>
          <li><strong>Partial Dependence Plots (PDP):</strong> Shows the marginal effect one or two features have on the predicted outcome of a model (Global explanation).</li>
          <li><strong>Feature Importance:</strong> (For Trees) Measures the decrease in node impurity (Gini/Entropy) weighted by the probability of reaching that node.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Global vs Local Explanations</h3>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`Global (Model Level):
"Overall, Credit Score is the most important feature for loan approval."
(Tools: Feature Importance, PDP)

Local (Instance Level):
"FOR THIS SPECIFIC CUSTOMER, the loan was rejected mainly because their Debt-to-Income ratio was too high, even though their Credit Score was good."
(Tools: SHAP, LIME)`}
        </pre>
        <CodeBlock language="python" code={`import shap

# SHAP Explanation for a Tree Model
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)

# Visualize the first prediction's local explanation
shap.initjs()
shap.force_plot(explainer.expected_value, shap_values[0,:], X_test.iloc[0,:])`} />
      </>
    )
  },

  // 25. Interpretability & Ethics
  {
    id: 'ml-ethics',
    title: 'Interpretability & Ethics',
    parent: '25. Ethics & Governance',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Responsible AI</strong> ensures that ML systems are fair, accountable, and transparent. AI models can amplify societal biases found in training data.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Key Ethical Concepts</h3>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
          <li><strong>Bias Detection:</strong> Identifying if the model performs differently for different demographic groups (e.g., Gender, Race). This is often due to unrepresentative training data.</li>
          <li><strong>Fairness in ML:</strong> Using metrics like <em>Demographic Parity</em> (positive outcome rate should be equal across groups) or <em>Equalized Odds</em> to mathematically enforce fairness.</li>
          <li><strong>Transparency:</strong> Making the model's logic accessible (XAI) and documenting its creation via <strong>Model Cards</strong> (Intended use, limitations, training data info).</li>
          <li><strong>Model Governance:</strong> The framework of controls (Audit trails, versioning, human review) that ensures an organization's AI models are accurate and reliable.</li>
        </ul>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">The Ethical AI Lifecycle Diagram</h3>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`1. Design Phase:
   [ Define Fairness Goals ] -> [ Assess Potential Harm ]

2. Development Phase:
   [ Bias Audit of Data ] -> [ Train Model ] -> [ Bias Audit of Model ]
         ^                                            |
         |___________(Retrain if Biased)______________|

3. Deployment Phase:
   [ Continuous Monitoring ] -> [ Human-in-the-loop Review ] -> [ Audit Logs ]`}
        </pre>
      </>
    )
  },

  // 26. Data Annotation & Labeling
  {
    id: 'ml-annotation',
    title: 'Data Annotation Strategy',
    parent: '26. Data Annotation',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Supervised learning depends entirely on high-quality labeled data. Annotation is the process of adding metadata tags (labels) to your data.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Labeling Approaches</h3>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
          <li><strong>Manual Labeling:</strong> Humans manually tag data. High accuracy, but slow and expensive. Tools: <em>CVAT</em> (Computer Vision), <em>Label Studio</em> (Multi-modal).</li>
          <li><strong>Semi-Supervised Labeling:</strong> Train a model on a small labeled set, use it to predict labels for the unlabeled set (Pseudo-Labeling), and then retrain on the combined set.</li>
          <li><strong>Active Learning:</strong> A strategy where the model identifies which data points it is most confused about (high uncertainty) and requests human labels for <em>only</em> those points. This drastically reduces labeling costs.</li>
        </ul>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Active Learning Loop Diagram</h3>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`       [ Unlabeled Data Pool ]
              |
              v
    (Select Uncertain Samples) <-------+
              |                        |
              v                        |
      [ Human Annotator ]              |
              |                        |
              v                        |
      [ Labeled Training Set ]         |
              |                        |
              v                        |
        [ Train Model ] ---------------+`}
        </pre>
      </>
    )
  },

  // 27. Feature Store Concepts
  {
    id: 'ml-feature-store',
    title: 'Feature Store Concepts',
    parent: '27. Feature Stores',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          A <strong>Feature Store</strong> is a centralized data platform for managing and serving features to ML models. It solves the <strong>Training-Serving Skew</strong> problem, where logic used to calculate features during training differs from production.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Core Components</h3>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
          <li><strong>Offline Store:</strong> Stores months/years of historical data (e.g., in Snowflake, S3) for batch training. High throughput, high latency.</li>
          <li><strong>Online Store:</strong> Stores only the latest feature values (e.g., in Redis, DynamoDB) for real-time inference. Low latency (~milliseconds).</li>
          <li><strong>Feature Reusability:</strong> Features are defined once and used by multiple teams/models (e.g., "User Average Spend" can be used for Fraud Detection AND Recommendation).</li>
          <li><strong>Feature Lineage:</strong> Tracks where a feature came from (source code, data source) for auditing.</li>
        </ul>
        <p className="mb-4 text-slate-700"><strong>Popular Tools:</strong> Feast (Open Source), Hopsworks, Tecton.</p>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Feature Store Architecture Diagram</h3>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`[ Raw Data Sources ] (Logs, DBs, Streams)
        |
        v
[ Transformations ] (Spark/Pandas/SQL)
        |
        v
+----------------------- FEATURE STORE -----------------------+
|                                                             |
|   [ Offline Store ] <---- (Sync) ----> [ Online Store ]     |
|   (Historical Data)                    (Low Latency KV)     |
|         |                                     |             |
+---------|-------------------------------------|-------------+
          |                                     |
          v                                     v
   [ Training Pipeline ]                 [ Model Serving API ]
   (Batch Training)                      (Real-time Inference)`}
        </pre>
      </>
    )
  }
];
