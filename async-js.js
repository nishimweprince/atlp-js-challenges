let families = [  
    {fatherName: "Izere", motherName: "Cici", childrenNumber: 4},
    {fatherName: "Ntare", motherName: "Kelly", childrenNumber: 1},
    {fatherName: "Fabrice", motherName: "Chacha", childrenNumber: 3},
    {fatherName: "Eric", motherName: "Ange", childrenNumber: -1},
    {fatherName: "Derick", motherName: "Belle", childrenNumber: 0}
  ];
  
  let calculateFamilyRatios = (families) => {
    let totalChildren = 0;
    let eligibleFamilies = [];
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        for (let i = 0; i < families.length; i++) {
          if (families[i].childrenNumber < 0) {
            console.log("Skipping family with negative children numbers");
            continue;
          }
  
          if (families[i].fatherName.toLowerCase() === "yves") {
            return reject("Yves is not an allowed dad in 2022.");
          }
  
          totalChildren += families[i].childrenNumber;
        }
  
        for (let i = 0; i < families.length; i++) {
          if (families[i].childrenNumber > 0) {
            families[i].newMember = totalChildren / families.length;
            eligibleFamilies.push(families[i]);
          }
        }
  
        if (eligibleFamilies.length > 0) {
          resolve(eligibleFamilies);
        } else {
          reject("No families with children found.");
        }
      }, 1000);
    });
  };
  
  calculateFamilyRatios(families)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));