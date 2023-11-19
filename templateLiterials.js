let name = "bob";
console.log(`Hi ${name}.`)

let sentences = `bvzmxööxöcnjdbzözncjösjn
    kjhddjkjkhsadjjkdajs
        njdhjaslşfhjasdşlafaj.`;
console.log(sentences);

function getReasonCount() { return 2; }

let interpolation = `Give me ${(getReasonCount() == 1) ? `one good reason` : `a few reasons`} to try this`;

console.log(interpolation);