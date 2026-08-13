import express , { type Request, type Response}  from 'express'

const app = express();
const port = 8000;

app.use(express.json());

app.use((req,res,next) => {
    console.log("tu jake bata");

    next();
})

app.get('/', (req, res) => {
    res.send("this is the home page")
});

app.post("/api/users", async (req: Request, res: Response) => {

    // @ts-ignore
    return res.json({
        status: "OK",
        body: req.body
    })
})

app.listen(port, () => {
    console.log(`server is running at port ${port}`);
})



// console.log(os.totalmem()/1024/1024/1024);
// console.log(os.cpus());
// console.log(os.uptime());




