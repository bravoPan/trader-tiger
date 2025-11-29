import YahooFinance from 'yahoo-finance2';
const yahooFinance = new YahooFinance();

export default async function handler(req, res) {
    const { symbols } = req.query;

    if (!symbols) {
        return res.status(400).json({ error: 'Missing symbols query parameter' });
    }

    const symbolList = symbols.split(',').map(s => s.trim());

    try {
        const quotes = await yahooFinance.quote(symbolList);

        // Normalize data if single result is returned (yahoo-finance2 behavior varies)
        const results = Array.isArray(quotes) ? quotes : [quotes];

        const formattedData = results.map(quote => ({
            symbol: quote.symbol,
            name: quote.shortName || quote.longName || quote.symbol,
            price: quote.regularMarketPrice,
            change: quote.regularMarketChange,
            changePercent: quote.regularMarketChangePercent,
            volume: quote.regularMarketVolume,
            rs: Math.floor(Math.random() * (99 - 80) + 80), // Mock RS for now as it's proprietary
        }));

        res.status(200).json(formattedData);
    } catch (error) {
        console.error('Error fetching stock data:', error);
        res.status(500).json({ error: 'Failed to fetch stock data' });
    }
}
