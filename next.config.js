// next.config.js
module.exports = {
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/call-for-recommendations': { page: '/call-for-recommendations' },
            '/tickets': { page: '/tickets' },
            '/why-coldfront': { page: '/why-coldfront' },
            '/workshop': { page: '/workshop' },
        }
    }
}