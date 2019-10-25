import Search from './models/Search'
import * as searchView from './views/searchView'
import { elements, elementStrings, renderLoader, clearLoader } from './base'

// STATE DEFINITION
const state = {}

// SEARCH CONTROLLER
const controlSearch = async (query) => 
{
    if(query.word && query.language)
    {
        state.search = new Search(query)

        searchView.clearResults()
        searchView.clearInput()
        renderLoader(elements.resultList)

        try
        {
            await state.search.getResults()

            clearLoader()
            searchView.renderResults(state.search.result, query.word)
        }
        catch (error)
        {
            alert('Error: Something went wrong!')
            clearLoader()
        }
    }
    else if(!query.word) alert('Error: Word missing!')
    else if (!query.language) alert('Error: Langauge missing!')
}

// CLICK SUBMIT 
elements.searchForm.addEventListener('submit', e => 
{
    const query = 
    {
        word: searchView.getWord(),
        language: searchView.getLanguage()
    }
    e.preventDefault()
    controlSearch(query)
})

// CLICK A WORD
elements.resultList.addEventListener('click', e => 
{
    if (e.target.matches(`.${elementStrings.resultWord}`))
    {
        const query =
        {
            word: e.target.textContent,
            language: searchView.getLanguage()
        }
        controlSearch(query)
    }
})