chrome.runtime.onInstalled.addListener(function(){
    alert("CesiTools: Passe un bon moment sur l'extention. ");
});
chrome.webNavigation.onCompleted.addListener(function(){
    alert("Une mauvaise journée s'annonce.... Bon courage!");
}, {url:[{urlMatches:"ent.cesi.fr"}]});