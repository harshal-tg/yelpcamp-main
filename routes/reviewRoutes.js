const express = require('express');
const router = express.Router({ mergeParams: true });

const reviews = require('../controllers/reviews.js');

const catchAsync = require('../utilities/catchAsync');
const ExpressError = require('../utilities/ExpressError');
const Review = require('../models/review.js');
const Campground = require("../models/campground");
const { campgroundSchema, reviewSchema } = require('../schemas.js');
const {validateReview,isLoggedIn,isReviewAuthor} = require('../middleware.js')




router.post('/',isLoggedIn,validateReview, catchAsync(reviews.createReview));

router.delete('/:reviewId',isLoggedIn,isReviewAuthor,catchAsync(reviews.deleteReview));


module.exports = router;