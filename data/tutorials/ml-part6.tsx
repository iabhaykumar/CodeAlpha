
import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const ML_PART6_TOPICS: Topic[] = [
  // 28. Cloud Machine Learning
  {
    id: 'ml-cloud',
    title: 'Cloud Machine Learning',
    parent: '28. Cloud Machine Learning',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Cloud ML platforms provide managed infrastructure to build, train, and deploy models at scale without managing physical servers. They offer end-to-end ecosystems.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Major Platforms</h3>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
            <li><strong>AWS SageMaker:</strong> A comprehensive service to build, train, and deploy models. Features include Ground Truth (labeling), Studio (IDE), and Clarify (bias detection).</li>
            <li><strong>Google Vertex AI:</strong> Unifies AutoML and custom training. Known for its strong integration with TensorFlow and TPUs (Tensor Processing Units).</li>
            <li><strong>Azure Machine Learning:</strong> Great for enterprise integration with MLOps capabilities and a drag-and-drop designer for non-coders.</li>
        </ul>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`Cloud Scaling Basics:
1. Vertical Scaling: Adding more power (CPU/RAM) to a single instance.
2. Horizontal Scaling: Adding more instances (Nodes) to distribute the load.
   - Crucial for distributed training (Multi-GPU).`}
        </pre>
      </>
    )
  },

  // 29. AutoML
  {
    id: 'ml-automl',
    title: 'AutoML (2024-2025 Trend)',
    parent: '29. AutoML',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>AutoML (Automated Machine Learning)</strong> automates the time-consuming, iterative tasks of machine learning model development. It targets the "Algorithm Selection" and "Hyperparameter Tuning" phases.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Popular Libraries</h3>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
            <li><strong>TPOT:</strong> Uses genetic algorithms to optimize machine learning pipelines. It evolves the best pipeline over generations.</li>
            <li><strong>Auto-sklearn:</strong> An automated machine learning toolkit and a drop-in replacement for a scikit-learn estimator.</li>
            <li><strong>H2O AutoML:</strong> A powerful industry-standard tool that trains and cross-validates specific algorithms (GBM, GLM, Deep Learning) to produce a leaderboard of best models.</li>
        </ul>
        <CodeBlock language="python" code={`from tpot import TPOTClassifier
from sklearn.model_selection import train_test_split

# TPOT finds the best model and preprocessing steps
tpot = TPOTClassifier(generations=5, population_size=20, verbosity=2)
tpot.fit(X_train, y_train)

print(tpot.score(X_test, y_test))
tpot.export('tpot_best_pipeline.py')`} />
      </>
    )
  },

  // 30. Transfer Learning
  {
    id: 'ml-transfer-learning',
    title: 'Transfer Learning',
    parent: '30. Transfer Learning',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Transfer Learning</strong> involves taking a model trained on a large dataset (Source Task) and fine-tuning it for a similar but smaller dataset (Target Task). It is the backbone of modern Deep Learning.
        </p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`Traditional ML:
[ Dataset A ] -> [ Model A ]
[ Dataset B ] -> [ Model B ] (Learns from scratch)

Transfer Learning:
[ ImageNet (1M images) ] -> [ ResNet50 (Pre-trained) ]
                                   |
[ Your 500 Dog Images ] -> [ Fine-Tune Last Layers ] -> [ Dog Classifier ]`}
        </pre>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Strategies</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Feature Extraction:</strong> Freeze the base model (convolutional base) and only train the new classifier head.</li>
            <li><strong>Fine-Tuning:</strong> Unfreeze some of the top layers of the base model and jointly train both the newly-added classifier layers and the last layers of the base model.</li>
        </ul>
      </>
    )
  },

  // 31. Advanced Optimization Algorithms
  {
    id: 'ml-optimization-adv',
    title: 'Advanced Optimization',
    parent: '31. Advanced Optimization',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          While SGD is the foundation, modern Deep Learning relies on adaptive optimization algorithms to converge faster and avoid local minima.
        </p>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
            <li><strong>AdamW:</strong> A variant of Adam that decouples weight decay from the gradient update. It is the standard for training Transformers.</li>
            <li><strong>Warm Restarts (Cosine Annealing):</strong> Periodically increasing the learning rate to help the model jump out of local minima and find better global solutions.</li>
            <li><strong>RAdam (Rectified Adam):</strong> Fixes the bad convergence of Adam in the early stages of training by rectifying the variance of the adaptive learning rate.</li>
        </ul>
        <CodeBlock language="python" code={`import torch.optim as optim

# Using AdamW with a specific learning rate and weight decay
optimizer = optim.AdamW(model.parameters(), lr=1e-3, weight_decay=0.01)

# Learning Rate Scheduler (Cosine Annealing)
scheduler = optim.lr_scheduler.CosineAnnealingWarmRestarts(optimizer, T_0=10)`} />
      </>
    )
  },

  // 32. Generative AI
  {
    id: 'ml-genai',
    title: 'Generative AI (2024-2025)',
    parent: '32. Generative AI',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Generative AI refers to models that can create new content (images, text, audio). It learns the underlying probability distribution of the data.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Core Architectures</h3>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
            <li><strong>GANs (Generative Adversarial Networks):</strong> Two networks competing. A <em>Generator</em> creates fakes, and a <em>Discriminator</em> tries to catch them. Nash Equilibrium is the goal.</li>
            <li><strong>Diffusion Models (Stable Diffusion):</strong> Learn to reverse a process of adding noise to an image. They generate high-quality images by iteratively "denoising" random static.</li>
            <li><strong>LLMs (Large Language Models):</strong> Transformers trained on massive text to predict the next token. Capable of reasoning, coding, and creative writing.</li>
        </ul>
        <p className="text-sm bg-blue-50 p-3 rounded border border-blue-100 text-blue-900">
            <strong>Prompt Engineering:</strong> The art of crafting inputs (prompts) to guide Generative AI models to produce the desired output effectively.
        </p>
      </>
    )
  },

  // 33. Vector Databases
  {
    id: 'ml-vectordb',
    title: 'Vector Databases',
    parent: '33. Vector Databases',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Vector Databases are designed to store and search unstructured data (text, images) via <strong>Vector Embeddings</strong>. They are critical for Semantic Search and RAG.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">How it works</h3>
        <ol className="list-decimal pl-5 space-y-2 mb-6 text-slate-700">
            <li>Data is converted to vectors using an Embedding Model (e.g., OpenAI embeddings).</li>
            <li>Vectors are stored in the DB (Pinecone, Weaviate, ChromaDB).</li>
            <li>Querying involves finding the "Nearest Neighbors" (most similar vectors) using metrics like Cosine Similarity.</li>
        </ol>
        <CodeBlock language="python" code={`import pinecone

# Connect to index
index = pinecone.Index("my-index")

# Upsert vectors (id, vector_values, metadata)
index.upsert([
    ("vec1", [0.1, 0.2, ...], {"category": "sports"}),
    ("vec2", [0.5, 0.8, ...], {"category": "finance"})
])

# Semantic Search
results = index.query(vector=[0.1, 0.2, ...], top_k=3)`} />
      </>
    )
  },

  // 34. RAG
  {
    id: 'ml-rag',
    title: 'Retrieval-Augmented Generation (RAG)',
    parent: '34. RAG',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>RAG</strong> combines the reasoning power of LLMs with specific, up-to-date proprietary data. It fixes LLM hallucinations and lack of recent knowledge.
        </p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`RAG Pipeline:

1. Ingestion: Documents -> Chunking -> Embedding -> Vector DB.

2. Retrieval: User Query -> Embedding -> Search Vector DB -> Get Top-K Contexts.

3. Generation:
   Prompt: "Answer the user query based ONLY on this context: [Retrieved Context]"
   LLM -> Final Accurate Answer.`}
        </pre>
        <p className="mb-4 text-slate-700">
            <strong>Reranking:</strong> An optimization step where retrieved documents are re-scored by a specialized model to ensure the most relevant chunks are fed to the LLM.
        </p>
      </>
    )
  },

  // 35. Data Quality
  {
    id: 'ml-data-quality',
    title: 'Data Quality & Governance',
    parent: '35. Data Quality',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Models are only as good as the data they consume. Data Governance ensures data is accurate, available, and secure.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Great Expectations (GX)</h3>
        <p className="mb-4">An open-source tool for validating, documenting, and profiling your data. It works by defining "Expectations" (tests) for your data.</p>
        <CodeBlock language="python" code={`import great_expectations as gx

df = gx.read_csv("data.csv")

# Define expectations
df.expect_column_values_to_be_between(
    column="age", min_value=0, max_value=120
)
df.expect_column_values_to_not_be_null(column="email")

# Validate
results = df.validate()`} />
        <p className="mb-4 text-slate-700"><strong>Data Lineage:</strong> Tracking the flow of data over time from source to destination. Essential for debugging ("Why is this dashboard wrong?").</p>
      </>
    )
  },

  // 36. Experiment Tracking
  {
    id: 'ml-experiment-tracking',
    title: 'Experiment Tracking',
    parent: '36. Experiment Tracking',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Data Science is iterative. Without tracking, you lose track of which combination of parameters produced the best model.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Tools: MLflow & Weights & Biases</h3>
        <p className="mb-4">These tools log every run's hyperparameters, metrics (accuracy, loss), and output artifacts (model files, plots).</p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`MLflow Dashboard allows you to compare runs:

Run ID | Learning Rate | Batch Size | Accuracy | Model Size
-------|---------------|------------|----------|-----------
a1b2   | 0.01          | 32         | 0.88     | 50MB
c3d4   | 0.001         | 64         | 0.92     | 50MB  <-- Winner`}
        </pre>
      </>
    )
  },

  // 37. Hyperparameter Optimization
  {
    id: 'ml-hyperparam-opt',
    title: 'Hyperparameter Search',
    parent: '37. Hyperparameter Search',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Finding the best hyperparameters manually is inefficient. Advanced automated search methods are preferred.
        </p>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
            <li><strong>Optuna:</strong> The most trending optimization framework. It uses TPE (Tree-structured Parzen Estimator) for Bayesian optimization and supports pruning (stopping bad trials early).</li>
            <li><strong>Population-Based Training (PBT):</strong> Trains a population of models in parallel, where poorly performing models copy weights from better performers and mutate their hyperparameters.</li>
        </ul>
        <CodeBlock language="python" code={`import optuna

def objective(trial):
    lr = trial.suggest_float("lr", 1e-5, 1e-1, log=True)
    depth = trial.suggest_int("depth", 2, 32)
    clf = RandomForest(max_depth=depth)
    return score(clf)

study = optuna.create_study(direction="maximize")
study.optimize(objective, n_trials=100)`} />
      </>
    )
  },

  // 38. Distributed Training
  {
    id: 'ml-distributed',
    title: 'Distributed Training',
    parent: '38. Distributed Training',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          When models or datasets are too large for a single GPU, we distribute the workload.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Paradigms</h3>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
            <li><strong>Data Parallelism (DDP):</strong> The model is replicated across all GPUs. Data is split into batches. Gradients are synchronized (averaged) across GPUs after each step. Most common.</li>
            <li><strong>Model Parallelism:</strong> The model is too big for one GPU RAM. Layers of the model are split across GPUs (e.g., GPU 0 holds layers 1-10, GPU 1 holds 11-20).</li>
        </ul>
        <p className="mb-4 text-slate-700"><strong>Horovod</strong> and <strong>PyTorch Distributed</strong> are standard libraries for this.</p>
      </>
    )
  }
];
