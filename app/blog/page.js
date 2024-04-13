import Link from "next/link";

export default function BlogPost() {
    return (
        <main>
            <h1>this is list post</h1>
            <ul>
                <li>
                    <Link href="/blog/post-1">post 1</Link>
                </li>
                <li>
                    <Link href="/blog/post-2">post 2</Link>
                </li>
            </ul>
        </main>
    );
}