import { elements } from '../base'

export const getWord = () => elements.searchWord.value

export const getLanguage = () => elements.searchLanguage.options[elements.searchLanguage.selectedIndex].value

export const clearResults = () => 
{
    elements.resultList.innerHTML = ''
    elements.resultInfo.innerHTML = ''
}

export const clearInput = () => 
{
    elements.searchWord.value = ''
}

const renderWord = word => 
{
    const markup =
    `
    <li class="result__item"><span class="result__word">${word.word}</span></li>
    `
    elements.resultList.insertAdjacentHTML('beforeend', markup)
}

const renderInfo = word => 
{
    elements.resultInfo.innerHTML = `Search results for <span>${word}</span>`
}

const renderEmpty = word => 
{
    elements.resultInfo.innerHTML = `No results found for <span>${word}</span>`
}

export const renderResults = (words, word) =>
{
    renderInfo(word)
    if(words.length > 0)
        words.forEach(renderWord)
    else
        renderEmpty(word)
}