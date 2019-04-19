const env = process.env

module.exports = {
    development: {
        username: env.DB_USER,
        password: env.DB_PASSWORD,
        uri: `mongodb://${this.username}:${this.password}@ds235461.mlab.com:35461/tribestack_dev`
    },
    test: {
        username: '',
        password: '',
        uri: ''
    },
    production: {
        username: '',
        password: '',
        uri: ''
    }
}