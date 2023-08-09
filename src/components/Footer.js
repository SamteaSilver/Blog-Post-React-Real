
export default function Footer(props) {
    return (
        <footer>
            <ul>
                <li>
                    <a href="#">{props.home}</a>
                </li>

                <li>
                    <a href="#">{props.women}</a>
                </li>

                <li>
                    <a href="#">{props.men}</a>
                </li>

                <li>
                    <a href="#">{props.street}</a>
                </li>

                <li>
                    <a href="#">{props.cat}</a>
                </li>

                <li>
                    <a href="#">{props.ad}</a>
                </li>

                <li>
                    <a href="#">{props.about}</a>
                </li>

                <li>
                    <a href="#">{props.tips}</a>
                </li>



            </ul>


            <p>&copy; 2013 Valet Industries, Inc</p>
        </footer>

    )
}