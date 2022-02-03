function paperRequirements(book1, book2, book3) {

    var book1Paper = book1 * 100;
    var book2Paper = book2 * 200;
    var book3Paper = book3 * 300;

    var totalPaper = book1Paper + book2Paper + book3Paper;

    return totalPaper;
}

console.log(paperRequirements(1000, 20000, 3000));