const METERS_IN_KM = 1000,
    METERS_IN_FOOT = 0.305,
    distanceInKm = prompt('Type a distance in km'),
    distanceInFoot = prompt('Type a distance in foot'),
    distanceInMeters1 = distanceInKm * METERS_IN_KM,
    distanceInMeters2 = distanceInFoot * METERS_IN_FOOT;

if (distanceInMeters1 > distanceInMeters2) {
    alert('First distance is bigger');
} else if (distanceInMeters1 < distanceInMeters2) {
    alert('Second distance is bigger');
} else {
    alert('Distances are equal');
}