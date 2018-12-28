const Query = require('./queries/Query');
const Snap = require('./queries/Snap');
const User = require('./queries/User');

const Mutation = require('./mutations');
const Subscription = require('./subscriptions');

module.exports = {
    Query,
    Snap,
    User,
    Mutation,
    Subscription
};