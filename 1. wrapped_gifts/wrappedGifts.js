function wrapping(gifts) {
    let wrappedGifts = []
    gifts.forEach(gift => {
        let paper = '';
        for(let i=0; i<gift.length+2; i++){
            paper = paper+='*';
        }
        wrappedGifts.push(paper+'\n*'+gift+'*\n'+paper)
    });
    return wrappedGifts;
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)


console.log(wrapped);