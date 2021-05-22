
const initState = {
    cursor: 0,
    enlarge:false
}


const CarouselReducer = (state = initState, action) => {



    switch (action.type) {

        case ("CHANGE_CURSOR"):


            return {
                ...state,
                cursor: action.payload
            };
        case ("CHANGE_ENLARGE"):


            return {
                ...state,
                enlarge: action.payload,
            };


        default:
            return state;
    }



}

export default CarouselReducer