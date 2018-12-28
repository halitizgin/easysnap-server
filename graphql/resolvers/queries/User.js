const User = {
    snaps: async (parent, args, { Snap }) => {
        return await Snap.find({ userId: parent.id }).sort({ 'createdAt': 'desc' });
    }
};

module.exports = User;