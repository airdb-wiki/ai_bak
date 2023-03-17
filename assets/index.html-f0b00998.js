import{_ as i,M as t,p as a,q as c,R as e,t as n,N as r,a1 as p}from"./framework-5866ffd3.js";const l={},s=e("h1",{id:"算法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#算法","aria-hidden":"true"},"#"),n(" 算法")],-1),d=e("p",null,"机器学习算法有很多，大概有，回归算法、基于实例的算法、正则化算法、决策树算法、贝叶斯算法、基于核的算法、聚类算法、关联规则学习、人工神经网络算法、深度学习算法、降低维度算法、集成算法，下面将几个常见的机器学习算法，进行详述：",-1),h=e("p",null,"决策树算法，根据数据的属性采用树状结构建立决策模型$常常用来解决分类和回归问题。 优点：计算量比较简单，解释性强，比较适合处理有缺失属性值的数据样本，能够处理不相关的特征。 缺点：容易过拟合（后续出现了随机森林，减小了过拟合现象）。",-1),_=e("p",null,"贝叶斯算法，基于贝叶斯定理的一类算法，主要用来解决分类和回归问题。 优点：对小规模的数据表现很好，适合多分类任务，适合增量式训练。 缺点：对输入数据的表达形式很敏感，对关联性强的特征表现不好。",-1),u={href:"https://www.zhihu.com/question/27306416",target:"_blank",rel:"noopener noreferrer"},A=p(`<h2 id="算法模型" tabindex="-1"><a class="header-anchor" href="#算法模型" aria-hidden="true">#</a> 算法模型</h2><ul><li><p>回归算法</p><pre><code>  线性回归
  逻辑回归
  多元自适应回归(MARS)
  本地散点平滑估计(LOESS)
</code></pre></li><li><p>基于实例的学习算法</p><pre><code>  K-邻近算法（KNN）
  学习矢量化（LVQ）
  自组织映射算法（SOM）
  局部加权学习算法（LWL）
</code></pre></li><li><p>正则化算法</p><pre><code>  岭回归（Ridge Regression）
  LASSO（Least Absolute Shrinkage and Selection Operator）
  Elastic Net
  最小角回归（LARS）
</code></pre></li><li><p>决策树算法</p><pre><code>  分类和回归树（CART）
  ID3算法(Iterative Dichotomiser 3)
  CHAID（Chi-squared Automatic Interaction Detection
  随机森林（Random Forest）
  多元自适应回归样条（MARS）
  梯度推进机（Gradient Boosting Machine， GBM）
</code></pre></li><li><p>贝叶斯算法</p><pre><code>  朴素贝叶斯
  高斯朴素贝叶斯
  多项式朴素贝叶斯
  AODE（Averaged One-Dependence Estimators）
  贝叶斯网络（Bayesian Belief Network）
</code></pre></li><li><p>基于核的算法</p><pre><code>  支持向量机（SVM）
  径向基函数（Radial Basis Function ，RBF)
  线性判别分析（Linear Discriminate Analysis ，LDA)
</code></pre></li><li><p>聚类算法</p><pre><code>  K-均值
  K-中位数
  EM算法
  分层聚类
</code></pre></li><li><p>关联规则学习</p><pre><code>  Apriori算法
  Eclat算法
</code></pre></li><li><p>神经网络</p><pre><code>  感知器
  反向传播算法（BP）
  Hopfield网络
  径向基函数网络（RBFN）
</code></pre></li><li><p>深度学习</p><pre><code>  深度玻尔兹曼机（DBM）
  卷积神经网络（CNN）
  递归神经网络（RNN、LSTM）
  栈式自编码算法（Stacked Auto-Encoder）
</code></pre></li><li><p>降维算法</p><pre><code>  主成分分析法（PCA）
  主成分回归（PCR）
  偏最小二乘回归（PLSR）
  萨蒙映射
  多维尺度分析法（MDS
  投影寻踪法（PP）
  线性判别分析法（LDA）
  混合判别分析法（MDA）
  二次判别分析法（QDA）
  灵活判别分析法（Flexible Discriminant Analysis，FDA
</code></pre></li><li><p>集成算法</p><pre><code>  Boosting
  Bagging
  AdaBoost
  堆叠泛化（混合）
  GBM 算法
  GBRT 算法
  随机森林
</code></pre></li><li><p>其他算法</p><pre><code>  特征选择算法
  性能评估算法
  自然语言处理
  计算机视觉
  推荐系统
  强化学习
  迁移学习
</code></pre></li></ul>`,2),m={href:"https://github.com/KeKe-Li/tutorial/blob/master/assets/src/",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"入门文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#入门文档","aria-hidden":"true"},"#"),n(" 入门文档")],-1),B={href:"http://mp.weixin.qq.com/s/fqjFjxwRwrDJ0JFAkHuZlA",target:"_blank",rel:"noopener noreferrer"};function D(R,S){const o=t("ExternalLinkIcon");return a(),c("div",null,[s,d,h,_,e("p",null,[n("朴素贝叶斯分类 "),e("a",u,[n("https://www.zhihu.com/question/27306416"),r(o)])]),A,e("p",null,[e("a",m,[n("来源"),r(o)])]),f,e("p",null,[e("a",B,[n("十大经典算法入门"),r(o)])])])}const x=i(l,[["render",D],["__file","index.html.vue"]]);export{x as default};
