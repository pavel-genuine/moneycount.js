
function moneyCount(money) {

    console.log('');
    console.log('');
    console.log('NOTES:');
    console.log('......');

    if (money >= 100) {

        var hundredNotes = Math.floor(money / 100);

        console.log('100 notes;', hundredNotes);
    }
    if (money < 100) {
        console.log('100 notes;', 0)

    }
    if ((money % 100) >= 50) {

        var fiftyNotes = Math.floor((money % 100) / 50);
        console.log('50 notes;', fiftyNotes);

    }

    if ((money % 100) < 50 || money < 50) {
        console.log('50 notes;', 0)
    }

    if ((money % 100) % 50 >= 20) {

        var twentyNotes = Math.floor(((money % 100) % 50) / 20)

        console.log('20 notes', twentyNotes);
    }

    if ((money % 100) % 50 < 20 || money < 20) {
        console.log('20 notes;', 0)
    }

    if ((((money % 100) % 50) % 20) >= 10) {

        var tenNotes = Math.floor(((money % 100) % 20) / 10)
        // = Math.floor((money % 100) / 10) + 

        console.log('10 notes', tenNotes);

    }

    if ((((money % 100) % 50) % 20) < 10 || money < 10) {
        console.log('10 notes;', 0)
    }

    if ((((money % 100) % 50) % 20) % 10 >= 5) {

        var fiveNotes = Math.floor((((money % 100) % 20) % 10) / 5)

        console.log('5 notes', fiveNotes);

    }
    if ((((money % 100) % 50) % 20) % 10 < 5 || money < 5) {
        console.log('5 notes;', 0)
    }


    if (((((money % 100) % 50) % 20) % 10 % 5) >= 2) {
        var twoNotes = Math.floor(((((money % 100) % 20) % 10) % 5) / 2)

        console.log('2 notes', twoNotes);

    }

    if ((((((money % 100) % 50) % 20) % 10) % 5) < 2 || money < 2) {
        console.log('2 notes;', 0)
    }

    console.log('');
    console.log('');
    console.log('COINS:');
    console.log('......');

    if (((((money % 100) % 50) % 20) % 10 % 5) % 2 >= 1) {

        var OneCoins = Math.floor((((((money % 100) % 20) % 10) % 5) % 2) / 1)

        console.log('1 coins', OneCoins);
    }

    if (((((money % 100) % 50) % 20) % 10 % 5) % 2 < 1 || money < 1) {
        console.log('1 coins;', 0)
    }


    if ((((((((money % 100) % 50) % 20) % 10) % 5) % 2) % 1) >= .50) {

        var halfCoins = Math.floor(((((((money % 100) % 20) % 10) % 5) % 2) % 1) / .50)

        console.log('.50 coins', halfCoins);

    }

    if ((((((((money % 100) % 50) % 20) % 10) % 5) % 2) % 1) < .50 || money < .50) {
        console.log('.50 coins;', 0)
    }


    if (((((((((money % 100) % 50) % 20) % 10) % 5) % 2) % 1) % .5) >= .25) {

        var oneFourthCoins = Math.floor((((((((money % 100) % 20) % 10) % 5) % 2) % 1) % .50) / .25)

        console.log('.25 coins', oneFourthCoins);

    }

    if (((((((((money % 100) % 50) % 20) % 10) % 5) % 2) % 1) % .5) < .25 || money < .25) {
        console.log('.25 coins;', 0)
    }

    if (((((((((money % 100) % 20) % 10) % 5) % 2) % 1) % .50) % .25) >= .10) {

        var oneTenthCoins = Math.floor(((((((((money % 100) % 20) % 10) % 5) % 2) % 1) % .50) % .25) / .10)

        console.log('.10 coins', oneTenthCoins);
    }

    if (((((((((money % 100) % 20) % 10) % 5) % 2) % 1) % .50) % .25) < .10 || money < .10) {
        console.log('.10 coins;', 0)
    }


    if ((((((((((money % 100) % 20) % 10) % 5) % 2) % 1) % .50) % .25) % .10) >= .05) {

        var oneTwentythCoins = Math.floor((((((((((money % 100) % 20) % 10) % 5) % 2) % 1) % .50) % .25) % .10) / .05)

        console.log(' .05 coins', oneTwentythCoins);

    }

    if ((((((((((money % 100) % 20) % 10) % 5) % 2) % 1) % .50) % .25) % .10) < .05 || money < .05) {
        console.log('.05 coins;', 0)
    }


    if (((((((((((money % 100) % 20) % 10) % 5) % 2) % 1) % .50) % .25) % .10) % .05) >= .01) {

        var oneHundredthCoins = Math.floor(((((((((((money % 100) % 20) % 10) % 5) % 2) % 1) % .50) % .25) % .10) % .05) / .01)

        console.log('.01 coins', oneHundredthCoins);
    }

    else {
        console.log('no money available')
    }
}

moneyCount(4445.320501);