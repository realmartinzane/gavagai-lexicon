import axios from 'axios'
import {proxy, baseUrl, apiKey, additionalFields} from '../base'

export default class Search
{
    constructor(query)
    {
        this.query = query
    }

    async getResults()
    {
        try
        {
            const response = await axios(`${proxy}${baseUrl}lexicon/${this.query.language}/${this.query.word}?apiKey=${apiKey}&additionalFields=${additionalFields}`)
            this.result = response.data.semanticallySimilarWords
        }
        catch(err)
        {
            alert(error)
        }
    }
}