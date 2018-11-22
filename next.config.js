// next.config.js
module.exports = {
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/call-for-recommendations': { page: '/call-for-recommendations' },
            '/tickets': { page: '/tickets' },
            '/why-coldfront': { page: '/why-coldfront' },
            '/speakers': { page: '/speakers' },
            '/program': { page: '/program', query: { selectedDay: 'day2' } },
            '/program/day1': { page: '/program', query: { selectedDay: 'day1' } },
            '/program/day2': { page: '/program', query: { selectedDay: 'day2' } },
            '/community-workshop-day': { page: '/community-workshop-day' },            
            '/where-to-stay-and-how-to-get-around': { page: '/where-to-stay-and-how-to-get-around' },
            '/social': { page: '/social' },
            '/venue-and-practical': { page: '/venue-and-practical' },
            '/welcome-coldfronter': { page: '/welcome-coldfronter' },
            '/diversity-scholarships': { page: '/diversity-scholarships' },
            '/student': { page: '/student' },
            '/prefront': { page: '/prefront' },
            '/roadbook': { page: '/roadbook' },
            '/social-dinners': { page: '/social-dinners' },
            '/talks-slides-videos-photos': { page: '/talks-slides-videos-photos' },
        }
    }
}