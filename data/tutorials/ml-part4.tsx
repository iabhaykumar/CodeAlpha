
import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const ML_PART4_TOPICS: Topic[] = [
  // 12. Time Series Analysis
  {
    id: 'ml-ts-stationarity',
    title: 'Stationarity',
    parent: '12. Time Series Analysis',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          A time series is <strong>stationary</strong> if its statistical properties—mean, variance, and autocorrelation—are constant over time. Most statistical forecasting models (like ARIMA) assume the data is stationary.
        </p>
        <p className="mb-4">If data has a trend or seasonality, it is non-stationary. We make it stationary using <strong>differencing</strong> (subtracting the current value from the previous one) or transformations (log, sqrt).</p>
        <CodeBlock language="python" code={`from statsmodels.tsa.stattools import adfuller

# Augmented Dickey-Fuller Test
result = adfuller(timeseries_data)
print('ADF Statistic:', result[0])
print('p-value:', result[1])

# If p-value < 0.05, data is Stationary.`} />
      </>
    )
  },
  {
    id: 'ml-ts-arima',
    title: 'ARIMA & SARIMA',
    parent: '12. Time Series Analysis',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>ARIMA (AutoRegressive Integrated Moving Average)</strong> is a popular model for forecasting stationary time series. It is defined by three parameters `(p, d, q)`:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>AR (p):</strong> Uses past values to predict future values (Lag).</li>
            <li><strong>I (d):</strong> Number of differencing steps needed to make data stationary.</li>
            <li><strong>MA (q):</strong> Uses past forecast errors to predict future values.</li>
        </ul>
        <p className="mb-4"><strong>SARIMA</strong> adds seasonality support: `(p,d,q) x (P,D,Q,s)`.</p>
        <CodeBlock language="python" code={`from statsmodels.tsa.arima.model import ARIMA

# Train ARIMA(1, 1, 1) model
model = ARIMA(data, order=(1, 1, 1))
model_fit = model.fit()

# Forecast next 5 steps
forecast = model_fit.forecast(steps=5)
print(forecast)`} />
      </>
    )
  },
  {
    id: 'ml-ts-trend-season',
    title: 'Decomposition',
    parent: '12. Time Series Analysis',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Decomposition splits a time series into three components to better understand it:
        </p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`Observed Data = Trend + Seasonality + Residual (Noise)

/  /      /        _ _      . . .
  /  -->   /   +  u u u  +   . .
 /        /`}
        </pre>
        <CodeBlock language="python" code={`from statsmodels.tsa.seasonal import seasonal_decompose

# Decompose
result = seasonal_decompose(df['Sales'], model='additive', period=12)

# Plot components
result.plot()
plt.show()`} />
      </>
    )
  },
  {
    id: 'ml-ts-lstm',
    title: 'LSTM for Forecasting',
    parent: '12. Time Series Analysis',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>LSTM (Long Short-Term Memory)</strong> networks are a type of Recurrent Neural Network (RNN) capable of learning long-term dependencies. They are state-of-the-art for complex time series where non-linear patterns exist that ARIMA cannot capture.
        </p>
        <p className="mb-4">They solve the "vanishing gradient" problem of standard RNNs using a cell state and gates (input, output, forget).</p>
      </>
    )
  },

  // 13. Natural Language Processing (NLP)
  {
    id: 'ml-nlp-tokenization',
    title: 'Tokenization & Preprocessing',
    parent: '13. NLP',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Tokenization</strong> breaks text into smaller units (tokens), usually words or sub-words.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
  <li><strong>Stopwords:</strong> Common words (the, is, in) often removed to reduce noise.</li>
  <li><strong>Stemming:</strong> Chopping words to root (Running → Run). Fast but crude.</li>
  <li><strong>Lemmatization:</strong> Converting words to dictionary root (Better → Good). Slower but accurate.</li>
</ul>

        <CodeBlock language="python" code={`import nltk
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer

text = "CodeAlpha interns are learning fast!"
tokens = word_tokenize(text)
# ['CodeAlpha', 'interns', 'are', 'learning', 'fast', '!']

lemmatizer = WordNetLemmatizer()
print([lemmatizer.lemmatize(w) for w in tokens])
# ['CodeAlpha', 'intern', 'are', 'learning', 'fast', '!']`} />
      </>
    )
  },
  {
    id: 'ml-nlp-tfidf',
    title: 'TF-IDF',
    parent: '13. NLP',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>TF-IDF (Term Frequency-Inverse Document Frequency)</strong> reflects how important a word is to a document in a collection. It lowers the weight of common words (like "the") and increases the weight of unique keywords.
        </p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`TF(t) = (Count of term t in doc) / (Total terms in doc)
IDF(t) = log(Total docs / Docs with term t)
Score = TF * IDF`}
        </pre>
      </>
    )
  },
  {
    id: 'ml-nlp-word2vec',
    title: 'Word Embeddings (Word2Vec/GloVe)',
    parent: '13. NLP',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Embeddings map words to dense vectors of real numbers. Unlike BoW, they capture <strong>semantic meaning</strong>. Words with similar meanings are close in vector space.
        </p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`King - Man + Woman = Queen

[ 0.9 ]   [ 0.2 ]   [ 0.8 ]   [ 1.5 ]
[ 0.4 ] - [ 0.1 ] + [ 0.5 ] = [ 0.8 ]
[ 0.1 ]   [ 0.9 ]   [ 0.8 ]   [ 0.0 ]`}
        </pre>
      </>
    )
  },
  {
    id: 'ml-nlp-transformers',
    title: 'Transformers & Attention',
    parent: '13. NLP',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Transformers</strong> (like BERT, GPT) revolutionized NLP. They rely on the <strong>Self-Attention</strong> mechanism, which allows the model to weigh the importance of different words in a sentence relative to each other, regardless of their distance.
        </p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`Sentence: "The animal didn't cross the street because it was too tired."

Attention focuses heavily on linking "it" to "animal".
Standard RNNs struggle with this long-distance dependency.`}
        </pre>
      </>
    )
  },

  // 14. Deep Learning (Neural Networks)
  {
    id: 'ml-dl-basics',
    title: 'Neural Network Architecture',
    parent: '14. Deep Learning',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          An <strong>Artificial Neural Network (ANN)</strong> consists of layers of nodes (neurons).
        </p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`   (Input)    (Hidden)    (Output)
     O --------- O
                 | \
     O --------- O --\ 
                 |    --- O (Prediction)
     O --------- O --/
                 | /
     O --------- O`}
        </pre>
        <ul className="list-disc pl-5 space-y-2 mb-4">
  <li><strong>Forward Propagation:</strong> Input → Hidden Layers → Output.</li>
  <li><strong>Loss Function:</strong> Calculates error (e.g., MSE, Cross-Entropy).</li>
  <li><strong>Backpropagation:</strong> Calculates gradients (derivatives) of error w.r.t weights.</li>
  <li><strong>Optimizer:</strong> Updates weights to minimize error (e.g., SGD, Adam).</li>
