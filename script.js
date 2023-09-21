const messageComponents = {
    name: ['sport', 'old pal', 'friend', 'stranger', 'buddy', 'partner', 'amigo'],
    ingredient: ['cateloupes', 'arugula', 'paper bags', 'garlic', 'crickets', 'oysters', 'grass clippings'],
    result: ['moonshine', 'refrigerator magnets', 'pudding', 'air freshener', 'doll clothes', 'meatballs', 'fire starters'],
}

const generateMessage = () => {
    const randomItem = Math.floor(Math.random() * 7);
    return `Hey there, ${messageComponents.name[randomItem]}! When life gives you ${messageComponents.ingredient[randomItem]}, make ${messageComponents.result[randomItem]}!`;
}

console.log(generateMessage());