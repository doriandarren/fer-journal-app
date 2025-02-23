


export const startNewNote = () => {
 
    return async(dispatch, getState) => {


        console.log(getState());

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),      
        }

        //! dispatch

    }

}
