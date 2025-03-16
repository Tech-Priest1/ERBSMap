import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'visible', // Allow content to overflow
  },
  header: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  zoomControlsContainer: {
    position: 'absolute',
    bottom: 20, // Adjusted to be closer to the bottom
    right: 20, // Moved to the right side
    zIndex: 1,
    flexDirection: 'column', // Stack buttons vertically
    alignItems: 'flex-end', // Align buttons to the right
  },
  zoomButton: {
    padding: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 10, // Space between buttons
    borderRadius: 8, // Rounded corners
    alignItems: 'center',
    justifyContent: 'center',
    width: 100, // Fixed width for consistency
  },
  toggleButton: {
    position: 'absolute',
    bottom: 20, // Adjusted to be closer to the bottom
    left: 20, // Moved to the left side
    padding: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 1,
    borderRadius: 8, // Rounded corners
    alignItems: 'center',
    justifyContent: 'center',
    width: 160, // Wider button to fit text
  },
  toggleTimerButton: {
    position: 'absolute',
    bottom: 80, // Positioned above the toggleButton
    left: 20, // Aligned with the toggleButton
    padding: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 1,
    borderRadius: 8, // Rounded corners
    alignItems: 'center',
    justifyContent: 'center',
    width: 100, // Wider button to fit text

  },
  mapWrapper: {
    position: 'absolute', // Use absolute positioning
    top: 0,
    left: 0,
    width: '100%', // Use percentage to allow dynamic resizing
    height: '100%', // Use percentage to allow dynamic resizing
    overflow: 'visible', // Allow content to overflow
  },
  mapImage: {
    width: '100%', // Use percentage to allow dynamic resizing
    height: '100%', // Use percentage to allow dynamic resizing
    resizeMode: 'cover', // Ensure the image covers the area
  },
  spawnLocation: {
    position: 'absolute',
    zIndex: 2,
  },
  spawnIcon: {
    width: 30,
    height: 30,
  },
  timerText: {
    position: 'absolute',
    top: -15,
    color: 'white',
    fontSize: 14,
    fontWeight: 'thin',
  },
  mapAnimatedView: {
    position: 'absolute', // Use absolute positioning
    top: 0,
    left: 0,
    width: '100%', // Use percentage to allow dynamic resizing
    height: '100%', // Use percentage to allow dynamic resizing
    overflow: 'visible', // Allow content to overflow
    pointerEvents: 'auto',
  }, 
  legendPanel: {
    position: 'absolute',
    top: 65,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    padding: 15,
    borderRadius: 8,
    zIndex: 1,
    width: 200, // Fixed width for the panel
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  legendIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  legendText: {
    fontSize: 14,
    color: '#000',
  },
  instructions: {
    marginTop: 20,
    fontSize: 12,
    color: '#000',
    fontStyle: 'italic',
  },spawnExplanation: {
    marginTop: 20,
  },
  spawnExample: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  legendDropdownButton: {
  position: 'absolute',
  top: 20,
  left: 20,
  backgroundColor:  'rgba(255, 255, 255, 0.8)',
  padding: 10,
  borderRadius: 8,
  zIndex: 2,
},
legendDropdownButtonText: {
  fontSize: 14,
  color: 'rgb(0, 0, 0)',
},


});

export default styles;