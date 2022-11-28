const random = new (require('chance'));
const bcrypt = require('bcrypt');

const mixins = {
    user: (options = {}) => {
        const plainPassword = 'password';
        const hashedPassword = bcrypt.hashSync(plainPassword, 10);
        return {
            username: random.first().concat(random.last()),
            password: hashedPassword,
            email: random.email(),
            ...options,
        }
    }

};

random.mixin(mixins);

module.exports = random;
