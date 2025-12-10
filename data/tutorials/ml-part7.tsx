
import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const ML_PART7_TOPICS: Topic[] = [
  // 39. Production Data Pipelines
  {
    id: 'ml-pipelines-prod',
    title: 'Production Data Pipelines',
    parent: '39. Production Pipelines',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Robust data pipelines are the circulatory system of ML applications. They ensure data moves reliably from source to model.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Batch vs Streaming</h3>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
          <li><strong>Batch Processing (Apache Airflow):</strong> Data is processed in large chunks at scheduled intervals (e.g., every midnight). Good for reporting and retraining.</li>
          <li><strong>Streaming Processing (Apache Kafka):</strong> Data is processed event-by-event in real-time. Essential for fraud detection or live recommendations.</li>
        </ul>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
          {`Kafka Architecture:
[ Producer ] -> (Topic: "user_clicks") -> [ Consumer Group (ML Model) ]`}
        </pre>
      </>
    )
  },

  // 40. Real-time Machine Learning
  {
    id: 'ml-realtime',
    title: 'Real-time Machine Learning',
    parent: '40. Real-time ML',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Real-time ML requires the system to ingest data, featurize it, and generate a prediction within milliseconds.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Challenges</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
          <li><strong>Latency:</strong> Prediction API must respond &lt; 100ms.</li>
          <li><strong>Feature Availability:</strong> Features like "number of clicks in last 5 min" must be computed instantly (using tools like Redis or Flink).</li>
          <li><strong>Online Learning:</strong> Updating the model incrementally as new data arrives (risky but powerful).</li>
        </ul>

      </>
    )
  },

  // 41. Drift Handling
  {
    id: 'ml-drift-handling',
    title: 'Drift Detection & Handling',
    parent: '41. Data & Model Drift',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          When the world changes, models break. Handling drift is about detecting these changes and responding.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Strategies</h3>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
          <li><strong>Detection:</strong> Use statistical distances (KL Divergence, Wasserstein Distance) to compare the live data distribution against the reference training distribution.</li>
          <li><strong>Retraining Schedules:</strong>
            <ul className="list-circle pl-5 mt-1 text-sm">
              <li><em>Periodic:</em> Retrain every week/month.</li>
              <li><em>Trigger-based:</em> Retrain when drift metric crosses a threshold.</li>
            </ul>
          </li>
        </ul>
      </>
    )
  },

  // 42. Synthetic Data Generation
  {
    id: 'ml-synthetic-data',
    title: 'Synthetic Data Generation',
    parent: '42. Synthetic Data',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Synthetic data is artificially generated data that mimics real-world data properties. It is crucial when real data is scarce, expensive, or sensitive (GDPR/HIPAA).
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Techniques</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
          <li><strong>GANs (CTGAN):</strong> Conditional Tabular GANs learn the distribution of rows and columns to generate new, statistically valid table rows.</li>
          <li><strong>Privacy-Safe Models:</strong> Generating data that retains statistical utility without exposing any individual's private information.</li>
        </ul>
      </>
    )
  },

  // 43. ML Security
  {
    id: 'ml-security',
    title: 'Adversarial ML & Security',
    parent: '43. ML Security',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          ML models are vulnerable to specific types of attacks.
        </p>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
          <li><strong>Adversarial Attacks:</strong> Adding invisible noise to an image that tricks the model (e.g., classifying a Panda as a Gibbon with 99% confidence).</li>
          <li><strong>Poisoning Attacks:</strong> Injecting bad data into the training set to corrupt the model's behavior (creating a "backdoor").</li>
          <li><strong>Model Stealing:</strong> Querying a model enough times to reverse-engineer its parameters.</li>
        </ul>
        <p className="text-sm text-slate-600"><strong>Defense:</strong> Adversarial training (training on attacked examples) and input sanitization.</p>
      </>
    )
  },

  // 44. Knowledge Graphs
  {
    id: 'ml-knowledge-graphs',
    title: 'Knowledge Graphs & GNNs',
    parent: '44. Graph ML',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Knowledge Graphs</strong> represent data as a network of entities (nodes) and relationships (edges). <strong>Graph Neural Networks (GNNs)</strong> are Deep Learning models designed to learn from this graph structure.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Graph Embeddings (Node2Vec)</h3>
        <p className="mb-4">Just like Word2Vec maps words to vectors, Node2Vec maps graph nodes to vectors based on their connectivity. Nodes that are connected or structurally similar end up close in vector space.</p>
        <p className="mb-4"><strong>Applications:</strong> Fraud detection (rings of criminals), Social recommendations, Drug discovery.</p>
      </>
    )
  },

  // 45. Advanced NLP
  {
    id: 'ml-nlp-advanced',
    title: 'Advanced NLP (Transformers)',
    parent: '45. Advanced NLP',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Modern NLP is dominated by the <strong>Transformer</strong> architecture. It relies on the "Attention Mechanism" to weigh the relevance of different words.
        </p>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
          <li><strong>BERT (Encoder-only):</strong> Bidirectional. Reads text forward and backward. Best for <em>understanding</em> (Classification, NER, Q&A).</li>
          <li><strong>GPT (Decoder-only):</strong> Unidirectional. Predicts the next word. Best for <em>generation</em>.</li>
          <li><strong>T5 (Encoder-Decoder):</strong> Converts every NLP problem into a text-to-text format.</li>
        </ul>
        <CodeBlock language="python" code={`from transformers import BertTokenizer, BertModel

tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertModel.from_pretrained('bert-base-uncased')

text = "Replace me by any text you'd like."
encoded_input = tokenizer(text, return_tensors='pt')
output = model(**encoded_input)`} />
      </>
    )
  },

  // 46. Recommendation Systems
  {
    id: 'ml-recsys',
    title: 'Recommendation Systems',
    parent: '46. Recommendation Systems',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Systems that predict user preference for items.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Techniques</h3>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
          <li><strong>Collaborative Filtering:</strong> "Users who liked X also liked Y." Uses User-Item interaction matrix.
            <br /><em>Matrix Factorization:</em> Decomposes the huge matrix into user vectors and item vectors.</li>
          <li><strong>Content-Based Filtering:</strong> "You liked X, so you will like Z because it has similar tags/genre."</li>
          <li><strong>Hybrid Models:</strong> Combines both approaches (used by Netflix/YouTube).</li>
        </ul>
      </>
    )
  },

  // 47. Deployment Strategies
  {
    id: 'ml-deploy-strategies',
    title: 'Deployment Strategies',
    parent: '47. Deployment',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Safely releasing models to production.
        </p>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
          <li><strong>A/B Testing:</strong> Route 50% users to Model A (Control) and 50% to Model B (Test). Compare metrics statistically.</li>
          <li><strong>Canary Release:</strong> Route a small % (e.g., 1%) to the new model. If no errors, gradually increase to 100%.</li>
          <li><strong>Blue/Green Deployment:</strong> Maintain two identical environments. Blue is live. Deploy to Green. Switch router to Green instantly. If it fails, switch back.</li>
          <li><strong>Shadow Deployment:</strong> Run the new model in parallel with the old one. It receives traffic but its predictions are not shown to users. Used for testing performance safely.</li>
        </ul>
      </>
    )
  },

  // 48. ML in Edge Devices
  {
    id: 'ml-edge',
    title: 'ML on Edge (TinyML)',
    parent: '48. Edge AI',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Running ML models directly on devices (Phones, IoT, Raspberry Pi) rather than the cloud.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Optimization Techniques</h3>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
          <li><strong>Quantization:</strong> Converting model weights from 32-bit floats (FP32) to 8-bit integers (INT8). Reduces size by 4x and speeds up inference with minimal accuracy loss.</li>
          <li><strong>Pruning:</strong> Removing connections (weights) that are close to zero. Makes the model "sparse".</li>
          <li><strong>Distillation:</strong> Training a small "Student" network to mimic the outputs of a large "Teacher" network.</li>
        </ul>
        <CodeBlock language="python" code={`# TensorFlow Lite Conversion with Quantization
import tensorflow as tf

converter = tf.lite.TFLiteConverter.from_saved_model(saved_model_dir)
converter.optimizations = [tf.lite.Optimize.DEFAULT]
tflite_quant_model = converter.convert()`} />
      </>
    )
  }
];
