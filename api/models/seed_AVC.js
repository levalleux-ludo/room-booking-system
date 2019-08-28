const Room = require('./Room')

Room.create([
  {
    name: 'Conference Room',
    floor: '1',
    capacity: 20,
    assets: {
      projector: true,
      pcLab: true,
      whiteBoard: true
    }
  },
  {
    name: 'Basement',
    floor: '0',
    capacity: 18,
    assets: {
      projector: true
    }
  },
  {
    name: 'Thurston Room',
    floor: '1',
    capacity: 18,
    assets: {
      projector: true,
      opWalls: true
    }
  },
  {
    name: 'White Room',
    floor: '1',
    capacity: 24
  },
  {
    name: 'Middle Room',
    floor: '1',
    capacity: 18,
    assets: {
      opWalls: true
    }
  },
  {
    name: 'Old BME Room',
    floor: '1',
    capacity: 18
  }
])
  .then((rooms) => {
    console.log(`Created ${rooms.length} rooms.`)
  })
  .catch((error) => {
    console.error(error)
  })