import BlogPostWrapper from "../../components/blogs/BlogPostWrapper";

// All blog posts data
const ALL_POSTS = {
  'linear-regression': {
    title: 'Where Did The Assumptions of Linear Regression Originate From?',
    subtitle: 'The most extensive and in-depth guide to linear regression.',
    available: true,
    headings: [
      { id: 'introduction', text: 'Introduction', level: 2 },
      { id: 'linear-regression-walkthrough', text: 'Linear Regression (A quick walkthrough)', level: 2 },
      { id: 'what-do-we-minimize', text: 'What do we minimize and why?', level: 3 },
      { id: 'common-variations', text: 'Common variations of linear regression', level: 3 },
      { id: 'assumptions', text: 'Assumptions of linear regression', level: 2 },
      { id: 'assumption-1', text: 'Assumption #1: Linearity', level: 3 },
      { id: 'assumption-2', text: 'Assumption #2: Normal distribution of error', level: 3 },
      { id: 'assumption-3', text: 'Assumption #3: Homoscedasticity', level: 3 },
      { id: 'assumption-4', text: 'Assumption #4: No Autocorrelation', level: 3 },
      { id: 'assumption-5', text: 'Assumption #5: No Multicollinearity', level: 3 },
      { id: 'origin-of-assumptions', text: 'The origin of assumptions', level: 2 },
      { id: 'data-generation-process', text: 'The assumed data generation process', level: 3 },
    ],
  },
  'logistic-regression': { title: 'Logistic Regression', available: false },
  'svm': { title: 'Support Vector Machines', available: false },
  'decision-trees': { title: 'Decision Trees', available: false },
  'random-forest': { title: 'Random Forest', available: false },
  'adaboost': { title: 'AdaBoost', available: false },
  'xgboost': { title: 'XGBoost', available: false },
  'pca': { title: 'PCA', available: false },
  'neural-networks': { title: 'Neural Networks', available: false },
  'deep-architectures': { title: 'Deep Architectures', available: false },
  'optimization-techniques': { title: 'Optimization Techniques', available: false },
  'transfer-learning': { title: 'Transfer Learning', available: false },
  'generative-models': { title: 'Generative Models', available: false },
  'deep-reinforcement-learning': { title: 'Deep Reinforcement Learning', available: false },
  'text-preprocessing': { title: 'Text Preprocessing', available: false },
  'language-models': { title: 'Language Models', available: false },
  'text-classification': { title: 'Text Classification', available: false },
  'machine-translation': { title: 'Machine Translation', available: false },
  'speech-recognition': { title: 'Speech Recognition', available: false },
  'text-generation': { title: 'Text Generation', available: false },
};

// Generate static params for all blog posts at build time
export function generateStaticParams() {
  return Object.keys(ALL_POSTS).map(slug => ({ slug }));
}

