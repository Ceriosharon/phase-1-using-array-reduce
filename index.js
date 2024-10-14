const batteries = [
    { type: 'AA', count: 10 },
    { type: 'AAA', count: 5 },
    { type: 'C', count: 8 },
    { type: 'D', count: 3 },
    { type: '9V', count: 5 }
  ];
  
  const totalBatteries = batteries.reduce((sum, battery) => sum + battery.count, 0);
  