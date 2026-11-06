/*
 * LinkedIn Insight Tag (partner ID 10082516), loaded only with consent.
 *
 * The tag sets advertising cookies, so it follows the visitor's choices on
 * /cookie-preferences.html (stored in localStorage as "msaig_cookie_prefs"):
 *   - Never loads when the browser sends Global Privacy Control (GPC).
 *   - Never loads when the visitor has turned "Targeting & Advertising" off.
 *   - CONSENT_MODE "opt-in":  loads only after the visitor turns it on.
 *     CONSENT_MODE "opt-out": loads unless the visitor has turned it off.
 *
 * Conversions: call window.msaigTrack('score_completed') or
 * window.msaigTrack('inquiry_sent'). Paste each conversion ID from
 * Campaign Manager into CONVERSION_IDS; until then the calls do nothing.
 */
(function () {
  var PARTNER_ID = "10082516";
  var CONSENT_MODE = "opt-in";
  var CONVERSION_IDS = {
    score_completed: null, // e.g. 12345678
    inquiry_sent: null
  };

  window.msaigTrack = function (name) {
    var id = CONVERSION_IDS[name];
    if (id && typeof window.lintrk === "function") {
      window.lintrk("track", { conversion_id: id });
    }
  };

  function targetingAllowed() {
    if (navigator.globalPrivacyControl === true) return false;
    var prefs = null;
    try {
      prefs = JSON.parse(localStorage.getItem("msaig_cookie_prefs") || "null");
    } catch (e) { prefs = null; }
    if (prefs && typeof prefs.targeting === "boolean") return prefs.targeting;
    return CONSENT_MODE === "opt-out";
  }

  if (!targetingAllowed()) return;

  window._linkedin_partner_id = PARTNER_ID;
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(PARTNER_ID);

  if (!window.lintrk) {
    window.lintrk = function (a, b) { window.lintrk.q.push([a, b]); };
    window.lintrk.q = [];
  }
  var s = document.getElementsByTagName("script")[0];
  var b = document.createElement("script");
  b.type = "text/javascript";
  b.async = true;
  b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
  s.parentNode.insertBefore(b, s);
})();
