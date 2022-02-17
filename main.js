const computer = {
    id: 1,
    manufacturer: "Apple",
    make: "Macbook",
    model: "Pro",
    specs: {
        memory: 32,
        hardDrive: "500 GB",
        processor: 2.4
    }
}

const compHTMLMaker = (compObject) => {
    const compHTMLSection = `<section id="computer--${compObject.id}">
    <h1>${compObject.manufacturer} ${compObject.make}</hi>
    <div>Model: ${compObject.model}</div>
    <div>Memory: ${compObject.specs.memory}</div>
    <div>Hard drive space: ${compObject.specs.hardDrive}</div>
    <div>Processor speed: ${compObject.specs.processor}</div>
    </section>`
    return compHTMLSection
}

stringReturnedFromFunction = compHTMLMaker(computer)
console.log(stringReturnedFromFunction)

