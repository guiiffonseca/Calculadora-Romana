const { registerService } = require("../service/registerService");

const registerController = async (req, res, next) => {
    try {
        await registerService(req.body);

        res.status(201).json({
            message: "Registered",
        })
        
    } catch (error) {
        next(error);
        console.log(error);   
    }
};

module.exports={ registerController }