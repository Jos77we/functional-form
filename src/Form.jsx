import React, { useState } from "react";

const Form = () => {
  const formBefore = {
    name: " ",
    description: " ",
    category: " ",
    quantity: " ",
    price: " ",
  };
  const [formData, setFormData] = useState(formBefore);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //process to submit the values obtained
  };

  const handleCancel = () => {
    window.location.reload();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            height: "500px",
            width: "400px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "30px",
          }}
        >
          <div style={{ height: "40px" }}>
            <p style={{ textAlign: "center", fontWeight: "600" }}>
              New Product
            </p>
          </div>

          <div style={{ height: "50px", width: "90%", marginLeft: "5px" }}>
            <input
              placeholder="Name"
              style={{
                height: "50px",
                width: "90%",
                border: "none",
                borderBottom: "1px solid black",
                outline: "none",
              }}
              type="text"
              name="name"
              onChange={handleInput}
            />
          </div>
          <div
            style={{
              height: "50px",
              width: "90%",
              marginTop: "10px",
              marginLeft: "5px",
            }}
          >
            <input
              placeholder="Description"
              style={{
                height: "50px",
                width: "90%",
                borderRadius: "1px solid black",
                border: "none",
                borderBottom: "1px solid black",
                outline: "none",
              }}
              type="text"
              name="description"
              onChange={handleInput}
            />
          </div>
          <div
            style={{
              height: "50px",
              width: "90%",
              marginTop: "10px",
              marginLeft: "5px",
            }}
          >
            <input
              placeholder="Category"
              style={{
                height: "50px",
                width: "90%",
                borderRadius: "1px solid black",
                border: "none",
                borderBottom: "1px solid black",
                outline: "none",
              }}
              type="text"
              name="category"
              onChange={handleInput}
            />
          </div>
          <div
            style={{
              height: "50px",
              width: "90%",
              marginTop: "10px",
              marginLeft: "5px",
            }}
          >
            <input
              placeholder="Quantity"
              style={{
                height: "50px",
                width: "90%",
                borderRadius: "1px solid black",
                border: "none",
                borderBottom: "1px solid black",
                outline: "none",
              }}
              type="text"
              name="quantity"
              onChange={handleInput}
            />
          </div>
          <div
            style={{
              height: "50px",
              width: "90%",
              marginTop: "10px",
              marginLeft: "5px",
            }}
          >
            <input
              style={{
                height: "50px",
                width: "90%",
                borderRadius: "1px solid black",
                border: "none",
                borderBottom: "1px solid black",
                outline: "none",
              }}
              type="text"
              name="price"
              onChange={handleInput}
              placeholder="Price"
            />
          </div>
          <div
            style={{
              height: "60px",
              marginTop: "20px",
              display: "flex",
              gridTemplateColumns: "auto",
              columnGap: "240px",
            }}
          >
            <button
              style={{
                height: "35px",
                width: "70px",
                backgroundColor: "rgb(29, 66, 121)",
                color: "white",
                border: "none",
                borderRadius: "4px",
              }}
              type="submit"
            >
              SUBMIT
            </button>
            <button
              style={{
                height: "35px",
                width: "70px",
                backgroundColor: "rgb(216, 216, 216)",
                border: "none",
                borderRadius: "4px",
              }}
              type="button"
              onClick={handleCancel}
            >
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
