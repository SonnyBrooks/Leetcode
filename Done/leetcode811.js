/**
 * Subdomain Visit Count
 * Details: https://leetcode.com/problems/subdomain-visit-count/
 */

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    let result = new Map();
    for (var i = 0; i < cpdomains.length; i++) {
        var numVisits = cpdomains[i].split(' ')[0];
        var fullDomain = cpdomains[i].substring(cpdomains[i].indexOf(' ') + 1).trim().split(' ')[0];
        var domainParts = fullDomain.split('.');

        for(var j = domainParts.length - 1; j >= 0; j--) {     
            var key = domainParts[j];

            for(var k = j + 1; k < domainParts.length; k++) {
                key += '.' + domainParts[k]
            }
            var currentVisits = result.get(key) ? result.get(key) : 0;

            result.set(key, parseInt(currentVisits) + parseInt(numVisits))
        }
    }

    return Array.from(result, ([key, value]) => value + ' ' + key);
};

var cpdomains1 = ["9001 discuss.leetcode.com"]
console.log(subdomainVisits(cpdomains1))

var cpdomains2 = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];
console.log(subdomainVisits(cpdomains2))