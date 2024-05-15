// import React from "react";
// import { Container,Navbar ,Badge,Form,Button} from "react-bootstrap";

// const Sellproperty=()=>{
//     return(
//         <>
//       <div style={{ backgroundColor: 'lightgrey' }}>
//   <Navbar expand="lg" className="bg-body-tertiary" fixed="top" style={{ zIndex: 1020, marginTop: '0px' }}>
//     <Container fluid className='navColor' style={{ height: '50px' }}>
//       <Navbar.Brand href="#home" className='text-white' style={{ marginLeft: '30px' }}>
//         <img src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mb-logo-web-white.svg" width="160" alt="logo" />
//       </Navbar.Brand>
//     </Container>
//   </Navbar>
//   <Container fluid>
//     <div className='d-flex mt-5 mb-4'>
//       <div style={{ width: '60%', backgroundColor: '#fff' }}>
//         <Form style={{ margin: '4rem 0 0 10rem' }}>
//           <h2>Sell or Rent your Property</h2>
//           <p className="d-flex  align-items-start">You are posting this property for
//             <Badge bg="warning" text="dark" style={{ fontSize: '15px', marginLeft: '2px' }}>FREE!</Badge>
//             {/* <img src="https://fiverr-res.cloudinary.com/videos/t_thumbnail3_3/yv3ychpss2uyzdslyipn/create-professional-ads-youtube-shorts-tiktok-videos-creative-ads.png" alt="postimage" height="auto" width="25%" style={{ marginLeft: '10rem', maxHeight: '140px' }} /> */}
//           </p>
//           {/* <span>Listing Package</span><span style={{fontWeight:'bold'}} className="mx-5">1 Standard Listing - Free</span>
//           <br/> */}

//           {/* <h4 className="my-5">Property Details</h4>
//           <span className="mx-3">For</span> */}


// <div>
//     <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Owner Name</Form.Label>
//         <Form.Control type="text" placeholder="Enter Name" name="name"/>
//         {/* <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text> */}
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Email</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" name="mail" />
//       </Form.Group>


//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>MobileNumber</Form.Label>
//         <Form.Control type="phnumber" placeholder="Enter number" name="phonenumber" />
//       </Form.Group>
     
//       <Form.Group className="mb-3"  controlId="formImages">
//                 <Form.Label>Select Images</Form.Label>
//                 <Form.Control type="file"  placeholder="Add images" name="Images"  />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Flate</Form.Label>
//         <Form.Control type="text" placeholder="example 2bhk or 3bhk" name="Flate" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>price</Form.Label>
//         <Form.Control type="number" placeholder="Enter Price" name="Price" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Squere fit</Form.Label>
//         <Form.Control type="text" placeholder="example 224sqt" name="Square" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Adress</Form.Label>
//         <Form.Control type="text" placeholder="Enter address" name="Address" />
//       </Form.Group>
            


     
     
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
  

// </div>




         
//         </Form>

//       </div>
//     </div>
//   </Container>
// </div>


//         </>
//     )
// }
// export default Sellproperty










// import React, { useState } from "react";
// import { Container, Navbar, Badge, Form, Button } from "react-bootstrap";
// import axios from 'axios';
// const SellProperty = () => {
//   const [formData, setFormData] = useState({
//     ownerName: "",
//     email: "",
//     mobileNumber: "",
//     flat: "",
//     price: "",
//     squareFit: "",
//     address: "",
//     images: null,
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     const files = e.target.files;
//     setFormData({ ...formData, images: files });
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log("Form data:", formData);
//   //   // Here you can send the formData to your backend for further processing
//   // };


 

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const formDataToSend = new FormData();
//     formDataToSend.append('ownerName', formData.ownerName);
//     formDataToSend.append('email', formData.email);
//     formDataToSend.append('mobileNumber', formData.mobileNumber);
//     // Append each image file to the FormData object
//     for (let i = 0; i < formData.images.length; i++) {
//       formDataToSend.append('images', formData.images[i]);
//     }
//     formDataToSend.append('flat', formData.flat);
//     formDataToSend.append('price', formData.price);
//     formDataToSend.append('squareFit', formData.squareFit);
//     formDataToSend.append('address', formData.address);

//     // Make the POST request to your backend endpoint
//     const response = await axios.post('http://your-backend-api-url', formDataToSend, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     console.log('Form data sent successfully:', response.data);
//     // Optionally handle success, reset form, show success message, etc.
//   } catch (error) {
//     console.error('Failed to send form data:', error);
//     // Optionally handle error, show error message, etc.
//   }
// };


