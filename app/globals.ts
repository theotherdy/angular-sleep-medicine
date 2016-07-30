/**
 * Variables that we might want anywhere - see: http://stackoverflow.com/questions/36158848/what-is-the-best-way-to-declare-a-global-variable-in-angular-2-typescript
 * Include in other component, services, etc with: import myGlobals = require('./globals'); 
 */
'use strict';

export let currentModyule: string =  null;
export let entityBrokerBaseUrl: string = "app/"; //will be "https://weblearn.ox.ac.uk/direct/"
export let unneededPartOfUrlForHierarchyCalls: string = "https://weblearn.ox.ac.uk/portal/hierarchy"; //will be "https://weblearn.ox.ac.uk/direct/"
export let baseSitePath: string = "/medsci/p_g/sleep_med"; //will be "https://weblearn.ox.ac.uk/direct/"

export let urlToSpecifyPortal: string = "portal-hierarchy"; //in WL = 'portal-hierarchy/site.json?portalpath='
export let suffixForTestingOnly: string = ".json"; //in WL = ''  ie no suffix

export let lessonsUrl: string = "lessons/site/"; //in WL = 'portal-hierarchy/site.json?portalpath='
