/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let numberOfTriangles = 0;

    for (let i = 0; i < preferences.length; i++) {
        if (preferences[i] === i+1) {
            preferences[i] = 0;
        }
        if (preferences[i] === 0) {
            continue;
        }

        let loveSequence = [];
        loveSequence.push(preferences[i]);

        for (let j = 0; j < 2; j++) {
            loveSequence.push(preferences[loveSequence[j] - 1]);
        }

        if (loveSequence[2] === i + 1) {
            numberOfTriangles++;
            loveSequence.forEach(function (item) {
                preferences[item-1] = 0;
            });
        }
    }
    return numberOfTriangles;
};
