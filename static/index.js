const processors = {
    genBobiksList: (data) => {
        let str = '';
        for(const k in data) {
            str += 
            `
                <item id="${k}">
                    <img src="${data[k].pic}"></img>
                    <h>${data[k].name}</h>
                    <pre>${data[k].description}</pre>
                </item>
            `
        }
        console.log(data)
        return str;
    }
}

async function foldProcess(fold) {
    fold.classList.add('loading');

    let response = await fetch(fold.getAttribute('src'));

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        let json = await response.json();
        fold.innerHTML = processors[fold.getAttribute('processor')](json);
    } else {
        throw response.status;
    }

    fold.classList.remove('loading');
}

function main() {
    const folds = document.querySelectorAll('fold');
    for(let i = 0; i < folds.length; i++) {
        foldProcess(folds[i]);
    }
    console.log(folds)
}

main();