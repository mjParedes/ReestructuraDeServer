import dotenv from 'dotenv'

dotenv.config()

const object = {
    port: process.env.PORT,
    uri_mongo: process.env.URI_MONGO
}

export default object