//   return (
//     <>
//       <div style={{ backgroundColor: "lightgrey" }}>
//         <Navbar
//           expand="lg"
//           className="bg-body-tertiary"
//           fixed="top"
//           style={{ zIndex: 1020, marginTop: "0px" }}
//         >
//           <Container fluid className="navColor" style={{ height: "50px" }}>
//             <Navbar.Brand href="#home" className="text-white" style={{ marginLeft: "30px" }}>
//               <img
//                 src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mb-logo-web-white.svg"
//                 width="160"
//                 alt="logo"
//               />
//             </Navbar.Brand>
//           </Container>
//         </Navbar>
//         <Container fluid>
//           <div className="d-flex mt-5 mb-4">
//             <div style={{ width: "60%", backgroundColor: "#fff" }}>
//               <Form style={{ margin: "4rem 0 0 10rem" }} onSubmit={handleSubmit}>
//                 <h2>Sell or Rent your Property</h2>
//                 <p className="d-flex align-items-start">
//                   You are posting this property for
//                   <Badge bg="warning" text="dark" style={{ fontSize: "15px", marginLeft: "2px" }}>
//                     FREE!
//                   </Badge>
//                 </p>
//                 <Form.Group className="mb-3" controlId="ownerName">
//                   <Form.Label>Owner Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter Name"
//                     name="ownerName"
//                     value={formData.ownerName}
//                     onChange={handleInputChange}
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="email">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     placeholder="Enter email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="mobileNumber">
//                   <Form.Label>Mobile Number</Form.Label>
//                   <Form.Control
//                     type="tel"
//                     placeholder="Enter number"
//                     name="mobileNumber"
//                     value={formData.mobileNumber}
//                     onChange={handleInputChange}
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="images">
//                   <Form.Label>Select Images</Form.Label>
//                   <Form.Control
//                     type="file"
//                     placeholder="Add images"
//                     name="images"
//                     multiple
//                     onChange={handleFileChange}
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="flat">
//                   <Form.Label>Flat</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Example 2BHK or 3BHK"
//                     name="flat"
//                     value={formData.flat}
//                     onChange={handleInputChange}
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="price">
//                   <Form.Label>Price</Form.Label>
//                   <Form.Control
//                     type="number"
//                     placeholder="Enter Price"
//                     name="price"
//                     value={formData.price}
//                     onChange={handleInputChange}
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="squareFit">
//                   <Form.Label>Square Fit</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Example 224 sqft"
//                     name="squareFit"
//                     value={formData.squareFit}
//                     onChange={handleInputChange}
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="address">
//                   <Form.Label>Address</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter Address"
//                     name="address"
//                     value={formData.address}
//                     onChange={handleInputChange}
//                   />
//                 </Form.Group>

//                 <Button variant="primary" type="submit">
//                   Submit
//                 </Button>
//               </Form>
//             </div>
//           </div>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default SellProperty;






// import React, { useState } from "react";

// // import "./addProduct.css";
// // import { Navbar } from "react-bootstrap";
// // import ANavbar from "../anavbar/anavbar";

// const AddProduct = () => {
//   const [image, setImage] = useState(null);
//   const [productDetails, setProductDetails] = useState({
//     name: "",
//     image: "",
//     flat: "",
//     price: "",
//     sqft: "",
//     address:"",
//   });

//   const AddProduct = async () => {
//     try {
//       let formData = new FormData();
//       formData.append("product", image);

//       const imageResponse = await fetch("http://localhost:3002/upload", {
//         method: "POST",
//         body: formData
//       });
//       const imageData = await imageResponse.json();

//       if (imageData.success) {
//         const product = { ...productDetails, image: imageData.image_url };
//         const productResponse = await fetch("http://localhost:3002/addproduct", {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify(product)
//         });
//         const productData = await productResponse.json();

//         if (productData.success) {
//           alert("Product Added");
//           // Clear form after successful submission
//           setProductDetails({
//             name: "",
//             image: "",
//             number:"",
//             // image2: "",
//             // image3: "",
//             email:"",
//             flat: "",
//             price: "",
//             sqft: "",
//             address:"",
//           });
//           setImage(null);
//         } else {
//           alert("Failed to add product");
//         }
//       } else {
//         alert("Failed to upload image");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while adding the product");
//     }
//   };

//   const changeHandler = (e) => {
//     setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
//   };

//   const imageHandler = (e) => {
//     setImage(e.target.files[0]);
//   };

//   return (
//     <>
//       {/* <ANavbar /> */}
//       <div className="addproduct shadow">
//         <div>
//           <h2>Owner Details</h2>
//         </div>
//         <div className="addproduct-itemfield">
//           <p>Product Name</p>
//           <input
//             type="text"
//             name="name"
//             value={productDetails.name}
//             onChange={changeHandler}
//             placeholder="Enter product title here"
//           />
//         </div>

//         <div className="addproduct-itemfield">
//           <p>Product Email</p>
//           <input
//             type="text"
//             name="email"
//             value={productDetails.email}
//             onChange={changeHandler}
//             placeholder="Enter email"
//           />
//         </div>

//         <div className="addproduct-itemfield">
//           <p>Product Mobile</p>
//           <input
//             type="text"
//             name="number"
//             value={productDetails.number}
//             onChange={changeHandler}
//             placeholder="Enter product title here"
//           />
//         </div>

