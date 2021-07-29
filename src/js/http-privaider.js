const jokesUrl = 'https://api.chucknorris.io/jokes/random';

const getJoke = async()=>{

const answer = await fetch( jokesUrl );

try{

    if(answer.ok){

        const { id, value, icon_url } = await answer.json();

        return { id, value, icon_url } }

        else throw 'No se pudo realizar la peticion';

    }catch(err){

    throw err;
}

};


export{
    getJoke
}
