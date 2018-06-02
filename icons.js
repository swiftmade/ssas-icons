var icons = ["accessibility-hi","accessibility-lo","accessibility-mid","boat-aground","boat-docked","boat-shore","community","dangerous","day","disabled","drought","drought-hi","drought-lo","drought-mid","earthquake","earthquake-hi","earthquake-lo","earthquake-mid","electricity-hi","electricity-lo","electricity-mid","empty-triangle","entrance-other","extreme-climate-hi","extreme-climate-lo","extreme-climate-mid","extreme-cold","extreme-cold-hi","extreme-cold-lo","extreme-cold-mid","extreme-heat","faith","fan","fan-hi","fan-lo","fan-mid","female","fire","fire-hi","fire-lo","fire-mid","firesafety-hi","firesafety-lo","firesafety-mid","firstaid-hi","firstaid-lo","firstaid-mid","flood","flood-hi","flood-lo","flood-mid","happy","health","health-hi","health-lo","health-mid","infestation","internet-hi","internet-lo","internet-mid","landslide","landslide-hi","landslide-lo","landslide-mid","lighting-hi","lighting-lo","lighting-mid","male","negative","neutral","partly-secured","playground-hi","playground-lo","playground-mid","positive","potential-hi","potential-lo","potential-mid","private","public","question-mark","radio","radio-hi","radio-lo","radio-mid","religious","remote","residential","road-footpath","road-paved","road-traffic","road-unpaved","roof-bamboo","roof-concrete","roof-corrugated","roof-mud","roof-straw","roof-tile","roof-wood","rural","sad","safe","secured","semi-residential","semi-urban","social","social-hi","social-lo","social-mid","stable","tech","tech-hi","tech-lo","tech-mid","tsunami","tsunami-hi","tsunami-lo","tsunami-mid","unsafe","unsecured","unstable","urban","uxo","uxo-hi","uxo-lo","uxo-mid","very-remote","wall-adobe","wall-bamboo","wall-brick","wall-concrete","wall-masonry","wall-wood","warning-hi","warning-lo","warning-mid","water-access","water-drinking","water-handwash","water-noaccess","wind","wind-hi","wind-lo","wind-mid"];
// AMD support
if (typeof define === 'function' && define.amd) {
    define(function () { return icons; });
// CommonJS and Node.js module support.
} else if (typeof exports !== 'undefined') {
    // Support Node.js specific `module.exports` (which can be a function)
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = icons;
    }
    // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
    exports.icons = icons;
}