const BlogPost = require('../models/BlogPost');

// @desc    Get all published blog posts
// @route   GET /api/blog
exports.getBlogPosts = async (req, res, next) => {
  try {
    const posts = await BlogPost.findAll(true);
    res.status(200).json({
      success: true,
      count: posts.length,
      data: posts
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single blog post by slug or ID
// @route   GET /api/blog/:slug
exports.getBlogPostBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    let post;
    if (isNaN(slug)) {
      post = await BlogPost.findBySlug(slug);
    } else {
      post = await BlogPost.findById(slug);
    }

    if (!post) {
      return res.status(404).json({ success: false, message: 'Blog post not found' });
    }

    res.status(200).json({ success: true, data: post });
  } catch (error) {
    next(error);
  }
};

// @desc    Create blog post (Admin)
// @route   POST /api/blog
exports.createBlogPost = async (req, res, next) => {
  try {
    const postId = await BlogPost.create(req.body);
    const newPost = await BlogPost.findById(postId);
    res.status(201).json({ success: true, message: 'Blog post created', data: newPost });
  } catch (error) {
    next(error);
  }
};

// @desc    Update blog post (Admin)
// @route   PUT /api/blog/:id
exports.updateBlogPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    await BlogPost.update(id, req.body);
    const updated = await BlogPost.findById(id);
    res.status(200).json({ success: true, message: 'Blog post updated', data: updated });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete blog post (Admin)
// @route   DELETE /api/blog/:id
exports.deleteBlogPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    await BlogPost.delete(id);
    res.status(200).json({ success: true, message: 'Blog post deleted' });
  } catch (error) {
    next(error);
  }
};
