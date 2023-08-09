export default function Article(props) {
    return (
        <main>
            <h2>{props.date}</h2>
            <h1 className="title">{props.title}</h1>
            <img src={props.img} alt={props.alt} />
            <article>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, deleniti aperiam? Molestiae omnis
                    debitis nulla fugit deserunt explicabo praesentium ab maxime voluptate repellat officiis modi harum
                    pariatur dolorum, accusantium repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid unde eos eius porro nesciunt, assumenda cum veniam suscipit optio fuga praesentium, aliquam
                    dicta velit nulla ut nihil exercitationem officia repellendus. Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Cumque ex atque est molestias magni inventore dignissimos sapiente quam. Atque quo
                    placeat est voluptatem aspernatur dolorum id dolores voluptatum nam enim!
                    Vel ullam eius vero esse totam quod deserunt et atque delectus. Amet laborum velit molestias recusandae
                    iste perferendis alias omnis. Accusantium distinctio voluptatem quas tempora blanditiis? Tempore impedit
                    alias fugiat?
                    Reiciendis atque dolore ipsum temporibus suscipit maxime illo iure sunt repellendus repudiandae
                    blanditiis ipsam ullam beatae vel laudantium libero rerum nemo facere alias fugiat veniam, mollitia
                    nihil inventore! In, nesciunt?</p>
                <h3>Continues...</h3>
            </article>



        </main>

    )

}