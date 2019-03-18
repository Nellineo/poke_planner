const initState = {
    projects: [
       {id: '1', title:'Choose Bulbasaur', content: 'Grass type pokemon: Easy Mode'}, 
       {id: '2', title:'Choose Squirtle', content: 'Water type pokemon: Medium Mode'}, 
       {id: '3', title:'Choose Charmander', content: 'Fire type pokemon: Hard Mode'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state;
        default: 
            return state;
    }
}

export default projectReducer;