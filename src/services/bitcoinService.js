import { storageService } from './storage.service.js'
import axios from 'axios'
export const bitcoinService = {
    getRate,
    // getMarketPriceHistory,
    // getAvgBlockSize,
}

const STORAGE_KEY = 'rateDB'

async function getRate() {
    let rate = storageService.load(STORAGE_KEY)
    if (!rate) {
        const res = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
        rate = res.data
        console.log('res.data:', rate)
        storageService.save(STORAGE_KEY, rate)
        
    }
    return rate
}