//         <div className="addproduct-price">
//           <div className="addproduct-itemfield">
//             <p>sqft</p>
//             <input
//               type="text"
//               name="sqft"
//               value={productDetails.sqft}
//               onChange={changeHandler}
//               placeholder="Type price here"
//             />
//           </div>
//           <div className="addproduct-itemfield">
//             <p> Price</p>
//             <input
//               type="text"
//               name="price"
//               value={productDetails.price}
//               onChange={changeHandler}
//               placeholder="Type offer price here"
//             />
//           </div>
//           <div className="addproduct-itemfield">
//             <p> flat</p>
//             <select
//               value={productDetails.flat}
//               name="flat"
//               className="add-product-selector"
//               onChange={changeHandler}
//             >
//               <option value="1BHK">1BHk</option>
//               <option value="2BHk">2BHk</option>
//               <option value="3BHk">3BHk</option>
//               <option value="4BHk">4BHk</option>
//             </select>
//           </div>
//         </div>

//         <div className="addproduct-itemfield">
//             <p> Address</p>
//             <input
//               type="text"
//               name="address"
//               value={productDetails.address}
//               onChange={changeHandler}
//               placeholder="Enter Adress"
//             />
//           </div>

//         <div className="addproduct-itemfield">
//           <p>Product images</p>
//           <label htmlFor="file-input" aria-label="Upload image">
//             <img
//               className="addproduct-thumbnail-img"
//               src={image ? URL.createObjectURL(image) : ""}
//               alt=""
//             />
//           </label>
//           <input
//             onChange={imageHandler}
//             type="file"
//             name="image"
//             id="file-input"
            
//           />
//         </div>

//         <button className="addproduct-btn" onClick={AddProduct}>
//           ADD
//         </button>
//       </div>
//     </>
//   );
// };

// export default AddProduct;



import React, { useState } from "react";
import { Container } from "react-bootstrap";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    email: "",
    number: "",
    flat: "",
    price: "",
    sqft: "",
    address: "",
  });

  const AddProduct = async () => {
    // Add your logic for adding a product

    try {
      let formData = new FormData();
      formData.append("product", image);

      const imageResponse = await fetch("http://localhost:3002/upload", {
        method: "POST",
        body: formData
      });
      const imageData = await imageResponse.json();

      if (imageData.success) {
        const product = { ...productDetails, image: imageData.image_url };
        const productResponse = await fetch("http://localhost:3002/addproduct", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(product)
        });
        const productData = await productResponse.json();

        if (productData.success) {
          alert("Product Added");
          // Clear form after successful submission
          setProductDetails({
            name: "",
            image: "",
            number:"",
            email:"",
            flat: "",
            price: "",
            sqft: "",
            address:"",
          });
          setImage(null);
        } else {
          alert("Failed to add product");
        }
      } else {
        alert("Failed to upload image");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding the product");
    }
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <Container
    
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        className="add-product shadow p-4"
        style={{
          width: "400px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h1>Fill THE deatils</h1>
        <h2
          className="text-center mb-4"
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#333333",
          }}
        >
          Owner Details
        </h2>
        <form>
          <div className="mb-3">
            <label
              className="form-label"
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#555555",
              }}
            >
              Owner Name
            </label>
            <input
              type="text"
              name="name"
              value={productDetails.name}
              onChange={changeHandler}
              className="form-control"
              placeholder="Enter OwnerName here"
            />
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#555555",
              }}
            >
              Owner Email
            </label>
            <input
              type="text"
              name="email"
              value={productDetails.email}
              onChange={changeHandler}
              className="form-control"
              placeholder="Enter Owner email"
            />
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#555555",
              }}
            >
              Owner MobileNumber
            </label>
            <input
              type="text"
              name="number"
              value={productDetails.number}
              onChange={changeHandler}
              className="form-control"
              placeholder="Enter Owner Number"
            />
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#555555",
              }}
            >
              Price
            </label>
            <input
              type="text"
              name="price"
              value={productDetails.price}
              onChange={changeHandler}
              className="form-control"
              placeholder="Type offer price here"
            />
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#555555",
              }}
            >
              Sqft
            </label>
            <input
              type="text"
              name="sqft"
              value={productDetails.sqft}
              onChange={changeHandler}
              className="form-control"
              placeholder="Type price here"
            />
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#555555",
              }}
            >
              Flat
            </label>
            <select
              name="flat"
              value={productDetails.flat}
              onChange={changeHandler}
              className="form-select"
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#555555",
              }}
            >
              <option value="">Select</option>
              <option value="1BHK">1BHK</option>
              <option value="2BHK">2BHK</option>
              <option value="3BHK">3BHK</option>
              <option value="4BHK">4BHK</option>
            </select>
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#555555",
              }}
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              value={productDetails.address}
              onChange={changeHandler}
              className="form-control"
              placeholder="Enter Address"
            />
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#555555",
              }}
            >
              Product Images
            </label>
            <input
              type="file"
              name="image"
              onChange={imageHandler}
              className="form-control"
              accept="image/*"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={AddProduct}
            style={{
              width: "100%",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "4px",
              backgroundColor: "#007bff",
              border: "none",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
};

export default AddProduct;
