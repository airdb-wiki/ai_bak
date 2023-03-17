# Fine Tuning

## 什么是 fine-tuning？

Fine-tuning（微调）是一种迁移学习方法，它可以加快并优化模型的学习效率。迁移学习考虑到大部分数据或任务都存在相关性，所以通过迁移学习我们可以将已经学到的模型参数（也可理解为模型学到的知识）通过某种方式来分享给新模型[1]。在实践中，由于数据集不够大，很少有人从头开始训练网络。常见的做法是使用预训练的网络（例如在ImageNet上训练的分类1000类的网络）来重新fine-tuning（也叫微调），或者当做特征提取器[3]。

当训练数据集较小（小于参数数量）时，直接训练CNN可能会导致过拟合，从而影响模型的泛化能力。因此，在实践中更经常的做法是通过对我们拥有的较小数据集进行训练（即反向传播），对现有网络进行微调。这些网络通常是在像ImageNet这样的大型数据集上进行训练的[2]。通过使用预训练的网络并进行微调，可以借用已经学到的知识提高新模型的性能。

## Reference

[1] "要了解什么是Fine-tuning（微调），就要先提到迁移学习概念。 迁移学习 考虑到大部分数据或任务都是存在相关性的，所以通过迁移学习我们可以将已经学到的模型参数（也可理解为模型学到的知识）通过某种方式来分享给新模型从而加快并优化模型的学习效率不 ..."
URL: <https://www.zhihu.com/question/24458804>

[2] "在小数据集（小于参数数量）上训练CNN会极大地影响CNN泛化的能力，通常会导致过度拟合。. 因此，在实践中更经常的是，通过对我们拥有的较小数据集进行训练（即反向传播），对现有网络进行微调，这些网络是在像ImageNet这样的大型数据集上进行训练的，以 ..."
URL: <https://zhuanlan.zhihu.com/p/35890660>

[3] "什么是fine-tuning？ 在实践中，由于数据集不够大，很少有人从头开始训练网络。常见的做法是使用预训练的网络（例如在ImageNet上训练的分类1000类的网络）来重新fine-tuning（也叫微调），或者当做特征提取器。 以下是常见的两类迁移学习场景：1 卷积网络当做特征提取器。"
URL: <https://blog.csdn.net/weixin_42137700/article/details/82107208>