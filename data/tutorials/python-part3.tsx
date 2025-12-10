import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

const Placeholder = () => <p>Content coming soon...</p>;

export const PYTHON_PART3_TOPICS: Topic[] = [
  // 11. Data Handling & Libraries
  {
    id: 'py-data-numpy',
    title: 'NumPy',
    parent: '11. Data Handling & Libraries',
    content: (
        <>
            <p className="mb-4"><strong>NumPy (Numerical Python)</strong> is the fundamental package for scientific computing in Python. It provides a powerful N-dimensional array object, sophisticated functions, and tools for integrating C/C++ and Fortran code.</p>
            <CodeBlock language="python" code={`import numpy as np

# Create a NumPy array from a Python list
a = np.array([1, 2, 3, 4, 5])
print(a)

# Perform vectorized operations (much faster than loops)
b = a * 2
print(b)  # [ 2  4  6  8 10]

# Create a 2D array (matrix)
matrix = np.array([[1, 2], [3, 4]])
print(matrix.shape)  # (2, 2)`} />
        </>
    )
  },
  {
    id: 'py-data-pandas',
    title: 'Pandas',
    parent: '11. Data Handling & Libraries',
    content: (
        <>
            <p className="mb-4"><strong>Pandas</strong> is a fast, powerful, flexible, and easy-to-use open-source data analysis and manipulation tool. Its primary data structures are the <code>Series</code> (1D) and <code>DataFrame</code> (2D), which are like a spreadsheet or SQL table.</p>
            <CodeBlock language="python" code={`import pandas as pd

# Create a DataFrame from a dictionary
data = {
    'Course': ['Python', 'Java', 'Web Dev'],
    'Students': [1200, 900, 1500]
}
df = pd.DataFrame(data)

print(df)

# Read data from a CSV file
# df_from_csv = pd.read_csv('my_data.csv')

# Select a column
print(df['Course'])

# Filter data
high_enrollment = df[df['Students'] > 1000]
print(high_enrollment)`} />
        </>
    )
  },
  {
    id: 'py-data-matplotlib',
    title: 'Matplotlib & Seaborn',
    parent: '11. Data Handling & Libraries',
    content: (
        <>
            <p className="mb-4"><strong>Matplotlib</strong> is a comprehensive library for creating static, animated, and interactive visualizations in Python. <strong>Seaborn</strong> is a data visualization library based on Matplotlib that provides a high-level interface for drawing attractive and informative statistical graphics.</p>
            <CodeBlock language="python" code={`import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

# Matplotlib example
x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.plot(x, y)
plt.title("Simple Sine Wave")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")
plt.show()

# Seaborn example (often simpler for statistical plots)
tips = sns.load_dataset("tips") # Load sample data
sns.scatterplot(data=tips, x="total_bill", y="tip", hue="day")
plt.show()`} />
        </>
    )
  },
  {
    id: 'py-data-apis',
    title: 'Working with APIs',
    parent: '11. Data Handling & Libraries',
    content: (
        <>
            <p className="mb-4">An API (Application Programming Interface) is a way for two or more computer programs to communicate with each other. The <code>requests</code> library is the standard way to make HTTP requests in Python to interact with web APIs.</p>
            <CodeBlock language="python" code={`import requests
import json

# Make a GET request to a public API
response = requests.get("https://api.publicapis.org/entries")

if response.status_code == 200:
    # Success!
    data = response.json() # Parse the JSON response
    print(f"Found {data['count']} APIs.")
    # Print the name of the first API
    print("First API:", data['entries'][0]['API'])
else:
    print(f"Failed to fetch data. Status code: {response.status_code}")`} />
        </>
    )
  },
  // 12. Database
  {
    id: 'py-db-sqlite',
    title: 'SQLite',
    parent: '12. Database (DB)',
    content: (
        <>
            <p className="mb-4"><strong>SQLite</strong> is a C-language library that implements a small, fast, self-contained, serverless SQL database engine. Python has a built-in module called <code>sqlite3</code> for working with it, which is great for small projects and learning.</p>
            <CodeBlock language="python" code={`import sqlite3

# Connect to a database (or create it if it doesn't exist)
conn = sqlite3.connect('codealpha.db')
cursor = conn.cursor()

# Create a table
cursor.execute("""
CREATE TABLE IF NOT EXISTS courses (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    duration_weeks INTEGER
)""")

# Insert data (use ? to prevent SQL injection)
cursor.execute("INSERT INTO courses (name, duration_weeks) VALUES (?, ?)", ("Python", 4))
conn.commit()

# Query data
cursor.execute("SELECT * FROM courses WHERE name = ?", ("Python",))
course = cursor.fetchone()
print(course)

# Close connection
conn.close()`} />
        </>
    )
  },
  {
    id: 'py-db-mysql',
    title: 'MySQL Connector',
    parent: '12. Database (DB)',
    content: (
        <>
            <p className="mb-4">To connect to a MySQL database (a popular open-source relational database), you typically use a third-party library like <code>mysql-connector-python</code>.</p>
            <CodeBlock language="bash" code="pip install mysql-connector-python" />
            <CodeBlock language="python" code={`import mysql.connector

# This is an example, connection details will vary
config = {
  'user': 'your_user',
  'password': 'your_password',
  'host': '127.0.0.1',
  'database': 'codealpha_db'
}

try:
    conn = mysql.connector.connect(**config)
    cursor = conn.cursor()
    
    cursor.execute("SELECT * FROM courses")
    for row in cursor:
        print(row)

except mysql.connector.Error as err:
    print(f"Error: {err}")
finally:
    if 'conn' in locals() and conn.is_connected():
        cursor.close()
        conn.close()`} />
        </>
    )
  },
  // 13. Web Development
  {
    id: 'py-web-flask',
    title: 'Flask',
    parent: '13. Web Development',
    content: (
        <>
            <p className="mb-4"><strong>Flask</strong> is a lightweight "micro" web framework for Python. It's easy to get started with and is great for building smaller applications, APIs, and prototypes.</p>
            <CodeBlock language="bash" code="pip install Flask" />
            <CodeBlock language="python" code={`from flask import Flask

# Create a Flask app instance
app = Flask(__name__)

# Define a route for the homepage
@app.route('/')
def home():
    return "Hello from CodeAlpha with Flask!"

# To run this app:
# 1. Save it as app.py
# 2. In your terminal, run: flask run`} />
        </>
    )
  },
  {
    id: 'py-web-django',
    title: 'Django',
    parent: '13. Web Development',
    content: (
        <>
            <p className="mb-4"><strong>Django</strong> is a high-level "batteries-included" web framework that encourages rapid development and clean, pragmatic design. It includes an ORM, admin panel, authentication, and much more out of the box.</p>
            <CodeBlock language="bash" code={`# 1. Install Django
pip install Django

# 2. Start a new project
django-admin startproject myproject

# 3. Start a new app within the project
cd myproject
python manage.py startapp myapp`} />
            <p className="mt-4">Django's structure is more complex than Flask's, involving separate files for models (database), views (logic), and templates (HTML).</p>
        </>
    )
  },
  {
    id: 'py-web-fastapi',
    title: 'FastAPI',
    parent: '13. Web Development',
    content: (
        <>
            <p className="mb-4"><strong>FastAPI</strong> is a modern, high-performance web framework for building APIs with Python 3.7+ based on standard Python type hints. It's known for its speed, automatic interactive documentation (Swagger UI), and data validation with Pydantic.</p>
            <CodeBlock language="bash" code={`pip install fastapi "uvicorn[standard]"`} />
            <CodeBlock language="python" code={`from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello from CodeAlpha with FastAPI"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}

# To run this app:
# 1. Save it as main.py
# 2. In your terminal, run: uvicorn main:app --reload`} />
        </>
    )
  },
  // 14. Automation & Scripting
  {
    id: 'py-auto-beautifulsoup',
    title: 'BeautifulSoup (Web Scraping)',
    parent: '14. Automation & Scripting',
    content: (
        <>
            <p className="mb-4"><strong>BeautifulSoup</strong> is a library for pulling data out of HTML and XML files. It works with your favorite parser to provide idiomatic ways of navigating, searching, and modifying the parse tree. It's commonly used for web scraping.</p>
            <CodeBlock language="bash" code="pip install beautifulsoup4 requests" />
            <CodeBlock language="python" code={`import requests
from bs4 import BeautifulSoup

URL = "https://example.com"
response = requests.get(URL)

if response.status_code == 200:
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Find the main heading
    heading = soup.find('h1')
    print("Heading:", heading.text)
else:
    print("Failed to retrieve the webpage")`} />
        </>
    )
  },
  {
    id: 'py-auto-selenium',
    title: 'Selenium (Browser Automation)',
    parent: '14. Automation & Scripting',
    content: (
        <>
            <p className="mb-4"><strong>Selenium</strong> is a powerful tool for controlling a web browser through code. It's primarily used for automating web applications for testing purposes, but can be used for any task that requires browser interaction, like filling out forms or clicking buttons on pages that use a lot of JavaScript.</p>
            <CodeBlock language="bash" code="pip install selenium" />
            <p className="mb-4">You will also need to download a WebDriver for your browser (e.g., ChromeDriver for Google Chrome).</p>
        </>
    )
  },
  // 15. ML/AI Basics
  {
    id: 'py-ml-scikit-learn',
    title: 'Scikit-Learn',
    parent: '15. Machine Learning / AI Basics',
    content: (
        <>
            <p className="mb-4"><strong>Scikit-learn</strong> is a simple and efficient tool for predictive data analysis. It features various classification, regression and clustering algorithms and is designed to interoperate with NumPy and SciPy.</p>
            <CodeBlock language="python" code={`from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import numpy as np

# Sample data: X = years of experience, y = salary
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([30, 40, 55, 70, 80])

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Create a linear regression model
model = LinearRegression()

# Train the model
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)
print("Predictions:", predictions)
print("Actual:", y_test)`} />
        </>
    )
  },
];