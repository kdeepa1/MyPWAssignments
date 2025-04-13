const browserVersion="Chrome";
function getBrowserVersion(){
    if(browserVersion.startsWith("Chrome"))
    {
        let browserVersion="Chrome-135.0.7";
        console.log("Inside if block: ",browserVersion);
    }
    console.log("Outside if block: ",browserVersion);

}
getBrowserVersion();
console.log("Global variable: ",browserVersion);