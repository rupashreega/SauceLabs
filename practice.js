const poem = `Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;

Then took the other, as just as fair,
And having perhaps the better claim,
Because it was grassy and wanted wear;
Though as for that the passing there
Had worn them really about the same,

And both that morning equally lay
In leaves no step had trodden black.
Oh, I kept the first for another day!
Yet knowing how way leads on to way,
I doubted if I should ever come back.

I shall be telling this with a sigh
Somewhere ages and ages hence:
Two roads diverged in a wood, and I—
I took the one less traveled by,
And that has made all the difference.`;

// (a) Find all words ending with 'ing'
const wordsEndingWithIng = poem.match(/\b\w+ing\b/g) || []; // Using regular expression and nullish coalescing for empty array

// (b) Split all lines
const lines = poem.split('\n');

// (c) Count number of words (excluding empty lines)
const wordCount = lines
                    .filter(line => line.trim() !== '')
                    .reduce((count, line) => count + line.trim().split(' ').length, 0);

// (d) Replace 'made' with 'MADE' (case-sensitive)
const poemWithMadeUppercase = poem.replace(/\bmade\b/g, 'MADE');

// (e) Reverse the last line
const reversedLastLine = lines.slice(0, -1).concat(lines.slice(-1)[0].split(' ').reverse().join(' '));

console.log("Words ending with 'ing':", wordsEndingWithIng);
console.log("Lines:", lines);
console.log("Word count:", wordCount);
console.log("Poem with 'made' replaced:", poemWithMadeUppercase);
console.log("Poem with last line reversed:", reversedLastLine.join('\n'));
