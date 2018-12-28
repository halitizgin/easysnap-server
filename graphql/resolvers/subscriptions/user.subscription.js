module.exports = {
    userAdded: {
        subscribe: (parent, args, { pubsub }) => {
            return pubsub.asyncIterator('userAdded');
        }
    }
}