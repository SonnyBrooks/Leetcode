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
    for (let i = 0; i < cpdomains.length; i++) {
        var numVisits = cpdomains[i].split(' ')[0];
        var fullDomain = cpdomains[i].substring(cpdomains[i].indexOf(' ') + 1).trim().split(' ')[0];
        var domainParts = fullDomain.split('.');

        for(let j = domainParts.length - 1; j >= 0; j--) {     
            let key = domainParts[j];

            for(let k = j + 1; k < domainParts.length; k++) {
                key += '.' + domainParts[k]
            }
            let currentVisits = result.get(key) ? result.get(key) : 0;

            result.set(key, parseInt(currentVisits) + parseInt(numVisits))
        }
    }

    return Array.from(result, ([key, visits]) => visits + ' ' + key);
};

let cpdomains1 = ["9001 discuss.leetcode.com"]
console.log(subdomainVisits(cpdomains1))

let cpdomains2 = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];
console.log(subdomainVisits(cpdomains2))