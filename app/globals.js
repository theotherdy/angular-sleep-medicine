"use strict";
/**
 * Variables that we might want anywhere - see: http://stackoverflow.com/questions/36158848/what-is-the-best-way-to-declare-a-global-variable-in-angular-2-typescript
 * Include in other component, services, etc with: import myGlobals = require('./globals');
 */
'use strict';
exports.currentModyule = null;
exports.entityBrokerBaseUrl = "app/"; //will be "https://weblearn.ox.ac.uk/direct/"
exports.entityBrokerBaseUrlForLocalOnly = "http://localhost:3000/"; //search and remove on live
exports.unneededPartOfUrlForHierarchyCalls = "https://weblearn.ox.ac.uk/portal/hierarchy"; //will be "https://weblearn.ox.ac.uk/direct/"
exports.unneededPartOfUrlForLessonCalls = "https://weblearn.ox.ac.uk/direct/";
exports.baseSitePath = "/medsci/p_g/sleep_med"; //will be "https://weblearn.ox.ac.uk/direct/"
exports.urlToSpecifyPortal = "portal-hierarchy"; //in WL = 'portal-hierarchy/site.json?portalpath='
exports.suffixForTestingOnly = ".json"; //in WL = ''  ie no suffix
exports.lessonsUrl = "lessons/site/"; //in WL = 'portal-hierarchy/site.json?portalpath='
exports.lessonUrl = "lessons/lesson/"; //in WL = 'portal-hierarchy/site.json?portalpath='
exports.contentUrl = "content/resources/group/";
//# sourceMappingURL=globals.js.map