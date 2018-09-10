
function lawOfCosines (angleC, sideA, sideB) {
  let sideC = precise(Math.sqrt(square(sideA) + square(sideB) - 2 * (sideA) * (sideB) * Math.cos(toRadians(angleC))))
  let angleA = precise(Math.acos((square(sideB) - square(sideA) + square(sideC)) / (2 * sideA * sideC)) * (180 / Math.PI))
  let angleB = 180 - angleA - angleC
  let triangleState = {
    sideA, sideB, sideC, angleA, angleB, angleC
  }
  triangleState = calculateCoordinates(triangleState)
  triangleState.centroid = calculateCentroid(triangleState.coordinates.pointA, triangleState.coordinates.pointB, triangleState.coordinates.pointC)
  return triangleState
}

function calculateCentroid (pointA, pointB, pointC) {
  let xCoordinate = ((pointA.x + pointB.x + pointC.x) / 3)
  let yCoordinate = ((pointA.y + pointB.y + pointC.y) / 3)
  return {}
}

function calculateCoordinates (triangleState) {
  triangleState.coordinates = {}
  triangleState.coordinates.pointA = {x: 0, y: 0}
  triangleState.coordinates.pointB = {}
  triangleState.coordinates.pointB.y = precise(Math.sin(toRadians(triangleState.angleC)) * triangleState.sideA)
  triangleState.coordinates.pointB.x = precise(Math.cos(toRadians(triangleState.angleC)) * triangleState.sideA)
  triangleState.coordinates.pointC = {}
  triangleState.coordinates.pointC.x = triangleState.sideB
  triangleState.coordinates.pointC.y = 0
  return triangleState
}

function toRadians (angle) {
  return angle * (Math.PI / 180)
}
function square (number) {
  return Math.pow(number, 2)
}
export let triangle = {
  lawOfCosines
}

function precise (x) {
  return Number.parseFloat(x).toPrecision(2)
}
