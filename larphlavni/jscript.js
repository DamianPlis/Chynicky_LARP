(function () {
    function getDevice() {
       const uzivatel = navigator.userAgent
       let device = "neznamy uzivatel"
   
   
       if (/iPhone/.test(uzivatel)) {
           // Extract iPhone model from userAgent - tahle cast zatim je zbytecna
           let match = uzivatel.match(/\(iPhone; CPU iPhone OS (\d+)_(\d+)/);
           if (match) {
               const iOSVersion = parseInt(match[1]);
               if (iOSVersion >= 14) {
                   device = "Apple iPhone 12 or newer";
               } else if (iOSVersion >= 13) {
                   device = "Apple iPhone 11";
               } else if (iOSVersion >= 12) {
                   device = "Apple iPhone XR/XS";
               } else {
                   device = "Older iPhone Model";
               }
           } else {
               device = "Apple iPhone";
           }
           //* konec zbytecny casti*/
       } else if (/Android/.test(uzivatel)) {
           // Extract Android model (not always accurate)
           let match = uzivatel.match(/\((.*?)\)/);
           if (match) {
               device = `Android Device (${match[1]})`;
           } else {
               device = "Android Device";
           }
       } else if (/Mac/.test(uzivatel)) {
           device = "Apple Mac";
       } else if (/Windows/.test(uzivatel)) {
           device = "Windows PC";
       }
   
       return device;
   }
   
   const device = getDevice(); // Call function and store result
   
   if (device.includes ("iPhone")) {  
       window.location.href = "../O nas/O nás.html"
   } else if (device.includes ("Android")) {
       window.location.href = "../O nas/O nás.html"
   }
   // Example usage
   console.log("Detected Device:", device);
   })()