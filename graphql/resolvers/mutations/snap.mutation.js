module.exports = {
    addSnap: async (parent, { data: { text, userId, createdAt } }, { Snap, User, pubsub }) => {
        try{
            const user = await User.findById(userId);

            if (!user){
                throw new Error('User does not exists!');
            }

            const snap = await new Snap({
                text,
                userId,
                createdAt
            }).save();
            pubsub.publish('snapAdded', {
                snapAdded: snap
            });
            return snap;
        }catch(e){
            throw new Error(e);
        }
    }
};