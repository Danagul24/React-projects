const book =  {name: 'Dune', author: 'Frank Herbert', price: '15$', imgURL: '/img/books/1.jpg'};
function Details() {
    return(
        <div className="d-flex justify-center">
            <div className="mr-30">
                <img height={400} src={book.imgURL} alt="Book Image" />
            </div>
            <div className="mb-50">
                <h1>{book.name}</h1>
                <p>{book.author} </p>
                <h1>{book.price}</h1>
                <button className="addToCart">Add to cart</button>
                <h2>Description</h2>
                <div className="description">
                    <p>After abandoning his traditional life in a deteriorating Porto Alegre, the narrator of Hugs and Cuddles zealously recommits himself to a man he calls "the engineer", a childhood friend with whom he shared a pivotal sexual encounter. Many years have passed since their prepubescent wrestling; everywhere around them is a nation in decline. Representatives of the Brazilian state--everyone from government officials to the impoverished--endlessly harass passers-by for donations to "the cause," even as a mysterious plague rages. Never mind that. Our insatiable narrator, driven to discover his true self through increasingly transgressive sexual urges, is on an epic journey through the shadows of this dysfunctional yet polite society. The resulting novel is the late João Gilberto Noll's most radical statement: A Book of Revelations-grade voyage to the end of gender and the outermost reaches of sexual and artistic expression. Nimbly translated from Portuguese by Edgar Garbelotto, Hugs and Cuddles is an unapologetically explicit fable of fluidity that takes readers from decaying city centers to the dark corridors of a mysterious submarine to a miserable hovel in the rainforest, where, at long last, our narrator finds peace.</p>
                </div>
            </div>
        </div>
    );
}

export default Details;