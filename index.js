const headQuarters = 42;

function distanceFromHqInBlocks(pickUp) {
    if (pickUp > headQuarters){
        return pickUp - headQuarters;
    }
    else 
        return headQuarters - pickUp;
}

function distanceFromHqInFeet(pickUp) {
    return (distanceFromHqInBlocks(pickUp)) * 264;
}

function distanceTravelledInFeet(placeA, placeB) {
    if (placeA > placeB){
        return (placeA - placeB) * 264;
    }
    else 
        return (placeB - placeA) * 264;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance < 400) {
        return 0;
    }
    else if (distance > 400 && distance < 2000){
        return (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance <=2500) {
        return 25;
    }
    else if (distance > 2500) {
        return "cannot travel that far";
    }
}