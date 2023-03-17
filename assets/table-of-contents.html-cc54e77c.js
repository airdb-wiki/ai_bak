import{_ as e,p as a,q as n,a1 as i}from"./framework-5866ffd3.js";const t={},r=i(`<h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h1><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of Contents</h2><h2 id="preface" tabindex="-1"><a class="header-anchor" href="#preface" aria-hidden="true">#</a> Preface</h2><p>[Page 18-30, 12]</p><pre><code>What this book covers
What you need for this book
Who this book is for
Conventions
Reader feedback
Customer support
	Downloading the example code
	Downloading the color images of this book
	Errata
	Piracy
	Questions
</code></pre><h2 id="chapter-01-gathering-and-organizing-data" tabindex="-1"><a class="header-anchor" href="#chapter-01-gathering-and-organizing-data" aria-hidden="true">#</a> Chapter 01. Gathering and Organizing Data</h2><p>[Page 31-69, 38]</p><pre><code>Handling data - Gopher style
Best practices for gathering and organizing data with Go
CSV files
	Reading in CSV data from a file
	Handling unexpected fields
	Handling unexpected types
	Manipulating
	CSV data with data frames
JSON
	Parsing JSON
	JSON output
SQL-like databases
	Connecting to an SQL database
	Querying the database
	Modifying the database
Caching
	Caching data in memory
	Caching data locally on disk
	Data versioning
	Pachyderm jargon
	Deploying/installing Pachyderm
	Creating data repositories for data versioning
	Putting data into data repositories
	Getting data out of versioned data repositories
References
Summary
</code></pre><h2 id="chapter-2-matrices-probability-and-statistics" tabindex="-1"><a class="header-anchor" href="#chapter-2-matrices-probability-and-statistics" aria-hidden="true">#</a> Chapter 2. Matrices, Probability, and Statistics</h2><p>[Page 70-105, 35]</p><pre><code>Matrices and vectors
	Vectors
	Vector operations
	Matrices
	Matrix operations
Statistics
	Distributions
	Statistical measures
		Measures of central tendency
		Measures of spread or dispersion
	Visualizing distributions
		Histograms
		Box plotsProbabilityRandom variablesProbability measuresIndependent and conditional probabilityHypothesis testingTest statisticsCalculating p-valuesReferencesSummary
</code></pre><h2 id="chapter-3-evaluation-and-validation" tabindex="-1"><a class="header-anchor" href="#chapter-3-evaluation-and-validation" aria-hidden="true">#</a> Chapter 3. Evaluation and Validation</h2><p>[Page 105-131, 26]</p><pre><code>EvaluationContinuous metricsCategorical metricsIndividual evaluation metrics for categorical variablesConfusion matrices, AUC, and ROCValidationTraining and test setsHoldout setCross validationReferencesSummary
</code></pre><h2 id="chapter-4-regression" tabindex="-1"><a class="header-anchor" href="#chapter-4-regression" aria-hidden="true">#</a> Chapter 4. Regression</h2><p>[Page 132-165, 33]</p><pre><code>Understanding regression model jargonLinear regressionOverview of linear regressionLinear regression assumptions and pitfallsLinear regression example
Profiling the dataChoosing our independent variableCreating our training and test setsTraining our modelEvaluating the trained modelMultiple linear regressionNonlinear and other types of regressionReferencesSummary
</code></pre><h2 id="chapter-5-classification" tabindex="-1"><a class="header-anchor" href="#chapter-5-classification" aria-hidden="true">#</a> Chapter 5. Classification</h2><p>[Page 166-205, 39]</p><pre><code>Understanding classification model jargonLogistic regressionOverview of logistic regressionLogistic regression assumptions and pitfallsLogistic regression exampleCleaning and profiling the dataCreating our training and test setsTraining and testing the logistic regression modelk-nearest neighborsOverview of kNNkNN assumptions and pitfallskNN exampleDecision trees and random forestsOverview of decision trees and random forestsDecision tree and random forest assumptions and pitfallsDecision tree exampleRandom forest exampleNaive bayesOverview of naive bayes and its big assumptionNaive bayes exampleReferencesSummary
</code></pre><h2 id="chapter-6-clustering" tabindex="-1"><a class="header-anchor" href="#chapter-6-clustering" aria-hidden="true">#</a> Chapter 6. Clustering</h2><p>[Page 206-234, 28]</p><pre><code>Understanding clustering model jargonMeasuring Distance or SimilarityEvaluating clustering techniquesInternal clustering evaluationExternal clustering evaluationk-means clusteringOverview of k-means clusteringk-means assumptions and pitfalls
</code></pre><p>k-means clustering exampleProfiling the dataGenerating clusters with k-meansEvaluating the generated clustersOther clustering techniquesReferencesSummary</p><h2 id="chapter-7-time-series-and-anomaly-detection" tabindex="-1"><a class="header-anchor" href="#chapter-7-time-series-and-anomaly-detection" aria-hidden="true">#</a> Chapter 7. Time Series and Anomaly Detection</h2><p>[Page 235-267, 32]</p><pre><code>Representing time series data in GoUnderstanding time series jargonStatistics related to time seriesAutocorrelationPartial autocorrelationAuto-regressive models for forecastingAuto-regressive model overviewAuto-regressive model assumptions and pitfallsAuto-regressive model exampleTransforming to a stationary seriesAnalyzing the ACF and choosing an AR orderFitting and evaluating an AR(2) modelAuto-regressive moving averages and other time series modelsAnomaly detectionReferencesSummary
</code></pre><h2 id="chapter-8-neural-networks-and-deep-learning" tabindex="-1"><a class="header-anchor" href="#chapter-8-neural-networks-and-deep-learning" aria-hidden="true">#</a> Chapter 8. Neural Networks and Deep Learning</h2><p>[Page 268-301, 33] Understanding neural net jargonBuilding a simple neural networkNodes in the networkNetwork architectureWhy do we expect this architecture to work?Training our neural networkUtilizing the simple neural networkTraining the neural network on real dataEvaluating the neural networkIntroducing deep learningWhat is a deep learning model?Deep learning with GoSetting up TensorFlow for use with GoRetrieving and calling a pretrained TensorFlow modelObject detection using TensorFlow from GoReferences Summary</p><h2 id="chapter-9-deploying-and-distributing-analyses-and-models" tabindex="-1"><a class="header-anchor" href="#chapter-9-deploying-and-distributing-analyses-and-models" aria-hidden="true">#</a> Chapter 9. Deploying and Distributing Analyses and Models</h2><p>[Page 302-341, 39]</p><pre><code>Running models reliably on remote machinesA brief introduction to Docker and Docker jargonDocker-izing a machine learning applicationDocker-izing the model training and exportDocker-izing model predictionsTesting the Docker images locallyRunning the Docker images on remote machinesBuilding a scalable and reproducible machine learning pipelineSetting up a Pachyderm and Kubernetes clusterBuilding a Pachyderm machine learning pipelineCreating and filling the input repositoriesCreating and running the processing stagesUpdating pipelines and examining provenanceScaling pipeline stagesReferencesSummary
</code></pre><h2 id="chapter-10-algorithms-techniques-related-to-machine-learning" tabindex="-1"><a class="header-anchor" href="#chapter-10-algorithms-techniques-related-to-machine-learning" aria-hidden="true">#</a> Chapter 10. Algorithms/Techniques Related to Machine Learning</h2><p>[Page 342-351, 9] Gradient descentEntropy, information gain, and related methodsBackpropagation</p>`,34),s=[r];function o(d,l){return a(),n("div",null,s)}const g=e(t,[["render",o],["__file","table-of-contents.html.vue"]]);export{g as default};