export default function BlogPostPage({ params }) {
  const currentSlug = params.slug;
  const post = ALL_POSTS[currentSlug] || { title: 'Post Not Found', available: false };
  const headings = post.headings || [];

  // Show Coming Soon for unavailable posts
  if (!post.available) {
    return (
      <BlogPostWrapper currentSlug={currentSlug} headings={[]}>
        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight pr-12">
          {post.title}
        </h1>

        <div className="flex flex-col items-center justify-center py-20">
          <div className="text-6xl mb-6">📝</div>
          <h2 className="text-2xl font-semibold text-slate-300 mb-4">Coming Soon</h2>
          <p className="text-slate-400 text-center max-w-md">
            This article is currently being written. Check back soon for an in-depth exploration of {post.title}.
          </p>
        </div>
      </BlogPostWrapper>
    );
  }

  // Show actual content for available posts
  return (
    <BlogPostWrapper currentSlug={currentSlug} headings={headings}>
      {/* Title */}
      <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight pr-12">
        {post.title}
      </h1>

      {/* Subtitle */}
      {post.subtitle && (
        <p className="text-lg text-slate-300 mb-8">
          {post.subtitle}
        </p>
      )}

      {/* Content */}
      <div className="prose prose-invert prose-slate max-w-none">
        <h2 id="introduction" className="text-2xl font-bold text-white mt-10 mb-4 scroll-mt-24">
          Introduction
        </h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          The first algorithm that every machine learning course teaches is linear regression.
          It&apos;s undoubtedly one of the most fundamental and widely used algorithms in statistics
          and machine learning.
        </p>
        <p className="text-slate-300 leading-relaxed mb-4">
          This is primarily because of its simplicity and ease of interpretation. However,
          despite its prevalence, there is often a surprising oversight – understanding the
          assumptions that ensure the effectiveness of linear regression.
        </p>
        <p className="text-slate-300 leading-relaxed mb-4">
          In other words, linear regression is only effective when certain assumptions are validated.
          We must revisit the model (or data) if the assumptions are violated.
        </p>

        <h2 id="linear-regression-walkthrough" className="text-2xl font-bold text-white mt-10 mb-4 scroll-mt-24">
          Linear Regression (A quick walkthrough)
        </h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Linear regression models the relationship between a dependent variable and one or
          more independent variables by fitting a linear equation to observed data.
        </p>

        <h3 id="what-do-we-minimize" className="text-xl font-semibold text-white mt-8 mb-3 scroll-mt-24">
          What do we minimize and why?
        </h3>
        <p className="text-slate-300 leading-relaxed mb-4">
          We minimize the sum of squared residuals (SSR) to find the best-fit line. This approach
          gives us the ordinary least squares (OLS) estimator.
        </p>

        <h3 id="common-variations" className="text-xl font-semibold text-white mt-8 mb-3 scroll-mt-24">
          Common variations of linear regression
        </h3>
        <p className="text-slate-300 leading-relaxed mb-4">
          There are several variations including Ridge Regression (L2), Lasso Regression (L1),
          and Elastic Net which combines both.
        </p>

        <h2 id="assumptions" className="text-2xl font-bold text-white mt-10 mb-4 scroll-mt-24">
          Assumptions of linear regression
        </h2>

        <h3 id="assumption-1" className="text-xl font-semibold text-white mt-8 mb-3 scroll-mt-24">
          Assumption #1: Linearity
        </h3>
        <p className="text-slate-300 leading-relaxed mb-4">
          The relationship between the independent and dependent variables must be linear.
        </p>

        <h3 id="assumption-2" className="text-xl font-semibold text-white mt-8 mb-3 scroll-mt-24">
          Assumption #2: Normal distribution of error
        </h3>
        <p className="text-slate-300 leading-relaxed mb-4">
          The residuals should follow a normal distribution for valid hypothesis testing.
        </p>

        <h3 id="assumption-3" className="text-xl font-semibold text-white mt-8 mb-3 scroll-mt-24">
          Assumption #3: Homoscedasticity
        </h3>
        <p className="text-slate-300 leading-relaxed mb-4">
          The variance of residuals should be constant across all levels of the independent variables.
        </p>

        <h3 id="assumption-4" className="text-xl font-semibold text-white mt-8 mb-3 scroll-mt-24">
          Assumption #4: No Autocorrelation
        </h3>
        <p className="text-slate-300 leading-relaxed mb-4">
          The residuals should be independent of each other, especially important in time series.
        </p>

        <h3 id="assumption-5" className="text-xl font-semibold text-white mt-8 mb-3 scroll-mt-24">
          Assumption #5: No Multicollinearity
        </h3>
        <p className="text-slate-300 leading-relaxed mb-4">
          Independent variables should not be highly correlated with each other.
        </p>

        <h2 id="origin-of-assumptions" className="text-2xl font-bold text-white mt-10 mb-4 scroll-mt-24">
          The origin of assumptions
        </h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Understanding where these assumptions come from helps us better apply linear regression.
        </p>

        <h3 id="data-generation-process" className="text-xl font-semibold text-white mt-8 mb-3 scroll-mt-24">
          The assumed data generation process
        </h3>
        <p className="text-slate-300 leading-relaxed mb-4">
          The assumptions stem from how we believe the data was generated in the real world.
        </p>
      </div>
    </BlogPostWrapper>
  );
}