</ul>

      </>
    )
  },
  {
    id: 'ml-dl-activation',
    title: 'Activation Functions',
    parent: '14. Deep Learning',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Activation functions introduce <strong>non-linearity</strong>, allowing the network to learn complex patterns.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>ReLU:</strong> `max(0, x)`. Default for hidden layers. Fast and avoids vanishing gradients.</li>
            <li><strong>Sigmoid:</strong> `1 / (1 + e^-x)`. Outputs 0 to 1. Used for binary classification.</li>
            <li><strong>Softmax:</strong> Converts vector to probabilities summing to 1. Used for multi-class output.</li>
        </ul>
      </>
    )
  },

  // 15. Computer Vision (DEEP DETAILS)
  {
    id: 'ml-cv-cnn',
    title: 'CNN Architecture',
    parent: '15. Computer Vision',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Convolutional Neural Networks (CNNs)</strong> are the backbone of modern computer vision. They are specifically designed to process pixel data by preserving the spatial relationship between pixels.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Core Components</h3>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
            <li>
                <strong>Convolution Layer:</strong> Applies filters (kernels) to the input image to extract features like edges, textures, and patterns. Each filter produces a "Feature Map".
                <br/><code className="text-xs bg-slate-100 p-1">Output Size = (Input - Filter + 2*Padding)/Stride + 1</code>
            </li>
            <li>
                <strong>ReLU Layer:</strong> Applied after convolution to introduce non-linearity, ensuring the model can learn complex boundaries.
            </li>
            <li>
                <strong>Fully Connected (Dense) Layer:</strong> The final layers where high-level features are flattened and used for classification probabilities.
            </li>
        </ul>
        <CodeBlock language="python" code={`import tensorflow as tf
from tensorflow.keras import layers, models

model = models.Sequential()
# 32 filters of size 3x3, ReLU activation
model.add(layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)))
# Output: Feature Maps detecting simple edges`} />
      </>
    )
  },
  {
    id: 'ml-cv-pooling-padding',
    title: 'Pooling & Padding',
    parent: '15. Computer Vision',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          These operations manage the dimensions of feature maps and control overfitting.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Pooling (Downsampling)</h3>
        <p className="mb-4">Reduces the spatial size of the representation to reduce parameters and computation. It also provides <strong>translational invariance</strong> (features can be anywhere in the image).</p>
        <pre className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 my-6 font-mono">
{`Max Pooling (2x2):
[ 1  3 ]  [ 2  9 ]      [ 3  9 ]
[ 2  1 ]  [ 1  1 ]  ->  [ 2  8 ]
[ 0  2 ]  [ 8  4 ]
[ 1  0 ]  [ 3  2 ]

Taking the maximum value from each 2x2 window.`}
        </pre>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Padding</h3>
        <p className="mb-4">
            <strong>Valid Padding:</strong> No padding. Output shrinks with every convolution.
            <br/>
            <strong>Same Padding:</strong> Adds zeros around the border so output size equals input size. Important for deep networks to prevent the image from vanishing.
        </p>
      </>
    )
  },
  {
    id: 'ml-cv-yolo',
    title: 'Object Detection (YOLO)',
    parent: '15. Computer Vision',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>YOLO (You Only Look Once)</strong> revolutionized object detection by treating it as a single regression problem, rather than a classification task on thousands of region proposals (like R-CNN).
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">How YOLO Works</h3>
        <ol className="list-decimal pl-5 space-y-2 mb-6 text-slate-700">
            <li><strong>Grid Division:</strong> Splits the image into an `S x S` grid.</li>
            <li><strong>Bounding Box Prediction:</strong> Each grid cell predicts `B` bounding boxes and confidence scores. Box = `(x, y, w, h, confidence)`.</li>
            <li><strong>Class Prediction:</strong> Each cell also predicts conditional class probabilities.</li>
            <li><strong>Non-Max Suppression (NMS):</strong> Removes duplicate boxes pointing to the same object, keeping only the one with the highest confidence.</li>
        </ol>
        <p className="text-sm bg-blue-50 p-3 rounded border border-blue-100 text-blue-900">
  <strong>IoU (Intersection over Union):</strong> The metric used to measure overlap between predicted box and ground truth. 
  IoU &gt; 0.5 usually counts as a hit.
</p>

      </>
    )
  },
  {
    id: 'ml-cv-augmentation',
    title: 'Data Augmentation',
    parent: '15. Computer Vision',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Deep learning models require massive amounts of data. Augmentation artificially expands the training dataset by creating modified versions of images. This teaches the model <strong>invariance</strong> to rotation, scale, and lighting.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Geometric:</strong> Rotation, Flip, Zoom, Shear, Translation.</li>
            <li><strong>Color Space:</strong> Brightness, Contrast, Saturation changes.</li>
            <li><strong>Noise Injection:</strong> Adding Gaussian noise to make the model robust.</li>
        </ul>
        <CodeBlock language="python" code={`from tensorflow.keras.preprocessing.image import ImageDataGenerator

datagen = ImageDataGenerator(
    rotation_range=40,
    width_shift_range=0.2,
    height_shift_range=0.2,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True,
    fill_mode='nearest'
)

# This generator will output indefinitely batches of augmented images
i = 0
for batch in datagen.flow(img, batch_size=1):
    # save or use batch
    i += 1
    if i > 20: break`} />
      </>
    )
  },

  // 16. Deep Learning Frameworks (DEEP DETAILS)
  {
    id: 'ml-frameworks-tf-keras',
    title: 'TensorFlow & Keras',
    parent: '16. Deep Learning Frameworks',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>TensorFlow (Google)</strong> is an end-to-end open source platform for machine learning. <strong>Keras</strong> is the high-level API built on top of TensorFlow, designed for human beings, not machines.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Key Characteristics</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Static vs Eager:</strong> TF 1.x used static computational graphs (define then run). TF 2.x uses Eager Execution (run immediately like Python), making debugging much easier.</li>
            <li><strong>Production Ready:</strong> Ecosystem includes TF Serving (deployment), TF Lite (mobile), and TF.js (browser).</li>
        </ul>
        <CodeBlock language="python" code={`import tensorflow as tf

# Functional API (More flexible than Sequential)
inputs = tf.keras.Input(shape=(32,))
x = tf.keras.layers.Dense(64, activation='relu')(inputs)
x = tf.keras.layers.Dense(64, activation='relu')(x)
outputs = tf.keras.layers.Dense(10, activation='softmax')(x)

model = tf.keras.Model(inputs=inputs, outputs=outputs)
model.compile(optimizer='adam', loss='categorical_crossentropy')`} />
      </>
    )
  },
  {
    id: 'ml-frameworks-pytorch',
    title: 'PyTorch',
    parent: '16. Deep Learning Frameworks',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>PyTorch (Meta)</strong> has become the favorite for researchers due to its dynamic computational graph and "Pythonic" nature.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Why PyTorch?</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Dynamic Graphs:</strong> You can change the graph structure on the fly (e.g., variable length inputs in RNNs).</li>
            <li><strong>Debugging:</strong> You can use standard Python debuggers (pdb) directly.</li>
        </ul>
        <CodeBlock language="python" code={`import torch
import torch.nn as nn
import torch.nn.functional as F

class SimpleNet(nn.Module):
    def __init__(self):
        super(SimpleNet, self).__init__()
        self.fc1 = nn.Linear(32, 64)
        self.fc2 = nn.Linear(64, 10)

    def forward(self, x):
        x = F.relu(self.fc1(x))
        x = self.fc2(x)
        return x

model = SimpleNet()
print(model)`} />
      </>
    )
  },
  {
    id: 'ml-frameworks-huggingface',
    title: 'HuggingFace Transformers',
    parent: '16. Deep Learning Frameworks',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>HuggingFace</strong> is the "GitHub of Machine Learning". Their <strong>Transformers</strong> library provides thousands of pre-trained models (BERT, GPT, RoBERTa) that can be fine-tuned for specific tasks with minimal code.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Pipeline API</h3>
        <p className="mb-4">The easiest way to use models for inference.</p>
        <CodeBlock language="python" code={`from transformers import pipeline

# 1. Sentiment Analysis
classifier = pipeline("sentiment-analysis")
result = classifier("I love learning Machine Learning at CodeAlpha!")
print(result) 
# [{'label': 'POSITIVE', 'score': 0.999}]

# 2. Text Generation (GPT-2)
generator = pipeline("text-generation", model="gpt2")
print(generator("The future of AI is", max_length=30))`} />
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Tokenizers</h3>
        <p className="mb-4">HuggingFace also provides fast, efficient tokenizers that handle preprocessing (padding, truncation, vocab mapping) automatically.</p>
      </>
    )
  }
];
