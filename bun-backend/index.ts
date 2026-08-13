
const server = Bun.serve({
    port: 3000,
    routes: {
        "/": new Response("this is a bun server"),

        "/api/users": {
            // get users
            GET: () => new Response("list users"),
            // add users
            POST: async req => {
                const body = await req.json();
                return Response.json({
                    created: true,
                    body: body
                })
            }
        }
    },

    fetch(req) {
        return new Response("Not Found", { status: 404 });
    },
})


console.log(`Server running at ${server.url}`);