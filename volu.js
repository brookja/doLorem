   const timeZoneMappings = {
       'Zulu': 'Etc/UTC'
   };

   function getStandardTimeZone(label) {
       return timeZoneMappings[label] || label;
   }

   const timeZone = getStandardTimeZone('Zulu'); // Returns 'Etc/UTC'
   