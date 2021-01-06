
// App configurations
import planetImages from 'assets/img/images'
const config = {
    baseUrl: 'http://localhost:3000/api',
    searchDebounceTime: 400,
    planetImages,
    requestTimeOutDuration: 60000,
    maxRequests: 15,
    superUsers:['Luke']
}

export { config }
export default config