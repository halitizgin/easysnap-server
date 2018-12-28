const { withFilter } = require('apollo-server-express');

module.exports = {
    snapAdded: {
        subscribe: withFilter(
            (parent, args, { pubsub }) => {
                return pubsub.asyncIterator('snapAdded');
            }, 
            (payload, variables) => {
                return variables.userId ? String(payload.snapAdded.userId) === variables.userId : true;
            }
        )
    }
}