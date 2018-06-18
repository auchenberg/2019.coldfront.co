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
            '/program': { page: '/program', query: { selectedDay: 'day1' } },
            '/program/day1': { page: '/program', query: { selectedDay: 'day1' } },
            '/program/day2': { page: '/program', query: { selectedDay: 'day2' } },
            '/community-workshop-day': { page: '/community-workshop-day' },            
            '/where-to-stay-and-how-to-get-around': { page: '/where-to-stay-and-how-to-get-around' },
            '/social': { page: '/social' },
            '/venue-and-partical': { page: '/venue-and-partical' },
        }
    }
}