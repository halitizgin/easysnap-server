const bcyrpt = require('bcryptjs');
const token = require('../../../helpers/token');

module.exports = {
    addUser: async (parent, { data: { username, password, createdAt } }, { User, pubsub }) => {
        const user = await User.findOne({ username });

        if (user){
            throw new Error('User already exists!');
        }

        const newUser = await new User({
            username,
            password,
            createdAt
        }).save();
        pubsub.publish('userAdded', {
            userAdded: newUser
        });
        return { token: token.generate(newUser, '1h') }
    },
    signInUser: async (parent, { data: { username, password } }, { User }) => {
        const user = await User.findOne({ username });

        if (!user){
            throw new Error('User does not exists!');
        }

        const userCompare = await bcyrpt.compare(password, user.password); 
        if (!userCompare){
            throw new Error('Wrong password!');
        }

        return {
            token: token.generate(user, '1h')
        }
    }
};