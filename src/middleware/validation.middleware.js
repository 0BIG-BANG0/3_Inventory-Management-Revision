import {body, validationResult} from 'express-validator'

const validateRequest = async(req,res,next)=>{
    //Step 1: Setup rules for validation
const rules = [
    body('name').isLength({min : 1}).withMessage('Name is required'),
    body('price').isInt({min : 1}).withMessage('Price should be greater than 1'),body('imageUrl').isURL().withMessage('Image URL is missing')
    ]
    //Step 2: Run the rules
    await Promise.all(rules.map((rule) => rule.run(req)))
    let validationErrors = validationResult(req)
    console.log(validationErrors)
    //Check if there was any validation error
    if(!validationErrors.isEmpty()){
    res.render('new-product', { errorMessage: validationErrors.array()[0].msg
    
    })
    }else{
    next()
}
}

export default validateRequest

//OLD CODE

//Validate form data
        // const {name, price, imageUrl} = req.body;
        // let errors = [];

        // if(!name || name.trim()==''){
        //     errors.push("Name is required")
        // }
        // if(!price || parseFloat(price)<1){
        //     errors.push("Price must be a positive value")
        // }
        // try{
        //     const validUrl = new URL(imageUrl)
        // }catch(err){
        //     errors.push("URL is invalid")
        // }
        // if(errors.length > 0){
        //     return res.render("new-product", {errorMessage: errors[0]})
        // }