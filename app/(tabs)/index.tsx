import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, ImageBackground, Animated, PanResponder, TouchableOpacity } from 'react-native';
import styles from '../style';
import { spawnLocations } from '../../utils/spawnLocations';
import { useDayNightCycle } from '../../utils/dayNightCycle'; // Import the day/night cycle hook

const MapScreen = () => {
  const [zoom, setZoom] = useState(1);
  const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const [showSpawnLocations, setShowSpawnLocations] = useState(true);
  const [showTimers, setShowTimers] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0); // Track elapsed time since game start
  const [touchedMonsterId, setTouchedMonsterId] = useState<string | null>(null); // Track touched monster
  const [isLegendVisible, setIsLegendVisible] = useState(false); // Track legend visibility

  // Use the day/night cycle hook
  const { cycleTime, isDay, currentCycleIndex, currentCycle, formatTime } = useDayNightCycle();

  // Update elapsed time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1); // Increment elapsed time
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Handle zoom in and out
  const handleZoomIn = () => setZoom((prevZoom) => Math.min(prevZoom + 0.1, 3));
  const handleZoomOut = () => setZoom((prevZoom) => Math.max(prevZoom - 0.1, 0.5));

  // PanResponder for smooth panning
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    })
  ).current;

  // Toggle spawn locations visibility
  const toggleSpawnLocations = () => setShowSpawnLocations(!showSpawnLocations);

  // Toggle timers visibility
  const toggleTimers = () => setShowTimers(!showTimers);

  // Handle touch effect for monsters
  const handleTouch = (monsterId: string) => {
    if (touchedMonsterId === monsterId) {
      // If the same monster is touched again, hide the timer
      setTouchedMonsterId(null);
    } else {
      // Otherwise, show the timer for the touched monster
      setTouchedMonsterId(monsterId);
    }
  };

  // Toggle legend visibility
  const toggleLegend = () => setIsLegendVisible(!isLegendVisible);

  // Legend items for the panel
  const legendItems = [
    { icon: require('../../assets/images/animals/1.png'), text: 'Chickens' },
    { icon: require('../../assets/images/animals/2.png'), text: 'Bat' },
    { icon: require('../../assets/images/animals/3.png'), text: 'Boar' },
    { icon: require('../../assets/images/animals/4.png'), text: 'Dogs' },
    { icon: require('../../assets/images/animals/5.png'), text: 'Wolves' },
    { icon: require('../../assets/images/animals/6.png'), text: 'Bear' },
    { icon: require('../../assets/images/animals/1.1.png'), text: 'Mutant Chickens' },
    { icon: require('../../assets/images/animals/3.3.png'), text: 'Mutant Boar' },
    { icon: require('../../assets/images/animals/4.4.png'), text: 'Mutant Dogs' },
    { icon: require('../../assets/images/animals/5.5.png'), text: 'Mutant Wolves' },
    { icon: require('../../assets/images/animals/6.6.png'), text: 'Mutant Bear' },
    
    
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Eternal Return SpawnPoints</Text>
      <Text style={styles.header}>Patch: 1.42</Text>

      {/* Legend Dropdown Button */}
      <TouchableOpacity onPress={toggleLegend} style={styles.legendDropdownButton}>
        <Text style={styles.legendDropdownButtonText}>
          {isLegendVisible ? 'Hide Legend' : 'Show Legend'}
        </Text>
      </TouchableOpacity>

      {/* Legend Panel (Dropdown) */}
      {isLegendVisible && (
        <View style={styles.legendPanel}>
          {legendItems.map((item, index) => (
            <View key={index} style={styles.legendItem}>
              <Image source={item.icon} style={styles.legendIcon} />
              <Text style={styles.legendText}>{item.text}</Text>
            </View>
          ))}

          {/* Spawn State Explanation */}
          <View style={styles.spawnExplanation}>
            <View style={styles.spawnExample}>
              <Image
                source={require('../../assets/images/animals/2.png')} // Use any monster icon
                style={[styles.legendIcon, { opacity: 0.3 }]} // Translucent example
              />
              <Text style={styles.legendText}>Not Spawned Yet</Text>
            </View>
            <View style={styles.spawnExample}>
              <Image
                source={require('../../assets/images/animals/2.png')} // Use any monster icon
                style={styles.legendIcon} // Normal opacity
              />
              <Text style={styles.legendText}>Spawned</Text>
            </View>
          </View>

          <Text style={styles.instructions}>
            Tap on a monster to see its timer. Use the buttons below to toggle spawn locations and timers.
          </Text>
        </View>
      )}

      {/* Zoom controls */}
      <View style={styles.zoomControlsContainer}>
        <TouchableOpacity onPress={handleZoomIn} style={styles.zoomButton}>
          <Text>Zoom In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleZoomOut} style={styles.zoomButton}>
          <Text>Zoom Out</Text>
        </TouchableOpacity>
      </View>

      {/* Toggle spawn locations button */}
      <TouchableOpacity onPress={toggleSpawnLocations} style={styles.toggleButton}>
        <Text>{showSpawnLocations ? 'Hide Spawn Locations' : 'Show Spawn Locations'}</Text>
      </TouchableOpacity>

      {/* Toggle timers button */}
      <TouchableOpacity onPress={toggleTimers} style={styles.toggleTimerButton}>
        <Text>{showTimers ? 'Hide Timers' : 'Show Timers'}</Text>
      </TouchableOpacity>

      {/* Day/Night cycle timer */}
      <View style={{ position: 'absolute', top: 20, right: 20, zIndex: 1, alignItems: 'flex-end' }}>
        <Text style={{ color: '#FFFFFF', fontSize: 18 }}>
          {isDay ? '☀️ DAY' : '🌙 NIGHT'} {currentCycleIndex + 1}
        </Text>
        <Text style={{ color: '#FFFFFF', fontSize: 18 }}>
          Time: {formatTime(currentCycle.duration - cycleTime)}
        </Text>
      </View>

      {/* Map container with pan and zoom */}
      <Animated.View
        style={[
          styles.mapAnimatedView,
          {
            transform: [
              { scale: zoom },
              { translateX: pan.x },
              { translateY: pan.y },
            ],
          },
        ]}
        {...panResponder.panHandlers}
      >
        <View style={styles.mapWrapper}>
          <ImageBackground
            source={require('../../assets/images/Map.png')}
            style={[
              styles.mapImage,
              {
                width: 772 * zoom,
                height: 927 * zoom,
              },
            ]}
          >
            {/* Render spawn locations */}
            {showSpawnLocations &&
              spawnLocations.map((location, index) => {
                const isSpawned = elapsedTime >= location.initialTimer; // Check if the monster has spawned
                const isTouched = touchedMonsterId === location.id; // Check if the monster is touched

                return (
                  <TouchableOpacity
                    key={location.id}
                    onPress={() => handleTouch(location.id)} // Handle touch
                    activeOpacity={1} // Prevent opacity change on press
                  >
                    <View
                      style={[
                        styles.spawnLocation,
                        {
                          top: location.y * zoom,
                          left: location.x * zoom,
                          opacity: isSpawned ? 1 : 0.3, // Translucent if not spawned, fully visible if spawned
                        },
                      ]}
                    >
                      <Image
                        source={location.icon}
                        style={[
                          styles.spawnIcon,
                          { width: 30 * zoom, height: 30 * zoom },
                        ]}
                      />
                      {(showTimers || isTouched) && ( // Show timer if touched or if showTimers is true
                        <Text
                          style={[
                            styles.timerText,
                            {
                              top: -1 * zoom,
                              left: 0,
                            },
                          ]}
                        >
                          {location.initialTimer}s {/* Display timer in seconds */}
                        </Text>
                      )}
                    </View>
                  </TouchableOpacity>
                );
              })}
          </ImageBackground>
        </View>
      </Animated.View>
    </View>
  );
};

export default MapScreen;