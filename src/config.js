
// App configurations
import planetImages from 'assets/img/images'
const config = {
    baseUrl: 'http://localhost:8000/api',
    searchDebounceTime: 400,
    planetImages,
    requestTimeOutDuration: 60000,
    maxRequests: 15,
    superUsers:['Luke Skywalker']
}

export { config }
export default config