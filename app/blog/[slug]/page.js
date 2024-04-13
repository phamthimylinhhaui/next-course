export default function BlogDetail({ params }) {
    return (
        <main>
            <h1>this is blog detail</h1>
            <p>{ params.slug }</p>
        </main>

    )
}