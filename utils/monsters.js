//patch v10.4.0-17d643 timers for monsters

//timer1 all chickens         initialTimer 0
//timer2 all bears            initialTimer 140
//timer3 all bats             initialTimer 30
//timer4 all dogs             initialTimer 30
//timer5 all boars            initialTimer 60
//timer6 all wolves           initialTimer 110
//timer7 all mutant bears     initialTimer 260
//timer8 all mutant wolves    initialTimer 260
//timer9 all mutant dogs      initialTimer 140
//timer10 all mutant chickens initialTimer 140
//timer11 all mutant boars    initialTimer 140

export const MonsterTypes = {
    Chicken: {
        icon: require('../assets/images/animals/1.png'),
        timerId: 'timer1',
        initialTimer: 0,
    },
    MutantChicken: {
        icon: require('../assets/images/animals/1.1.png'),
        timerId: 'timer0',
        initialTimer: 140,
    },
    Bat: {
        icon: require('../assets/images/animals/2.png'),
        timerId: 'timer3',
        initialTimer: 30,
    },
    Wolf: {
        icon: require('../assets/images/animals/5.png'),
        timerId: 'timer6',
        initialTimer: 110,
    },
    MutantWolf: {
        icon: require('../assets/images/animals/5.5.png'),
        timerId: 'timer8',
        initialTimer: 260,
    },
    Bear: {
        icon: require('../assets/images/animals/6.png'),
        timerId: 'timer2',
        initialTimer: 140,
    },
    MutantBear: {
        icon: require('../assets/images/animals/6.6.png'),
        timerId: 'timer7',
        initialTimer: 260,
    },
    Dog: {
        icon: require('../assets/images/animals/4.png'),
        timerId: 'timer4',
        initialTimer: 30,
    },
    MutantDog: {
        icon: require('../assets/images/animals/4.4.png'),
        timerId: 'timer9',
        initialTimer: 140,
    },
    Boar: {
        icon: require('../assets/images/animals/3.png'),
        timerId: 'timer5',
        initialTimer: 60,
    },
    MutantBoar: {
        icon: require('../assets/images/animals/3.3.png'),
        timerId: 'timer10',
        initialTimer: 140,
    },
};