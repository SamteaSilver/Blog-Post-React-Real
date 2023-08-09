import Nav from './Nav'

export default function Header(props) {
    return (
        <header>
            <h1>Sartre's List</h1>
            <h2>Better-Dressed People</h2>
            <Nav

                women="Women's"
                men="Men's"
                street="On the Street"
                cat="The Catwalk"
                ad="AdWatch"
                about="About"
            />
        </header>
    )
}