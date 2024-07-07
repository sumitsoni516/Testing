const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server is listening at ", PORT);
})
app.use(express.json());

app.get("/getname", (request, response) => { //https://example.com/api/getname
    response.status(201).json({
        statusCode: 1,
        statusMessage: "SUCCESS",
        data: {
            "name" : "Sumit"
        }
        
    })
})

app.post("/updatename", (req, res) => {
    try {
        const lastName = req.body.lastname;
        console.log(lastName);
        if (!lastName) throw new Error("Last name does not found");

        res.status(200).json({
					statusCode: 1,
					statusMessage: "SUCCESS",
					data: {
						name: "Sumit "+lastName,
					},
				});
        
    } catch (error) {
        res.status(400).json({
            statusCode: 0,
            statusMessage: "ERROR",
            ErrorMessage : error.message
        })
    }
})
