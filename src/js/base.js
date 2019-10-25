// CONFIG
export const proxy = `https://cors-anywhere.herokuapp.com/`
export const baseUrl = `https://api.gavagai.se/v3/`
export const apiKey = `8c79736f393ab6eff4a864fcfa23344c`
export const additionalFields = 'SEMANTICALLY_SIMILAR_WORDS'

// ELEMENTS
export const elements =
{
    searchForm: document.querySelector('.search'),
    searchWord: document.querySelector('.search__word'),
    searchLanguage: document.querySelector('.search__language'),
    result: document.querySelector('.result'),
    resultInfo: document.querySelector('.result__info'),
    resultList: document.querySelector('.result__list')
}

// ELEMENT STRINGS (FOR ELEMENTS NOT INITIALLY CREATED BY THE DOM)
export const elementStrings =
{
    loader: 'lds-roller',
    resultWord: 'result__word'
}

// LOADER
export const renderLoader = parent => {
    const loader =
        `
        <div class="lds-roller">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
        `
    parent.insertAdjacentHTML('afterbegin', loader)
}

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`)
    if (loader) loader.parentElement.removeChild(loader)
}