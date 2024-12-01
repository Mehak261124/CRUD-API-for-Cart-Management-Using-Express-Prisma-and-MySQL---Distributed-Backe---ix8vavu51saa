const AUTH_KEY="8a60348b-d4a4-564a-9b45-aab518adb7f4";

async function authMiddleware(req, res, next) {
  try {
    const apiauthkey = req.headers['apiauthkey'];
    // if auth key is missing
    if(!apiauthkey) {
      return res.status(403).json({
        "error": "apiauthkey is missing or invalid"
      })
    }
    
    // if auth key is invalid
    if(apiauthkey !== AUTH_KEY) {
      return res.status(403).json({
        "error": "Failed to authenticate apiauthkey"
      })
    }

    next();
  }
  catch(err) {
    console.log(err);
    return res.status(500).json({
      "error": "Internal server error"
    })
  }
}

module.exports = { authMiddleware };