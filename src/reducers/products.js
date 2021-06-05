let initialState = [
    {
        id : 1,
        name : 'iphone 6',
        price : 80000,
        status : true
    },
    {
        id : 2,
        name : 'iphone 7',
        price : 80000,
        status : false
    },
    {
        id : 3,
        name : 'iphone 8',
        price : 90000,
        status : true
    },
    {
        id : 4,
        name : 'iphone X',
        price : 100000,
        status : true
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default :
            return [...state];
    }
};

export default products;