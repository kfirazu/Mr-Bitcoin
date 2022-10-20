import { storageService } from './storage.service.js'
import axios from 'axios'
export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    // getAvgBlockSize,
}

const STORAGE_KEY = 'bitcoinDB'
const KEY = 'marketPriceHistoryDB'

async function getRate() {
    let rate = storageService.load(STORAGE_KEY)
    if (!rate) {
        const res = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
        rate = res.data
        // console.log('res.data:', rate)
        storageService.save(STORAGE_KEY, rate)
        
    }
    return rate
}

async function getMarketPriceHistory(){
    let marketPriceHistory = storageService.load(KEY)
    console.log('marketPriceHistory:', marketPriceHistory)

    if(!marketPriceHistory) {
        marketPriceHistory = await axios.get('https://api.blockchain.info/charts/market-price?cors=true')
        console.log('marketPriceHistory:', marketPriceHistory)
        marketPriceHistory = marketPriceHistory.data
        //values - 2 arrays of objects that contains x and y keys¸
        // x is timestamp - need to multiple by 1000 to get a real time stamp
        // y is the numeric value of btc
        storageService.save(KEY, marketPriceHistory)
    }
    return marketPriceHistory
}

async function getAvgBlockSize(){
}

