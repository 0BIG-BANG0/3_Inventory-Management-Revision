1. install all th dependencies(express,ejs,nodemon,expressvalidator)
2. create express server, use body parser so that you can add form data,set up static files
3. set up m v c(m: should be some Products and functions which would add and get product to and from the model, view: should have a layout page and add form page, controller: should have getProducts func where we return Products, getAddform: here we have to render the new-product.ejs file, postAddProduct: here we get products from the model and render the products it shows all the product) and you know about Routes.
   **_Till here we have done_**

4. Update: 1. Create a controller function (In it you extract the id of the Product and sent it to the model module and in Model module there id a fucntion that take the id and check it in the database if found then render a "update-product" view otherwise return 404 error. in the rendering we have to send the data as well and errorMessages if there is any.
Like we have to exract id so the best way is to send it in prams form and the extract it to like req.params)
views: Create Update Product view( Create an update-Product and copy paste the new-product and add an id field to it and make it hidden, because of this id field it is going to diffentiate with each other and id should have a unique name and it should have a value in ejs format(<%= product.id %>) so that it can differentiate btw products .In product add a coulumn actions and add an ancor tag for update and provide ID of product in it. While updating it should have a that previous value in which we have to change )

routes: add a get which take param id it should also have a route which will take a post req so that it will show the updated product

model: always revise your model class its your weak point. In getById func you have to find the id using find function
and in update to have to find the Index using find Index method.


5. Delete:
whatever req we send from anchor tags are basically get req.

view: 1. add a new button DELETE
routes: 2.add a get req that will show all products
3.that get req is now changed to post 

model:1.add a deleteById func in which it deletes element by using splice.

controller:1. we send the id to the model where it deletes and then we get the remainig products to render.

6. Search Functionality
1.View: In Layout add bootstrap form in form method can be get and post both
if GET then in controller use req.query and your search product will get reflect in url. Else Post then use req.body 
  and searchResult write the code to show that product
2.routes : if GET then in controller use req.query and your search product will get reflect in url. Else Post then use req.body
3.controller: you can get it from above
4.model : You will use filter to filter out product name and then that product  
const searchPro = products.filter(p => 
      {
        if(p.name == name){
          return p;
        }
      }  );
    return searchPro;

Why you stuck on the search functionality
ans is here 

<form action="/search" method="post" class="d-flex">
            <input
              class="form-control me-2"
              type="text"
              name="name"
              placeholder="Search"
              aria-label="Search"
            /> what does h name signify here
ChatGPT
In the provided HTML code snippet, the name attribute is used within an <input> element. The name attribute specifies the name of the input field when it's submitted as part of a form. When the form is submitted, the data entered into this input field will be sent to the server as part of the form submission, and it will be associated with the name specified in the name attribute.

In this case, the name attribute is set to "name". This means that when the form is submitted, the value entered into this input field will be sent to the server with the name "name". For example, if a user enters "Product 1" into the search field and submits the form, the server will receive a parameter named "name" with the value "Product 1".

In summary, the name attribute in this context signifies the identifier of the input field when it's submitted as part of a form, allowing the server to access the data associated with that input field.

User
but name is name my server is receiving undefiend but when search it is recieving product name
ChatGPT
I see the confusion. It seems like the issue lies in how the form data is being processed on the server-side.

In HTML forms, the name attribute is used to identify form controls within the form submission. When the form is submitted, the data associated with each input field is sent to the server with the name specified by the name attribute.

In your case, the input field has the name attribute set to "name":

html
Copy code
<input
  class="form-control me-2"
  type="text"
  name="name"
  placeholder="Search"
  aria-label="Search"
/>
This means that when the form is submitted, the value entered into this input field will be sent to the server with the key "name".

On the server-side, you should be able to access this value using the key "name". For example, in Node.js with Express, you might access it like this:

javascript
Copy code
app.post('/search', (req, res) => {
  const searchName = req.body.name; // Access the value with the key "name"
  // Now you can use the value of searchName to perform your search
});
Make sure that your server-side code is correctly accessing the form data with the key "name" to avoid receiving undefined. If you're still encountering issues, double-check your server-side code to ensure that it's correctly handling form submissions and accessing the form data.