//timer1 all chickens         initialTimer 0
//timer2 all bears            initialTimer 170
//timer3 all bats             initialTimer 30
//timer4 all dogs             initialTimer 30
//timer5 all boars            initialTimer 60
//timer6 all wolves           initialTimer 110
//timer7 all mutant bears     initialTimer 260
//timer8 all mutant wolves    initialTimer 260
//timer9 all mutant dogs      initialTimer 150
//timer10 all mutant chickens initialTimer 150
//timer11 all mutant boars    initialTimer 150

export const spawnLocations = [
  // Hotel
  { id: 'Hotelchicken1', x: 140, y: 375, icon: require('../assets/images/animals/1.png'), timerId: 'timer1', initialTimer: 0 },
  { id: 'Hotelbatl', x: 105, y: 390, icon: require('../assets/images/animals/2.png'), timerId: 'timer3', initialTimer: 30 },
  { id: 'Hotelbat2', x: 75, y: 400, icon: require('../assets/images/animals/2.png'), timerId: 'timer3', initialTimer: 30 },
  { id: 'hotelWolves1', x: 75, y: 375, icon: require('../assets/images/animals/5.png'), timerId: 'timer6', initialTimer: 110 },
  { id: 'hotelWolves2', x: 145, y: 450, icon: require('../assets/images/animals/5.png'), timerId: 'timer6', initialTimer: 110 },
  { id: 'hotelMutDogs', x: 50, y: 395, icon: require('../assets/images/animals/4.4.png'), timerId: 'timer9', initialTimer: 150 },
  { id: 'hotelDogs1', x: 100, y: 440, icon: require('../assets/images/animals/4.png'), timerId: 'timer4', initialTimer: 30 },
  { id: 'hotelDogs2', x: 175, y: 400, icon: require('../assets/images/animals/4.png'), timerId: 'timer4', initialTimer: 30 },

  // Beach
  { id: 'beachChicken', x: 100, y: 495, icon: require('../assets/images/animals/1.png'), timerId: 'timer1', initialTimer: 0 },
  { id: 'beachBoar1', x: 60, y: 515, icon: require('../assets/images/animals/3.png'), timerId: 'timer5', initialTimer: 60 },
  { id: 'beachBoar2', x: 145, y: 565, icon: require('../assets/images/animals/3.png'), timerId: 'timer5', initialTimer: 60 },
  { id: 'beachBoar3', x: 145, y: 585, icon: require('../assets/images/animals/3.png'), timerId: 'timer5', initialTimer: 60 },
  { id: 'beachMutBear', x: 45, y: 535, icon: require('../assets/images/animals/6.6.png'), timerId: 'timer7', initialTimer: 260 },
  { id: 'beachBear1', x: 67, y: 556, icon: require('../assets/images/animals/6.png'), timerId: 'timer2', initialTimer: 170 },
  { id: 'beachBear2', x: 85, y: 580, icon: require('../assets/images/animals/6.png'), timerId: 'timer2', initialTimer: 170 },
  { id: 'beachBear3', x: 110, y: 600, icon: require('../assets/images/animals/6.png'), timerId: 'timer2', initialTimer: 170 },
  { id: 'beachWolves', x: 170, y: 527, icon: require('../assets/images/animals/5.png'), timerId: 'timer6', initialTimer: 110 },
  { id: 'beachBat', x: 195, y: 547, icon: require('../assets/images/animals/2.png'), timerId: 'timer3', initialTimer: 30 },

  // Archery Range
  { id: 'MutantWolves', x: 120, y: 260, icon: require('../assets/images/animals/5.5.png'), timerId: 'timer8', initialTimer: 260 },
  { id: 'ArcheryBear1', x: 165, y: 260, icon: require('../assets/images/animals/6.png'), timerId: 'timer2', initialTimer: 170 },
  { id: 'ArcheryBear2', x: 105, y: 215, icon: require('../assets/images/animals/6.png'), timerId: 'timer2', initialTimer: 170 },
  { id: 'ArcheryBat1', x: 145, y: 245, icon: require('../assets/images/animals/2.png'), timerId: 'timer3', initialTimer: 30 },
  { id: 'ArcheryBat2', x: 130, y: 230, icon: require('../assets/images/animals/2.png'), timerId: 'timer3', initialTimer: 30 },
  { id: 'ArcheryBoar1', x: 135, y: 210, icon: require('../assets/images/animals/3.png'), timerId: 'timer5', initialTimer: 60 },
  { id: 'ArcheryBoar2', x: 155, y: 195, icon: require('../assets/images/animals/3.png'), timerId: 'timer5', initialTimer: 60 },
  { id: 'ArcheryWolves', x: 170, y: 175, icon: require('../assets/images/animals/5.png'), timerId: 'timer6', initialTimer: 110 },
  //school
  { id: 'schoolBear', x: 195, y: 280, icon: require('../assets/images/animals/6.png'), timerId: 'timer2', initialTimer: 170 },
  { id: 'schoolChicken1', x: 220, y: 270, icon: require('../assets/images/animals/1.png'), timerId: 'timer1', initialTimer: 0 },
  { id: 'schoolChicken2', x: 320, y: 250, icon: require('../assets/images/animals/1.png'), timerId: 'timer1', initialTimer: 0 },
  { id: 'schoolChicken3', x: 336, y: 260, icon: require('../assets/images/animals/1.png'), timerId: 'timer1', initialTimer: 0 },
  { id: 'schoolChicken4', x: 345, y: 280, icon: require('../assets/images/animals/1.png'), timerId: 'timer1', initialTimer: 0 },
  { id: 'schoolWolves', x: 245, y: 255, icon: require('../assets/images/animals/5.png'), timerId: 'timer6', initialTimer: 110 },
  { id: 'schoolbatl', x: 260, y: 280, icon: require('../assets/images/animals/2.png'), timerId: 'timer3', initialTimer: 30 },
  { id: 'schoolDogs1', x: 230, y: 360, icon: require('../assets/images/animals/4.png'), timerId: 'timer4', initialTimer: 30 },
  { id: 'schoolBoar1', x: 289, y: 262, icon: require('../assets/images/animals/3.png'), timerId: 'timer5', initialTimer: 60 },
  { id: 'schoolMutChicken', x: 270, y: 390, icon: require('../assets/images/animals/1.1.png'), timerId: 'timer10', initialTimer: 150 },
  //fire station
  { id: 'fireDogs1',x: 362, y: 265, icon: require('../assets/images/animals/4.png'), timerId: 'timer4', initialTimer: 30 },
  { id: 'firebatl', x: 390, y: 265, icon: require('../assets/images/animals/2.png'), timerId: 'timer3', initialTimer: 30 },
  { id: 'firebat2', x: 390, y: 320, icon: require('../assets/images/animals/2.png'), timerId: 'timer3', initialTimer: 30 },
  { id: 'fireBear', x: 395, y: 245, icon: require('../assets/images/animals/6.png'), timerId: 'timer2', initialTimer: 170 },
  { id: 'fireBoar1', x: 430, y: 255, icon: require('../assets/images/animals/3.png'), timerId: 'timer5', initialTimer: 60 },
  { id: 'fireBoar2', x: 450, y: 275, icon: require('../assets/images/animals/3.png'), timerId: 'timer5', initialTimer: 60 },
  { id: 'fireWolves', x: 365, y: 305, icon: require('../assets/images/animals/5.png'), timerId: 'timer6', initialTimer: 110 },
  { id: 'fireMutBoar', x: 400, y: 360, icon: require('../assets/images/animals/3.3.png'), timerId: 'timer11', initialTimer: 150 },
  //police station
  { id: 'policeBoar1', x: 445, y: 225, icon: require('../assets/images/animals/3.png'), timerId: 'timer5', initialTimer: 60 },
  { id: 'policeChicken', x: 425, y: 205, icon: require('../assets/images/animals/1.png'), timerId: 'timer1', initialTimer: 0 },
  { id: 'policeWolves', x: 486, y: 165, icon: require('../assets/images/animals/5.png'), timerId: 'timer6', initialTimer: 110 },
  { id: 'policebat', x: 465, y: 175, icon: require('../assets/images/animals/2.png'),  timerId: 'timer3', initialTimer: 30 },
  { id: 'policeBear', x: 490, y: 195, icon: require('../assets/images/animals/6.png'), timerId: 'timer2', initialTimer: 170 },
  { id: 'policeDogs1',x: 505, y: 280, icon: require('../assets/images/animals/4.png'), timerId: 'timer4', initialTimer: 30 },
  { id: 'policeMutBoar', x: 530, y: 295, icon: require('../assets/images/animals/3.3.png'), timerId: 'timer11', initialTimer: 150 },
  //gas station
  { id: 'gasDogs',x: 320, y: 195, icon: require('../assets/images/animals/4.png'), timerId: 'timer4', initialTimer: 30 },
  { id: 'gasMutDogs', x: 210, y: 105, icon: require('../assets/images/animals/4.4.png'), timerId: 'timer9', initialTimer: 150 },
  { id: 'gasChickens', x: 225, y: 125, icon: require('../assets/images/animals/1.png'), timerId: 'timer1', initialTimer: 0 },
  { id: 'gasbat', x: 275, y: 135, icon: require('../assets/images/animals/2.png'),  timerId: 'timer3', initialTimer: 30 },
  { id: 'gasWolves', x: 277, y: 110, icon: require('../assets/images/animals/5.png'), timerId: 'timer6', initialTimer: 110 },
  { id: 'gasBear', x: 290, y: 80, icon: require('../assets/images/animals/6.png'), timerId: 'timer2', initialTimer: 170 },
  //alley
  { id: 'alleyChickens1', x: 351, y: 100, icon: require('../assets/images/animals/1.png'), timerId: 'timer1', initialTimer: 0 },
  { id: 'alleyChickens2', x: 340, y: 110, icon: require('../assets/images/animals/1.png'), timerId: 'timer1', initialTimer: 0 },
  { id: 'alleybat1', x: 388, y: 97, icon: require('../assets/images/animals/2.png'),  timerId: 'timer3', initialTimer: 30 },
  { id: 'alleybat2', x: 415, y: 75, icon: require('../assets/images/animals/2.png'),  timerId: 'timer3', initialTimer: 30 },
  { id: 'alleyWolves', x: 418, y: 124, icon: require('../assets/images/animals/5.png'), timerId: 'timer6', initialTimer: 110 },
  { id: 'alleyBear', x: 445, y: 90, icon: require('../assets/images/animals/6.png'), timerId: 'timer2', initialTimer: 170 },
  { id: 'alleyMutBoar', x: 490, y: 105, icon: require('../assets/images/animals/3.3.png'), timerId: 'timer11', initialTimer: 150 },
  //temple
  { id: 'templeChickens1', x: 535, y: 175, icon: require('../assets/images/animals/1.png'), timerId: 'timer1', initialTimer: 0 },
  { id: 'templeChickens2', x: 615, y: 230, icon: require('../assets/images/animals/1.png'), timerId: 'timer1', initialTimer: 0 },
  { id: 'templebat1', x: 615, y: 215, icon: require('../assets/images/animals/2.png'),  timerId: 'timer3', initialTimer: 30 },
  { id: 'templebat2', x: 415, y: 75, icon: require('../assets/images/animals/2.png'),  timerId: 'timer3', initialTimer: 30 },
  { id: 'templeBoar1', x: 620, y: 190, icon: require('../assets/images/animals/3.png'), timerId: 'timer5', initialTimer: 60 },
  { id: 'templeBoar2', x: 645, y: 215, icon: require('../assets/images/animals/3.png'), timerId: 'timer5', initialTimer: 60 },
  { id: 'templeWolves', x: 565, y: 200, icon: require('../assets/images/animals/5.png'), timerId: 'timer6', initialTimer: 110 },
  { id: 'templeBear1', x: 580, y: 180, icon: require('../assets/images/animals/6.png'), timerId: 'timer2', initialTimer: 170 },
  { id: 'templeBear2', x: 675, y: 236, icon: require('../assets/images/animals/6.png'), timerId: 'timer2', initialTimer: 170 },
  { id: 'templeBear3', x: 670, y: 295, icon: require('../assets/images/animals/6.png'), timerId: 'timer2', initialTimer: 170 },
  { id: 'templeMutBear',x: 700, y: 280, icon: require('../assets/images/animals/6.6.png'), timerId: 'timer7', initialTimer: 260 },
  //stream
  { id: 'streamBoar1', x: 640, y: 395, icon: require('../assets/images/animals/3.png'), timerId: 'timer5', initialTimer: 60 },
  { id: 'streamBoar2', x: 575, y: 360, icon: require('../assets/images/animals/3.png'), timerId: 'timer5', initialTimer: 60 },
  { id: 'streamChicken', x: 600, y: 355, icon: require('../assets/images/animals/1.png'), timerId: 'timer1', initialTimer: 0 },
  { id: 'streamWolves', x: 570, y: 310, icon: require('../assets/images/animals/5.png'), timerId: 'timer6', initialTimer: 110 },
  { id: 'streambat', x: 630, y: 380, icon: require('../assets/images/animals/2.png'),  timerId: 'timer3', initialTimer: 30 },
  { id: 'streamBear1', x: 590, y: 390, icon: require('../assets/images/animals/6.png'), timerId: 'timer2', initialTimer: 170 },
  { id: 'streamBear2', x: 590, y: 405, icon: require('../assets/images/animals/6.png'), timerId: 'timer2', initialTimer: 170 },
  //pond
  { id: 'pondChicken1', x: 495, y: 380, icon: require('../assets/images/animals/1.png'), timerId: 'timer1', initialTimer: 0 },
  { id: 'pondChicken2', x: 515, y: 470, icon: require('../assets/images/animals/1.png'), timerId: 'timer1', initialTimer: 0 },
  { id: 'pondWolves1', x: 510, y: 355, icon: require('../assets/images/animals/5.png'), timerId: 'timer6', initialTimer: 110 },
  { id: 'pondWolves2', x: 500, y: 445, icon: require('../assets/images/animals/5.png'), timerId: 'timer6', initialTimer: 110 },
  { id: 'pondBear1', x: 535, y: 490, icon: require('../assets/images/animals/6.png'), timerId: 'timer2', initialTimer: 170 },
  { id: 'pondBear2', x: 520, y: 375, icon: require('../assets/images/animals/6.png'), timerId: 'timer2', initialTimer: 170 },
  //hospital
  { id: 'hospitalChicken', x: 640, y: 515, icon: require('../assets/images/animals/1.png'), timerId: 'timer1', initialTimer: 0 },
  { id: 'hospitalWolves1', x: 670, y: 455, icon: require('../assets/images/animals/5.png'), timerId: 'timer6', initialTimer: 110 },
  { id: 'hospitalWolves2', x: 695, y: 515, icon: require('../assets/images/animals/5.png'), timerId: 'timer6', initialTimer: 110 },
  { id: 'hospitalbat', x: 670, y: 490, icon: require('../assets/images/animals/2.png'),  timerId: 'timer3', initialTimer: 30 },
  { id: 'hospitalDogs', x: 620, y: 530, icon: require('../assets/images/animals/4.png'), timerId: 'timer4', initialTimer: 30 },
  { id: 'hospitalMutDogs', x: 660, y: 545, icon: require('../assets/images/animals/4.4.png'), timerId: 'timer9', initialTimer: 150 }, 
  //factory
  { id: 'factoryMutWolves', x: 661, y: 608, icon: require('../assets/images/animals/5.5.png'), timerId: 'timer8', initialTimer: 260 },
  { id: 'factoryBear1', x: 656, y: 643, icon: require('../assets/images/animals/6.png'), timerId: 'timer2', initialTimer: 170 },
  { id: 'factoryBear2', x: 549, y: 707, icon: require('../assets/images/animals/6.png'), timerId: 'timer2', initialTimer: 170 },
  { id: 'factoryBear3', x: 575, y: 785, icon: require('../assets/images/animals/6.png'), timerId: 'timer2', initialTimer: 170 },
  { id: 'factoryWolves',x: 663, y: 686, icon: require('../assets/images/animals/5.png'), timerId: 'timer6', initialTimer: 110 },
  { id: 'factorybat1', x: 620, y: 739, icon: require('../assets/images/animals/2.png'), timerId: 'timer3', initialTimer: 30 },
  { id: 'factorybat2', x: 560, y: 765, icon: require('../assets/images/animals/2.png'), timerId: 'timer3', initialTimer: 30 },
  { id: 'factoryBoar', x: 535, y: 740, icon: require('../assets/images/animals/3.png'), timerId: 'timer5', initialTimer: 60 }, 
  { id: 'factoryDogs', x: 590, y: 735, icon: require('../assets/images/animals/4.png'), timerId: 'timer4', initialTimer: 30 },
  { id: 'factoryChicken', x: 620, y: 710, icon: require('../assets/images/animals/1.png'), timerId: 'timer1', initialTimer: 0 },
  //cemetery
  { id: 'cemeteryWolves',x: 440, y: 545, icon: require('../assets/images/animals/5.png'), timerId: 'timer6', initialTimer: 110 },
  { id: 'cemeterybat1', x: 555, y: 550, icon: require('../assets/images/animals/2.png'), timerId: 'timer3', initialTimer: 30 },
  { id: 'cemeterybat2', x: 580, y: 580, icon: require('../assets/images/animals/2.png'), timerId: 'timer3', initialTimer: 30 },
  { id: 'cemeteryBoar1', x: 590, y: 590, icon: require('../assets/images/animals/3.png'), timerId: 'timer5', initialTimer: 60 }, 
  { id: 'cemeteryBoar2', x: 535, y: 575, icon: require('../assets/images/animals/3.png'), timerId: 'timer5', initialTimer: 60 },
  { id: 'cemeteryBoar3', x: 510, y: 605, icon: require('../assets/images/animals/3.png'), timerId: 'timer5', initialTimer: 60 },
  { id: 'cemeteryBoar4', x: 410, y: 555, icon: require('../assets/images/animals/3.png'), timerId: 'timer5', initialTimer: 60 },
  { id: 'cemeteryChicken1', x: 470, y: 570, icon: require('../assets/images/animals/1.png'), timerId: 'timer1', initialTimer: 0 },
  { id: 'cemeteryChicken2', x: 555, y: 585, icon: require('../assets/images/animals/1.png'), timerId: 'timer1', initialTimer: 0 },
  { id: 'cemeteryMutDogs', x: 545, y: 645, icon: require('../assets/images/animals/4.4.png'), timerId: 'timer9', initialTimer: 150 },
  //chapel
  { id: 'chapelBear1', x: 490, y: 635, icon: require('../assets/images/animals/6.png'), timerId: 'timer2', initialTimer: 170 },
  { id: 'chapelBear2', x: 365, y: 600, icon: require('../assets/images/animals/6.png'), timerId: 'timer2', initialTimer: 170 },
  { id: 'chapelChicken1', x: 470, y: 645, icon: require('../assets/images/animals/1.png'), timerId: 'timer1', initialTimer: 0 },
  { id: 'chapelChicken2', x: 455, y: 655, icon: require('../assets/images/animals/1.png'), timerId: 'timer1', initialTimer: 0 },
  { id: 'chapelChicken3', x: 410, y: 585, icon: require('../assets/images/animals/1.png'), timerId: 'timer1', initialTimer: 0 },
  { id: 'chapelChicken4', x: 425, y: 605, icon: require('../assets/images/animals/1.png'), timerId: 'timer1', initialTimer: 0 },
  { id: 'chapelbat1', x: 390, y: 575, icon: require('../assets/images/animals/2.png'), timerId: 'timer3', initialTimer: 30 },
  { id: 'chapelbat2', x: 445, y: 670, icon: require('../assets/images/animals/2.png'), timerId: 'timer3', initialTimer: 30 },
  { id: 'chapelBoar', x: 445, y: 625, icon: require('../assets/images/animals/3.png'), timerId: 'timer5', initialTimer: 60 },

];

// Function to initialize timers
export const initializeTimers = (spawnLocations: any[]): Record<string, number> => {
  const timers: Record<string, number> = {};
  spawnLocations.forEach((location: { timerId: string | number; initialTimer: number; }) => {
    if (!timers[location.timerId]) {
      timers[location.timerId] = location.initialTimer; // Use the initialTimer value
    }
  });
  return timers;
};

// Function to update timers
export const updateTimers = (timers: Record<string, number>): Record<string, number> => {
  const updatedTimers = { ...timers };
  Object.keys(updatedTimers).forEach((timerId) => {
    if (updatedTimers[timerId] > 0) {
      updatedTimers[timerId] -= 1; // Decrement the timer by 1 second
    } else {
      // Reset to the initialTimer value for the first spawn location with this timerId
      const location = spawnLocations.find((loc) => loc.timerId === timerId);
      if (location) {
        updatedTimers[timerId] = location.initialTimer;
      }
    }
  });
  return updatedTimers;
};