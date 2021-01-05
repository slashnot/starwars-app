
// App configurations
import planetImages from 'assets/img/images'
const config = {
    baseUrl: 'https://starwars-app-krk.netlify.app/api',
    searchDebounceTime: 400,
    planetImages,
    requestTimeOutDuration: 60000,
    maxRequests: 15,
    superUsers:['Luke']
}

export { config }
export default config