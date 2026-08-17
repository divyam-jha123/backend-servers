
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
        },

        // /api/users/search?firstName=divyam&lastName=jha
        "/api/users/search": req => {
            const { searchParams } = new URL(req.url);

            const firstName = searchParams.get("firstName");
            const lastName = searchParams.get("lastName");

            return Response.json({
                firstName,
                lastName
            })
        },
        

        "/api/users/:id": req => {
            const { id } = req.params;
            return Response.json({
                msg : `this is ${id}`
            })
        }
    },

    fetch(req) {
        return new Response("Not Found", { status: 404 });
    },
})


console.log(`Server running at ${server.url}`);