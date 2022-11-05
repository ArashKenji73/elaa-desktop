export const getCategories = 'api/Categories/index.json'
export const getSales = 'api/Picture3ds/filterPicture3ds.json?limit=&page=&order_by=&order_mode=&gender=&color=&isOnSale=true'
export function getTopSales(limit=20, page=1){
    return `api/Picture3ds/filterPicture3ds.json?limit=${limit}&page=${page}&order_by=sales&order_mode=desc`
}