import stock from "../Components/stock";
/*const itemsData = [
    {
        id: 1, title: 'Remera roja', price: '$550', pictureUrl: 'https://picsum.photos/203',
    },
    {
        id: 2, title: 'Buzo rojo', price: '$790', pictureUrl: 'https://picsum.photos/204',
    },
    {
        id: 3, title: 'Pantalon rojo', price: '$1500', pictureUrl: 'https://picsum.photos/205',
    },
    {
        id: 4, title: 'Remera azul', price: '$550', pictureUrl: 'https://picsum.photos/206',
    },
    {
        id: 5, title: 'Buzo azul', price: '$790', pictureUrl: 'https://picsum.photos/207',
    },
    {
        id: 8, title: 'Pantalon azul', price: '$1500', pictureUrl: 'https://picsum.photos/208',
    },
];*/

export const getItems = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
        setTimeout(() => {
            resolve(stock);
        }, 2000);
    } else {
        reject(new Error("No hay datos"));
    }
});