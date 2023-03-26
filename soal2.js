const benefit = [
    {
      id: 1,
      name: "Gaji Pokok",
      amount: 3000000,
      unit: 12
    },
    {
      id: 2,
      name: "Tunjangan Hari Raya (THR)",
      amount: 0,
      unit: 1
    },
    {
      id: 3,
      name: "Uang makan",
      amount: 100000,
      unit: 12
    },
    {
      id: 4,
      name: "Tunjangan shift",
      amount: 0,
      unit: 0.2
    },
  ];
  
  const kriteria = [{'Gaji Pokok':['Tunjangan Hari Raya (THR)','Tunjangan shift']}];
  
  function copyAmountByCriteria(benefitList, criteriaList) {
    criteriaList.forEach(criteria => {
      const sourceBenefitName = Object.keys(criteria)[0];
      const targetBenefitNames = criteria[sourceBenefitName];
      
      const sourceBenefit = benefitList.find(benefit => benefit.name === sourceBenefitName);
      const sourceBenefitAmount = sourceBenefit.amount;
      
      targetBenefitNames.forEach(targetBenefitName => {
        const targetBenefit = benefitList.find(benefit => benefit.name === targetBenefitName);
        targetBenefit.amount = sourceBenefitAmount;
      });
      
    });
  
    return benefitList;
  }
  
  console.log(copyAmountByCriteria(benefit, kriteria));
  