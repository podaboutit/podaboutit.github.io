const generateQuote = function() {
    const quotes = [
        {
            quote: "I am more and more convinced that in the life of civilizations as in the lives of individuals too much matter that cannot be digested, too much experience that has not been imagined and probed and understood, ends in total rejection of everything — ends in anomie.",
            author: "Mary Sarton"
        },
        {
            quote: "Books are the treasured wealth of the world and the fit inheritance of nations.",
            author: "Henry David Thoreau"
        },
        {
            quote: "I laugh at what you call dissolution and I know the amplitude of time.",
            author: "Walt Whitman"
        },
        {
            quote: "I did what I could I think. I sang some. I held my hand out.",
            author: "Jane Mead, 'I Wonder If I Will Miss The Moss'"
        },
        {
            quote: "Man is by nature a political animal.",
            author: "Aristotle"
        },
        {
            quote: "free love until the check comes",
            author: "Hanif Abdurraqib"
        },
        {
            quote: "The arc of circling bodies is determined by the length of their tether. Moons, coins, men.",
            author: "The Judge, 'Blood Meridian'"
        },
        {
            quote: "It takes two people to make you and one people to die. That's how the world is going to end.",
            author: "William Faulkner, 'As I Lay Dying'"
        },
        {
            quote: "You shouldn't be surprised that a fig tree produces figs, nor the world what it produces.",
            author: "Marcus Aurelius'"
        },
        {
            quote: "Public opinion is a weak tyrant compared with out own private opinion.",
            author: "Henry David Thoreau"
        },
        {
            quote: "There is still plenty of good music to be writen in C major.",
            author: "Arnold Schoenberg"
        },
    ];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;
}

window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}