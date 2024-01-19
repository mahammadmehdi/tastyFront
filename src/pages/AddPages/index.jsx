import React, { useContext, useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { SeacrhContext } from "../../context/searchContext";
import { Helmet } from "react-helmet-async";

function AddPages() {
    const {handleSearch,seacrh} = useContext(SeacrhContext)
    const navigate = useNavigate()
  const [table, setTable] = useState([]);
  const [sortedProperty, setSortedProperty] = useState(null)

  useEffect(() => {
    getAll();
  }, []);

  function handleAdd(val) {
    fetch("http://localhost:3000/", {
      method: "POST",
      body: JSON.stringify(val),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    navigate("/")
  }
  function getAll() {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setTable(data));
  }
  function Delete(id) {
    fetch("http://localhost:3000/" +id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        getAll();
      });
  }

  return (
    <div className="addPages">
        <Helmet>
            <title>Add Pages</title>
        </Helmet>
      <Formik
        initialValues={{ image: "", name: "", desc: "", price: "" }}
        validationSchema={Yup.object({
          image: Yup.string().required("Required"),
          name: Yup.string().required("Required"),
          desc: Yup.string().required("Required"),
          price: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleAdd(values)
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="image">Image</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <label htmlFor="name"> Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="desc">Description</label>
          <Field name="desc" type="text" />
          <ErrorMessage name="desc" />

          <label htmlFor="price">Price</label>
          <Field name="price" type="text" />
          <ErrorMessage name="price" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <div className="sort">
        <input type="text" onChange={(e)=>handleSearch(e)}  />
        <div className="btn"><button onClick={()=>setSortedProperty({property:"name", asc:true})}>A-Z</button>
        <button onClick={()=>setSortedProperty({property:"name", asc:false})}>Z-A</button>
        <button onClick={()=>setSortedProperty({property:"price", asc:true})}>Price Up</button>
        <button onClick={()=>setSortedProperty({property:"price", asc:false})}>Price Down</button>
        <button onClick={()=>setSortedProperty(null)}> Default</button></div>

      </div>

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Desc</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {table
          .filter((x)=>x.name.toLowerCase().includes(seacrh.toLowerCase()))
          .sort((a,b) => {
            if (sortedProperty && sortedProperty.asc) {
                return (a[sortedProperty.property] > b[sortedProperty.property]) ? 1 : ((b[sortedProperty.property] > a[sortedProperty.property]) ? -1 : 0)
            }else if (sortedProperty && sortedProperty.asc === false) {
                return (a[sortedProperty.property] < b[sortedProperty.property]) ? 1 : ((b[sortedProperty.property] < a[sortedProperty.property]) ? -1 : 0)
            }else{
                return 0
            }
          })
          .map((x) => (
            <tr key={x._id}>
              <td><img src={x.image}  /></td>
              <td>{x.name}</td>
              <td>{x.desc}</td>
              <td>{x.price}</td>
              <td><i onClick={()=>Delete(x._id)} className="fa-solid fa-trash"></i></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddPages;
