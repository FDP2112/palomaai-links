// Wix Velo Backend Code
// File: Backend/http-functions.js
// This code serves the Universal Links / App Links files

import { ok } from 'wix-http-functions';

// Apple App Site Association for iOS Universal Links
export function get_appleAppSiteAssociation(request) {
  const aasa = {
    "applinks": {
      "apps": [],
      "details": [
        {
          "appID": "834CFZGYF5.com.palomaai.app",
          "paths": [
            "/reset-password",
            "/reset-password/*"
          ]
        }
      ]
    }
  };
  
  return ok({
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600"
    },
    body: JSON.stringify(aasa)
  });
}

// Android Asset Links for App Links
export function get_assetlinks(request) {
  const assetlinks = [
    {
      "relation": ["delegate_permission/common.handle_all_urls"],
      "target": {
        "namespace": "android_app",
        "package_name": "com.palomaai.app",
        "sha256_cert_fingerprints": [
          "863DB741175063D06F24B3B0151033404994A22C8669795DE29990979491170"
        ]
      }
    }
  ];
  
  return ok({
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600"
    },
    body: JSON.stringify(assetlinks)
  });
}

// SETUP INSTRUCTIONS:
// 
// 1. In Wix Editor, enable Dev Mode (top menu)
// 2. Create this file: Backend/http-functions.js
// 3. Copy-paste this code
// 4. Replace YOUR_TEAM_ID with your Apple Team ID
// 5. Replace YOUR_SHA256_FINGERPRINT_HERE with your app's SHA256
// 6. Go to Site Structure → Router
// 7. Add these routes:
//    - /.well-known/apple-app-site-association → get_appleAppSiteAssociation (GET)
//    - /.well-known/assetlinks.json → get_assetlinks (GET)
// 8. Publish your site
// 9. Test:
//    curl https://palomaai.co.uk/.well-known/apple-app-site-association
//    curl https://palomaai.co.uk/.well-known/assetlinks.json
