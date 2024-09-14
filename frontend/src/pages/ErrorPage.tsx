import { useRouteError, ErrorResponse } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError() as ErrorResponse;

    return (
        <main className="font-ubuntu text-white w-screen h-screen flex flex-col items-center justify-center gap-2">
            <h1 className="text-5xl font-bold">Error 404</h1>
            <h1 className="text-3xl">Error: {error.statusText || error.data}</h1>
        </main>
    )
}