const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "BHASHI-MD~XjAQ2LSC#arMylQrImW4vngYNnmCccxBFSVCZ_Hr-FX8GQcSkhEs",
// For extra thing : BHASHI-MD~(megafileid)
  MONGODB: process.env.MONGODB || "mongodb://mongo:bVGlLPguqeouADQzQrMxPMImlMFQzCnh@mongodb.railway.internal:27017",

    
 
};
