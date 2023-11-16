import { useState } from 'react';
import Link from 'next/link';


function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <div>
            <Header title="Develop. Preview. Ship. 🚀" />
            <h1>
                Read <Link href="/posts/posts">this page!</Link>
            </h1>
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    );
}

export default HomePage