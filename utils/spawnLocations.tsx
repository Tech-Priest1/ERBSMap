import { MonsterTypes } from './monsters';

export const spawnLocations = [
  // Hotel
  { id: 'Hotelchicken1', x: 140, y: 375, ...MonsterTypes.Chicken },
  { id: 'Hotelbatl', x: 105, y: 390, ...MonsterTypes.Bat },
  { id: 'Hotelbat2', x: 75, y: 400, ...MonsterTypes.Bat },
  { id: 'hotelWolves1', x: 75, y: 375, ...MonsterTypes.Wolf },
  { id: 'hotelBear', x: 135, y: 465, ...MonsterTypes.Bear },
  { id: 'hotelMutDogs', x: 50, y: 395, ...MonsterTypes.MutantDog },
  { id: 'hotelDogs1', x: 100, y: 440, ...MonsterTypes.Dog },

  // Beach
  { id: 'beachWolves1', x: 100, y: 495, ...MonsterTypes.Wolf },
  { id: 'beachChicken1', x: 95, y: 515, ...MonsterTypes.Chicken },
  { id: 'beachMutBear', x: 45, y: 535, ...MonsterTypes.MutantBear },
  { id: 'beachBoar1', x: 145, y: 585, ...MonsterTypes.Boar },
  { id: 'beachBoar2', x: 75, y: 560, ...MonsterTypes.Boar },
  { id: 'beachBear1', x: 85, y: 580, ...MonsterTypes.Bear },
  { id: 'beachBear2', x: 110, y: 600, ...MonsterTypes.Bear },
  { id: 'beachWolves2', x: 170, y: 527, ...MonsterTypes.Wolf },
  { id: 'beachBat', x: 195, y: 547, ...MonsterTypes.Bat },

  // Archery Range
  { id: 'MutantWolves', x: 120, y: 260, ...MonsterTypes.MutantWolf },
  { id: 'ArcheryBear1', x: 105, y: 215, ...MonsterTypes.Bear },
  { id: 'ArcheryBat1', x: 145, y: 245, ...MonsterTypes.Bat },
  { id: 'ArcheryBat2', x: 130, y: 230, ...MonsterTypes.Bat },
  { id: 'ArcheryBoar1', x: 135, y: 210, ...MonsterTypes.Boar },
  { id: 'ArcheryBoar2', x: 155, y: 195, ...MonsterTypes.Boar },
  { id: 'ArcheryWolves', x: 170, y: 175, ...MonsterTypes.Wolf },
  //school
  { id: 'schoolBear1', x: 195, y: 280, ...MonsterTypes.Bear },
  { id: 'schoolChicken1', x: 220, y: 270, ...MonsterTypes.Chicken },
  { id: 'schoolChicken2', x: 320, y: 250, ...MonsterTypes.Chicken },
  { id: 'schoolChicken3', x: 336, y: 260, ...MonsterTypes.Chicken },
  { id: 'schoolChicken4', x: 345, y: 280, ...MonsterTypes.Chicken },
  { id: 'schoolBear2', x: 245, y: 255, ...MonsterTypes.Bear },
  { id: 'schoolbatl', x: 260, y: 280, ...MonsterTypes.Bat },
  { id: 'schoolWolves1', x: 230, y: 360, ...MonsterTypes.Wolf },
  { id: 'schoolBoar1', x: 289, y: 262, ...MonsterTypes.Boar },
  { id: 'schoolMutBoar', x: 270, y: 390, ...MonsterTypes.MutantBoar},
  //fire station
  { id: 'fireDogs1',x: 362, y: 265, ...MonsterTypes.Dog },
  { id: 'firebatl', x: 390, y: 265, ...MonsterTypes.Bat },
  { id: 'firebat2', x: 390, y: 320, ...MonsterTypes.Bat },
  { id: 'fireBear', x: 395, y: 245, ...MonsterTypes.Bear },
  { id: 'fireBoar1', x: 430, y: 255, ...MonsterTypes.Boar },
  { id: 'fireBoar2', x: 450, y: 275, ...MonsterTypes.Boar },
  { id: 'fireWolves', x: 365, y: 305, ...MonsterTypes.Wolf },
  { id: 'fireMutChicken', x: 400, y: 360, ...MonsterTypes.MutantChicken },
  //police station
  { id: 'policeBoar1', x: 445, y: 225, ...MonsterTypes.Boar },
  { id: 'policeWolves', x: 486, y: 165, ...MonsterTypes.Wolf },
  { id: 'policeChicken', x: 465, y: 175, ...MonsterTypes.Chicken },
  { id: 'policeBear', x: 490, y: 195, ...MonsterTypes.Bear },
  { id: 'policeBat',x: 505, y: 280, ...MonsterTypes.Bat },
  { id: 'policeMutBoar', x: 530, y: 295, ...MonsterTypes.MutantBoar },
  //gas station
  { id: 'gasDogs',x: 320, y: 195, ...MonsterTypes.Dog },
  { id: 'gasChickens', x: 225, y: 125, ...MonsterTypes.Chicken },
  { id: 'gasBear', x: 275, y: 135, ...MonsterTypes.Bear },
  { id: 'gasChicken', x: 280, y: 150, ...MonsterTypes.Chicken },
  { id: 'gasWolves', x: 277, y: 110, ...MonsterTypes.Wolf },
  { id: 'gasMutBoar', x: 310, y: 70, ...MonsterTypes.MutantBoar },
  
  //alley
  { id: 'alleyChickens1', x: 351, y: 120, ...MonsterTypes.Chicken },
  { id: 'alleyChickens2', x: 350, y: 100, ...MonsterTypes.Wolf },
  { id: 'alleybat1', x: 388, y: 97, ...MonsterTypes.Bat },
  { id: 'alleybat2', x: 415, y: 75, ...MonsterTypes.Bat },
  { id: 'alleyWolves', x: 418, y: 124, ...MonsterTypes.Wolf },
  { id: 'alleyBear', x: 445, y: 90, ...MonsterTypes.Bear },
  { id: 'alleyMutBoar', x: 490, y: 105, ...MonsterTypes.MutantBoar },
  //temple
  { id: 'templeChickens1', x: 535, y: 175, ...MonsterTypes.Chicken },
  { id: 'templeChickens2', x: 615, y: 230, ...MonsterTypes.Chicken },
  { id: 'templebat1', x: 615, y: 215, ...MonsterTypes.Bat },
  { id: 'templebat2', x: 675, y: 270, ...MonsterTypes.Bat },
  { id: 'templeBoar1', x: 620, y: 190, ...MonsterTypes.Boar },
  { id: 'templeBoar2', x: 645, y: 215, ...MonsterTypes.Boar },
  { id: 'templeBoar3', x: 670, y: 295,  ...MonsterTypes.Boar },
  { id: 'templeWolves', x: 675, y: 320  , ...MonsterTypes.Wolf },
  { id: 'templeBear1', x: 580, y: 180, ...MonsterTypes.Bear },
  { id: 'templeBear2', x: 675, y: 235, ...MonsterTypes.Bear },
  { id: 'templeMutBear',x: 700, y: 280, ...MonsterTypes.MutantBear },
  //stream
  { id: 'streamBoar1', x: 575, y: 360, ...MonsterTypes.Boar },
  { id: 'streamBoar2', x: 600, y: 355, ...MonsterTypes.Boar },
  { id: 'streamWolves', x: 570, y: 310, ...MonsterTypes.Wolf },
  { id: 'streambat', x: 630, y: 380, ...MonsterTypes.Bat },
  { id: 'streamBear1', x: 590, y: 390, ...MonsterTypes.Bear },
  { id: 'streamBear2', x: 590, y: 405, ...MonsterTypes.Bear },
  //pond
  { id: 'pondChicken1', x: 480, y: 380, ...MonsterTypes.Chicken },
  { id: 'pondBear1', x: 500, y: 375, ...MonsterTypes.Bear },
  { id: 'pondBear2', x: 515, y: 470, ...MonsterTypes.Bear },
  { id: 'pondWolves1', x: 530, y: 370, ...MonsterTypes.Wolf },
  { id: 'pondWolves2', x: 500, y: 445, ...MonsterTypes.Wolf },
  { id: 'pondChicken2', x: 535, y: 490, ...MonsterTypes.Chicken },
  
  //hospital
  { id: 'hospitalChicken', x: 640, y: 515, ...MonsterTypes.Chicken },
  { id: 'hospitalBat2', x: 620, y: 530, ...MonsterTypes.Bat },
  { id: 'hospitalbat', x: 670, y: 490, ...MonsterTypes.Bat },
  { id: 'hospitalMutDogs', x: 695, y: 515, ...MonsterTypes.MutantDog },
  { id: 'hospitalDogs', x: 600, y: 560, ...MonsterTypes.Dog },
  { id: 'hospitalWolves', x: 660, y: 545,  ...MonsterTypes.Wolf }, 
  //factory
  { id: 'factoryMutWolves', x: 640, y: 730, ...MonsterTypes.MutantWolf },
  { id: 'factoryWolves1', x: 655, y: 625, ...MonsterTypes.Wolf },
  { id: 'factoryWolves2', x: 575, y: 785, ...MonsterTypes.Wolf },
  { id: 'factoryBear1',x: 660, y: 680, ...MonsterTypes.Bear },
  { id: 'factoryBear2', x: 595, y: 760, ...MonsterTypes.Bear },
  { id: 'factorybat1', x: 615, y: 735, ...MonsterTypes.Bat },
  { id: 'factorybat2', x: 560, y: 765, ...MonsterTypes.Bat },
  { id: 'factoryBoar', x: 535, y: 740, ...MonsterTypes.Boar }, 
  { id: 'factoryDogs1', x: 590, y: 735, ...MonsterTypes.Dog },
  { id: 'factoryDogs2', x: 620, y: 635, ...MonsterTypes.Dog },
  { id: 'factoryChicken', x: 620, y: 710, ...MonsterTypes.Chicken },
  //cemetery
  { id: 'cemeteryWolves',x: 475, y: 570, ...MonsterTypes.Wolf },
  { id: 'cemeterybat1', x: 555, y: 550, ...MonsterTypes.Bat },
  { id: 'cemeterybat2', x: 580, y: 580, ...MonsterTypes.Bat },
  { id: 'cemeteryBoar1', x: 590, y: 590, ...MonsterTypes.Boar }, 
  { id: 'cemeteryBoar2', x: 535, y: 575, ...MonsterTypes.Boar },
  { id: 'cemeteryBoar3', x: 510, y: 605, ...MonsterTypes.Boar },
  { id: 'cemeteryBoar4', x: 410, y: 555, ...MonsterTypes.Boar },
  { id: 'cemeteryBear', x: 440, y: 550, ...MonsterTypes.Bear  },
  { id: 'cemeteryChicken1', x: 450, y: 600, ...MonsterTypes.Chicken },
  { id: 'cemeteryChicken2', x: 555, y: 585, ...MonsterTypes.Chicken },
  { id: 'cemeteryMutChickens', x: 545, y: 645, ...MonsterTypes.MutantChicken },
  //chapel
  { id: 'chapelBear1', x: 490, y: 635, ...MonsterTypes.Bear },
  { id: 'chapelBear2', x: 365, y: 600, ...MonsterTypes.Bear },
  { id: 'chapelChicken1', x: 470, y: 645, ...MonsterTypes.Chicken },
  { id: 'chapelChicken2', x: 455, y: 655, ...MonsterTypes.Chicken },
  { id: 'chapelChicken3', x: 410, y: 585, ...MonsterTypes.Chicken },
  { id: 'chapelChicken4', x: 425, y: 605, ...MonsterTypes.Chicken },
  { id: 'chapelbat1', x: 390, y: 575, ...MonsterTypes.Bat },
  { id: 'chapelbat2', x: 445, y: 670, ...MonsterTypes.Bat },
  { id: 'chapelBoar', x: 445, y: 625, ...MonsterTypes.Boar },
  //dock
  { id: 'dockBear1', x: 460, y: 810, ...MonsterTypes.Wolf },
  { id: 'dockBear2', x: 398, y: 860, ...MonsterTypes.Bear },
  { id: 'dockBear3', x: 395, y: 865, ...MonsterTypes.Bear },
  { id: 'dockBoar1', x: 425, y: 760, ...MonsterTypes.Boar },
  { id: 'dockBoar2', x: 460, y: 790, ...MonsterTypes.Boar},
  { id: 'dockDogs',  x: 370, y: 810, ...MonsterTypes.Dog },
  { id: 'dockChicken', x: 450, y: 770, ...MonsterTypes.Chicken },
  { id: 'dockbat1', x: 480, y: 765, ...MonsterTypes.Bat },
  //warehouse
  { id: 'wareBear1', x: 285, y: 780, ...MonsterTypes.Bear },
  { id: 'wareBear2', x: 290, y: 785, ...MonsterTypes.Bear },
  { id: 'wareBoar1', x: 275, y: 750, ...MonsterTypes.Boar },
  { id: 'wareBoar2', x: 355, y: 765, ...MonsterTypes.Boar },
  { id: 'wareChicken', x: 375, y: 720, ...MonsterTypes.Chicken },
  { id: 'wareMutChicken', x: 350, y: 700, ...MonsterTypes.MutantChicken },
  { id: 'warebat1', x: 310, y: 760, ...MonsterTypes.Bat },
  //uptown
  { id: 'uptownMutDogs', x: 150, y: 685, ...MonsterTypes.MutantDog },
  { id: 'uptownWolves1',x: 235, y: 685, ...MonsterTypes.Wolf },
  { id: 'uptownWolves2',x: 275, y: 640, ...MonsterTypes.Wolf },
  { id: 'uptownChicken1', x: 235, y: 725, ...MonsterTypes.Chicken },
  { id: 'uptownChicken2', x: 210, y: 655, ...MonsterTypes.Chicken },
  { id: 'uptownbat1', x: 170, y: 705, ...MonsterTypes.Bat },
  { id: 'uptownBoar1', x: 270, y: 665, ...MonsterTypes.Boar },
  { id: 'uptownBoar2',x: 185, y: 625, ...MonsterTypes.Boar },
  { id: 'uptownBear', x: 190, y: 720, ...MonsterTypes.Bear }, 
  //forest
  { id: 'forestMutDogs', x: 335, y: 550, ...MonsterTypes.MutantDog },
  { id: 'forestChicken1', x: 275, y: 550, ...MonsterTypes.Chicken },
  { id: 'forestChicken2', x: 285, y: 515, ...MonsterTypes.Chicken },
  { id: 'forestbat1', x: 255, y: 545, ...MonsterTypes.Bat },
  { id: 'forestBear1', x: 245, y: 510, ...MonsterTypes.Bear },
  { id: 'forestWolves1',x: 300, y: 490, ...MonsterTypes.Wolf },
  { id: 'forestBoar1', x: 285, y: 565, ...MonsterTypes.Boar },
  { id: 'forestBoar2', x: 270, y: 480, ...MonsterTypes.Boar },
  { id: 'forestBoar3', x: 250, y: 465, ...MonsterTypes.Boar },

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